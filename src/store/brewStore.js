//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import.meta.env;



export const useBrewStore = defineStore('brews',{
  state: () => ({
    brews: [
      {
        buid: null,
        title: null,
      }
    ]
  }),

  actions: {
    fetchBrewsFromDB(){
      const { data, error } = supabase.from('brews').select(`
      buid,
      title,
      brew_detail
      `)
    },
  }
});