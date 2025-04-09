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
            async queryFn({searchTerm, category, priceRange, region, page, pageSize}) {
              
              let query = supabase
                .from('products')
                .select('*', { count: 'exact' })
                .order('created_at', { ascending: false })

                  if(searchTerm){
                    query = query.textSearch('productName', `${searchTerm}`)
                  }
                  
                  if(category){
                    query = query.eq('productCategory', category)
                  }

                  if(region){
                    query = query.eq('productRegion', region)
                  }
                  
                  if(priceRange){
                   query = query.gte('productPrice', priceRange[0]).lte('productPrice', priceRange[1])
                  }

                  // 3. Apply pagination AFTER filters
                  const startIndex = (page - 1) * pageSize;
                  const endIndex = startIndex + pageSize - 1;
                  query = query.range(startIndex, endIndex);

                  const { data, error, count } = await query
            
                  return error ? { error } : { data: { products: data, totalCount: count }} 
              
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
            async queryFn({searchTerm, page, pageSize}) {
              let query = supabase
              .from('products')
              .select('*,regions(regionName),categories(categoryName)', {count: 'exact'})
              .order('created_at', { ascending: false })
            
              if(searchTerm){
                query = query.textSearch('productName', `${searchTerm}`)
              }

              const startIndex = (page - 1) * pageSize;
              const endIndex = startIndex + pageSize - 1;
              query = query.range(startIndex, endIndex);
              
              const { data, error,count } = await query
              console.log(`ADMIN QUERY COUNT ${data}`)
              return error ? { error } : { data: { products: data, totalCount: count }} 
            },
            providesTags: ['Products']
          }),

          deleteProduct:builder.mutation({
            async queryFn(id){
                const {data, error} = await supabase.from('products').delete().eq('id', id).select('*')
                
                if (error) throw error
                return {data}
            },
            invalidatesTags: (result, error, id) => ['Products'],

            onQueryStarted: async (id, { dispatch, queryFulfilled, getState }) => {
              // Optimistic update logic for paginated data
              const patchResult = dispatch(
                api.util.updateQueryData('getAdminProducts', (draft) => {
                  const index = draft.products.findIndex(p => p.id === id);
                  if (index !== -1) {
                    draft.products.splice(index, 1);
                    draft.count -= 1;
                  }
                })
              );
              try {
                await queryFulfilled;
              } catch {
                patchResult.undo();
              }
            }
          }),
          
    })
})

export const {useCreateProductMutation, useGetProductsQuery, useGetAdminProductsQuery, useGetSingleProductQuery, useGetProductsByCategoryQuery, useDeleteProductMutation} = productApiSlice

