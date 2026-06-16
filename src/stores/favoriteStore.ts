import { create } from "zustand";

import type { Product } from "../types/product";


interface FavoriteStore {

  favorites: Product[];

  toggleFavorite:
  (product: Product) => void;


  isFavorite:
  (id:number) => boolean;


  clearFavorites:()=>void;

}



export const useFavoriteStore =
create<FavoriteStore>((set,get)=>({


favorites:[],



toggleFavorite:(product)=>{


const exists =
get()
.favorites
.some(
item=>item.id === product.id
);



if(exists){


set({

favorites:
get()
.favorites
.filter(
item=>item.id !== product.id
)

});


return;

}




set({

favorites:[
...get().favorites,
product
]

});


},





isFavorite:(id)=>{


return get()
.favorites
.some(
item=>item.id === id
);


},




clearFavorites:()=>{

set({
favorites:[]
});

}


}));