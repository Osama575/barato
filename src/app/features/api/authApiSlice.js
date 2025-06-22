import supabase from "@/app/supabaseClient";
import { apiSlice } from "./apiSlice";


const authAPiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        signUpUser: builder.mutation({
            async queryFn({id, email, role, firstName, lastName}){
                console.log(firstName, lastName)
                try {
                    const { data, error } = await supabase
                    .from('users')
                    .insert([{
                      id,
                      email,
                      role,
                      firstName,
                      lastName
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

        forgotPassword:builder.mutation({
            async queryFn({email}){
                try {
                   const { data } = await supabase.auth.resetPasswordForEmail(email, {
                        redirectTo: 'http://localhost:5173/auth/reset-password',
                    });
                    console.log(data)
                    return data
                } catch (error) {
                    console.log("FORGOT PASSWORD ERROR: ", error)
                }
            }
        }),

        resetPassword:builder.mutation({
            async queryFn({password}){
                try {
                     const response = await supabase.auth.updateUser({
                        password
                     });
                     return response;
                } catch (error) {
                    console.log("RESET ERROR: ", error)
                }
            }
        })


    })
})
export const {useSignInUserMutation, useSignUpUserMutation, useSignOutUserMutation, useGetUserQuery, useForgotPasswordMutation, useResetPasswordMutation} = authAPiSlice;