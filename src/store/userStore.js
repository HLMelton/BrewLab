
//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { useBrewStore } from "./brewStore";
import.meta.env;

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async authenticate(emailInput, passwordInput){
      const brewStore = useBrewStore()
      try{
        const { data, error } = supabase.auth.signInWithPassword({
          email: emailInput,
          password: passwordInput,
        })
        if(data){
          console.log('Wait it worked?!!?!')
          console.log(data.result)
        }
      }
      catch (error){
        console.log('Returned the following errors:')
        console.log(error)
      }finally {
        this.user = supabase.auth.getUser()
        console.log("Authentication request sent, current user:")
        console.log(this.user)
        brewStore.fetchBrewsFromDB()
      }
      
    }
  }


  // state: () => ({
  //   userData: null
  // }),
  // actions: {
  //   getUserSession() {
  //     console.log('User Session:')
  //     const sessionData = supabase.auth.getSession()
  //     // if (supabse.auth.getSession() !== null){
  //     //   return true
  //     // } else {
  //     //   return false
  //     // }
  //   },
  //   async authenticateUserSession(username: string, password: string) {
  //     try {
  //       this.userData = await supabase.auth.getSession();
  //     }catch (error: any) {
  //       console.log(error)
  //     }finally {

  //     }
  //   },
  //   async registerNewUser(username: string, password: string, email: string) {

  //   }
  // } 

});