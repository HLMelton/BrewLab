import { defineStore } from "pinia";
import { supabase } from '../supabase'
import.meta.env;

export const brewStore = defineStore('brews',{
  state: () => ({
    brewEntity: {}
  }),

  actions: {
    fetchBrewsFromDB() {
      const mockUser = {
        profile: {
          name: 'HLMelton',
          avataruri: 'https://docs-demo.ionic.io/assets/madison.jpg',
          uuid: 1,
        },
        brews: [
          {
            buid: '1',
            img: 'https://m.media-amazon.com/images/I/71hnawAvxoL.jpg',
            title: 'V60 or sumn',
            details: 'Leggo',
          },
          {
            buid: '2',
            img: 'https://bighousebeans.com/cdn/shop/products/kalita-wave-185-coffee-dripper-177615_1024x1024.jpg?v=1618674708',
            title: 'Kalita? with milk',
            details: 'Pour bro',
          },
          {
            buid: '3',
            img: 'https://storage.googleapis.com/gen-atmedia/3/2018/05/9eada0d203bfb580d801b478edd553465c7afb52.jpeg',
            title: 'Crip Brew',
            details: 'Let it sit',
          },
          {
            buid: '4',
            img:'',
            title: 'Masochistic Tendencies',
            details: 'Press me daddy',
          }
        ]
      }

      this.brewEntity = mockUser;
    },
    fetchBrewsFromSupabase(){
      
      this.brewEntity = {};
    }
  }
});