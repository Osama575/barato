import supabase from "@/app/supabaseClient";
import { apiSlice } from "./apiSlice";


const authAPiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        signUpUser: builder.mutation({
            async queryFn({id, email, role}){
                try {
                    const { data, error } = await supabase
                    .from('users')
                    .insert([{
                      id,
                      email,
                      role
                    }])
                    .select();

                    return error ? {error} :{data}

                } catch (error) {
                    console.log(error)
                }
               
            }
        }),


        signInUser:builder.mutation({
            async queryFn(formData){
                console.log(formData)
                const {data,error} = await supabase.auth.signInWithPassword(formData);
                console.log({data})
                return error ? {error} : {data}
            }
        }),

        getUser:builder.query({
            async queryFn(id){
                const {data,error} = await supabase.from('users').select('*').eq('id', id)
                console.log({data})
                return error ? {error} : {data}
            }
        }),


        signOutUser:builder.mutation({
            async queryFn(){
                try {
                    const { error } = await supabase.auth.signOut();
                    
                    if (error) {
                      console.error('Sign out error:', error);
                      return { error: { message: error.message, code: error.status } };
                    }
                    
                    console.log('Sign out successful');
                    
                  } catch (error) {
                    console.error('Unexpected error during sign out:', error);
                  }
            }
        }),


    })
})

export const {useSignInUserMutation, useSignUpUserMutation, useSignOutUserMutation, useGetUserQuery} = authAPiSlice;