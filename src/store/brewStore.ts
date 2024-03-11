//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { BrewDetail } from "../views/BrewList.vue";
import { useProfileStore } from "./profileStore";


export const useBrewStore = defineStore('brews',{
  state: () => {
    return {
      brews: [] as BrewDetail[] | any 
    }
  },

  actions: {
    async fetchBrewsFromDB(){

      const profile = useProfileStore();
      const { data, error} = await supabase.from('brews').select(`*`)
      // attempting to
      // profile.user.brews = data?.length;
      this.brews = data
    },
  }
});