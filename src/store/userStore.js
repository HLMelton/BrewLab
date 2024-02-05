
//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { useBrewStore } from "./brewStore";
import.meta.env;

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  actions: {
    async getUserSession(){
      const request = await supabase.auth.getSession()
      this.user = request.data
    },
    wipeUserStore(){
      this.user = null
    }
  }
});