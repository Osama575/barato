import supabase from "@/app/supabaseClient";
import { apiSlice } from "./apiSlice";

// const baseUrl = 'https://byunydadjltixnqibsdm.supabase.co'
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        createProduct: builder.mutation({
            async queryFn(productData) {
              const { data, error } = await supabase
                .from('products')
                .insert([productData])
                .single()
      
              return error ? { error } : { data }
            },
            invalidatesTags: ['Products']
          }),


        getSingleProduct: builder.query({
            async queryFn(id) {
              const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single()
              return error ? { error } : { data }
            }
          }),

          getProducts: builder.query({
            async queryFn({searchTerm, category, PriceRange, Region}) {
              
              let query = supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false })
              
                  if(searchTerm){
                    query = query.textSearch('productName', `${searchTerm}`)
                  }
                  
                  if(category){
                    query = query.eq('productCategory', category)
                  }
                  if(Region){
                    query = query.eq('productRegion', Region)
                  }
                  
                  if(PriceRange){
                   query = query.gte('productPrice', PriceRange[0]).lte('productPrice', PriceRange[1])
                  }

                  const { data, error } = await query
                  return error ? { error } : { data }
              
            },
            providesTags: ['Products']
          }),

          getProductsByCategory:builder.query({
            async queryFn(category){
                const {data, error} = await supabase.from('products').select("*").eq('productCategory', category)
                return error ? {error} : {data}
            }
          }),

          getAdminProducts: builder.query({
            async queryFn({searchTerm}) {
              let query = supabase
              .from('products')
              .select('*,regions(regionName),categories(categoryName)')
              .order('created_at', { ascending: false })
            
              if(searchTerm){
                query = query.textSearch('productName', `${searchTerm}`)
              }
              
              const { data, error } = await query
              return error ? { error } : { data }
            },
            providesTags: ['Products']
          })
          
    })
})

export const {useCreateProductMutation, useGetProductsQuery, useGetAdminProductsQuery, useGetSingleProductQuery, useGetProductsByCategoryQuery} = productApiSlice

