import { defineStore } from "pinia";
import { supabase } from '../supabase';
import.meta.env;

export const useUserStore = defineStore('user',{
  state: () => ({
    userSession: {},
    userName: 'Default User',
  }),
  actions: {
    validateSession() {
      console.log('User Session:')
      const sessionData = supabase.auth.getSession()
      console.log(supabase.auth.getSession())
      // if (supabse.auth.getSession() !== null){
      //   return true
      // } else {
      //   return false
      // }
    }
  } 
  
});