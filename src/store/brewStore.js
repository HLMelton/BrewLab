//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import.meta.env;



export const useBrewStore = defineStore('brews',{
  state: () => ({
    brews: []
  }),

  actions: {
    async fetchBrewsFromDB(){
      const { data, error } = await supabase.from('brews')
      console.log(data)
    },
  }
});