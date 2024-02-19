//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { BrewDetail } from "../views/BrewList.vue";
// import.meta.env;



export const useBrewStore = defineStore('brews',{
  state: () => {
    return {
      brews: [] as BrewDetail[] 
    }
  },

  actions: {
    async fetchBrewsFromDB(){
      const { data, error} = await supabase.from('brews').select(`*`)
      console.log(data)
      this.brews = data
    },
    async fetchBrewDetail(buid: number){
      const {data, error} = await supabase.from('brews').select(`buid = 3`)
      console.log(data)

    }
  }
});