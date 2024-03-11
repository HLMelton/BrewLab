//@ts-ignore
import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { useProfileStore } from "./profileStore";

export interface gearManifest{
  grinders:[],
}

export const useGearStore = defineStore('user',{
  state: () => {
    return {
      userGear: {}
    }
  },
  actions: {
    amendGear(currentGear: gearManifest){
      console.log('Need to build this out more')
    },


  }
});