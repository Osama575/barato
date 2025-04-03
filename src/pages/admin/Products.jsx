import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { MdAddToPhotos } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { BiCloudUpload } from "react-icons/bi";
import Modal from '@/components/Modal';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import supabase from '@/app/supabaseClient';
import { useCreateProductMutation, useGetAdminProductsQuery } from '@/app/features/api/productApiSlice';
import { useGetCategoriesQuery } from '@/app/features/api/categoriesApiSlice';
import useDebounce from '@/hooks/useDebounce';
import { useGetRegionsQuery } from '@/app/features/api/regionsApiSlice';

const productSchema = z.object({
    productName: z.string().trim().min(1, "Please add a product name"),
    productDescription: z.string().trim().min(1,"Please add a product descripotion"),
    productPrice: z.coerce.number().min(1, "Please include product price"),
    discountedPrice: z.number().optional(),
    productImage: z.any().refine(file => file?.length !== 0, 'Image is required'),
    productCategory: z.coerce.number().min(1, "Category selection is required"),
    productRegion: z.coerce.number().min(1, "Category selection is required")
})

const Products = () => {
    const [openModal,setOpenModal] = useState(false)
    const [searchTerm,setSearchTerm] = useState('')
    const [createProduct, {isLoading}] = useCreateProductMutation()
    const value = useDebounce(searchTerm)
    const {data: products} = useGetAdminProductsQuery({searchTerm: value});
    const {data: categories} = useGetCategoriesQuery({searchTerm: ''});
    const {data: regions} = useGetRegionsQuery({searchTerm: ''});

    const {register, handleSubmit,reset, formState:{errors,isSubmitting}} = useForm({
        resolver: zodResolver(productSchema)
    })

    const handleImageUpload = async (file) => {
        try {
            const fileName = `${Date.now()}-${file.name}`
            const { data, error } = await supabase.storage
            .from('product-image')
            .upload(fileName, file)
        
            if (error) throw error;

            // Get public URL
            const { data: url } = supabase.storage
              .from('product-image')
              .getPublicUrl(data.path);
            
              console.log(url)
            return url.publicUrl;
        } catch (error) {
            console.log(error)
        }
      }

    const onSubmit = async (formData) => {
        try {
          const imageUrl = await handleImageUpload(formData.productImage[0])
          
          await createProduct({
            ...formData,
            productPrice: Number(formData.productPrice),
            discountedPrice: Number(formData.discountedPrice),
            productImage: imageUrl
          })
          
          reset()
          setOpenModal(false)
        } catch (error) {
          console.error('Error creating product:', error)
        }
    }

  return (
    <div className='w-full h-full pt-14 px-5'>
        <div className='flex flex-col lg:flex-row items-center gap-3 lg:gap-0 justify-between'>
            <div className='flex items-center gap-5'>
                <h1 className='font-semibold'>Product List</h1>
                <input placeholder='search product...' onChange={(e) => setSearchTerm(e.target.value)}  className='appearance-none lg:w-[320px] h-[37px] rounded-xl placeholer:text-xs text-[#121212]/70 border-[1px] border-black/40 px-5' />
            </div>

            <Button onClick={() => setOpenModal(true)} className='lg:w-max w-full h-[40px] px-6 flex items-center gap-3'>
                <MdAddToPhotos />
                Add Product
            </Button>
        </div>  


                <div className='w-full lg:w-full overflow-x-scroll mt-10'>
                    <Table className='lg:w-full w-[600px]'>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-left">Name</TableHead>
                                <TableHead className='text-left'>Image</TableHead>
                                <TableHead className='text-left'>Price</TableHead>
                                <TableHead className='text-left'>Description</TableHead>
                                <TableHead className='text-left'>Category</TableHead>
                                <TableHead className='text-left'>Region</TableHead>
                                <TableHead className="text-left"> Action </TableHead>
                            </TableRow>
                        </TableHeader>
        
                        <TableBody>
                                {products?.map(product => (
                                    <TableRow key={product.id} className='rounded-lg shadow-lg bg-white'>
                                        <TableCell className="grow w-[250px]"> {product.productName} </TableCell>
                                        <TableCell className="grow w-[350px] lg:w-[250px]"> <img className='w-[50px] lg:h-[47px] h-[79.31px] object-cover' src={product.productImage} /> </TableCell>
                                        <TableCell className='grow w-[250px]'> ${product.productPrice}</TableCell>
                                        <TableCell><p className='text-wrap  w-[300px] pr-4'>{product.productDescription}</p> </TableCell>
                                        <TableCell><p className='text-wrap  w-[300px] pr-4'>{product.categories?.categoryName}</p> </TableCell>
                                        <TableCell><p className='text-wrap  w-[300px] pr-4'>{product.regions?.regionName}</p> </TableCell>
                                        <TableCell className='grow w-[250px]'><GoTrash  className='text-primary w-5 h-5' /></TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>

                {openModal &&  
                <Modal 
                formSize={"lg"}
                handleModal={setOpenModal} 
                children={
                <form onSubmit={handleSubmit(onSubmit)} className='w-full overflow-y-scroll'>
                    <div className='w-full flex flex-col gap-8'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label>Regions</label>
                            <select {...register('productRegion')} className='appearance-none w-full h-[50px] rounded-md border-[1px] border-black/40 px-5'>
                                <option disabled selected >Select product category</option>
                                {regions?.map(region => (
                                    <option value={region.id}>{region.regionName}</option>
                                ))}
                            </select>
                            {errors.productRegion && (<p className="mt-1 text-red-500 text-sm">{errors.productRegion.message}</p>)}
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label>Category</label>
                            <select {...register('productCategory')} className='appearance-none w-full h-[50px] rounded-md border-[1px] border-black/40 px-5'>
                                <option disabled selected >Select product category</option>
                                {categories?.map(category => (
                                    <option value={category.id}>{category.categoryName}</option>
                                ))}
                            </select>
                            {errors.productCategory && (<p className="mt-1 text-red-500 text-sm">{errors.productCategory.message}</p>)}
                        </div>

                        <div className='flex flex-col gap-1 w-full my-3'>
                            <label>Product Name</label>
                            <input {...register('productName')} type='text' className='appearance-none w-full h-[50px] rounded-md border-[1px] border-black/40 px-5'/>
                            {errors.productName && (<p className="mt-1 text-red-500 text-sm">{errors.productName.message}</p>)}
                        </div>
                    </div>

                    <div className='w-full flex items-start  gap-8 my-3'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label>Price</label>
                            <input {...register('productPrice')} type='number' className='w-full h-[50px] rounded-md border-[1px] border-black/40 px-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>
                            {errors.productPrice && (<p className="mt-1 text-red-500 text-sm">{errors.productPrice.message}</p>)}
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-sm lg:text-base'>Discount (optional)</label>
                            <input type='text' className='w-full h-[50px] rounded-md border-[1px] border-black/40 px-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full my-3'>
                        <label>Description</label>
                        <textarea {...register('productDescription')} type='text' className='appearance-none w-full h-[150px] rounded-md border-[1px] border-black/40 p-5'/>
                        {errors.productDescription && (<p className="mt-1 text-red-500 text-sm">{errors.productDescription.message}</p>)}
                    </div>

                    <div className='flex flex-col gap-1 w-max my-3'>
                        <label htmlFor='image' className='flex items-center gap-3  rounded-md cursor-pointer'>
                            Upload Image
                            <BiCloudUpload className='text-primary w-8 h-8' />
                        </label>
                        <input {...register('productImage')}   id='image' type='file' className='appearance-none cursor-pointer'/>
                        {errors.productImage && (<p className="mt-1 text-red-500 text-sm">{errors.productImage.message}</p>)}
            
                    </div>

                    <Button type='submit' className='w-full h-[50px]'>
                        Create Product
                    </Button>
                </form>
                }
                />}
                
    </div>
  )
}

export default Products