import { defineStore } from "pinia";
import { supabase } from '../supabase';
import { useGearStore } from "./gearStore";

export interface userProfile{
  profile_id: string,
  created_at: string,
  gear: {},
  profile_name: "",
  profile_picture_url: string | null,
  brews: number,
  brewScore: number,
  formattedDate: string,
}

export const useProfileStore = defineStore('user',{
  state: () => {
    return {
      user: <userProfile>{}
    }
  },

  actions: {
    async createProfile(){
      console.log('Creating Profile')
      const userId = await supabase.auth.getUser();

      const { data, error } = await supabase.from('profiles').insert([{profile_name: this.generateUsername(), profile_id: userId.data.user!.id}])
      console.log(error)
    },
    generateUsername(){
      const animals = ['Ferret','Squirrel','Flamingo','Lion','Fox','Cobra','Raccoon','Lizard']
      const descriptors = ['Furious','Lusty','Serious','Clever','Sarcastic','Ambitious','Snarky']
      let i = Math.floor(Math.random() * animals.length)
      let n = Math.floor(Math.random() * descriptors.length)
      return descriptors[n]+' '+ animals[i]
    },
    setGear(){
      const gearStore = useGearStore();
      gearStore.userGear = this.user.gear
    },
    async getProfile(){
      console.log('Getting Profile')
      const {data, error} = await supabase.from('profiles').select(`*`);
      if(data!.length === 0){
        this.createProfile();
      }else{
        console.log(data![0])
        this.user = data![0]
        this.user.formattedDate = this.user.created_at.slice(0,10)
        this.setGear()
      }
    },
  }
});