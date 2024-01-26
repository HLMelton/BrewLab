import { defineStore } from "pinia";
import { supabase } from '../supabase'
import.meta.env;

export const userStore = defineStore('user',{
  state: () => ({
    userSession: ''
  }), 
})

export const brewStore = defineStore('brews',{
  state: () => ({
    brewEntity: {}
  }),

  actions: {
    fetchBrewsFromDB() {
      const userData = {
        profile: {
          name: 'HLMelton',
          avataruri: 'https://docs-demo.ionic.io/assets/madison.jpg',
          uuid: 1,
          email: "hunterlmelton@gmail.com"
        },
        brews: [
          {
            buid: '1',
            img: 'https://m.media-amazon.com/images/I/71hnawAvxoL.jpg',
            title: 'V60 or sumn',
            inputWeight: 18,
            ratio: 16,
            method: 'Percolation',
            device: 'Hario V60',
            brewDetail: {
              bloom: true,
              timings: ['30','1:00','1:30','2:30'],
              steps: ['Bloom duration:','After bloom pour to 100g', 'following second pour, pour to 200', 'pour to final target']
            }
          },
          {
            buid: '2',
            img: 'https://bighousebeans.com/cdn/shop/products/kalita-wave-185-coffee-dripper-177615_1024x1024.jpg?v=1618674708',
            title: 'Kalita Flight Sample',
            inputWeight: 9,
            ratio: 10,
            method: 'Percolation',
            device: 'Kalita wave',
            brewDetail: {
              bloom: false,
              timings: ['0:15','0:30','0:45'],
              steps: ['Initial pour of 30g','Second Pour to 60g', 'Final pour to target']
            }
          },
          {
            buid: '3',
            img: 'https://storage.googleapis.com/gen-atmedia/3/2018/05/9eada0d203bfb580d801b478edd553465c7afb52.jpeg',
            title: 'Batch Coldbrew',
            inputWeight: 9,
            ratio: 10,
            method: 'Immersion',
            device: 'Toddy',
            brewDetail: {
              bloom: false,
              timings: ['16:00:00'],
              steps: ['Let Coffee Steep in fridge or room temperature for time duration']
            }
          },
          {
            buid: '4',
            img:'',
            title: 'Blooming Aeropress',
            inputWeight: 20,
            ratio: 13,
            method: 'Aeropress',
            brewDetail: {
              bloom: true,
              timings: ['0:15','0:45','1:30'],
              steps: ['Initial bloom of 60g','Pour to target weight','Slow press to finish at target time.']
            }
          }
        ]
      }

      this.brewEntity = userData;
    },
    fetchBrewsFromSupabase(){
      
      this.brewEntity = {};
    }
  }
});