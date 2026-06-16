import { useState } from "react";

import FavoriteItem
from "../../components/favorite/FavoriteItem";



import {
useFavoriteStore
} from "../../stores/favoriteStore";


import {
useCartStore
} from "../../stores/cartStore";



const Favourite=()=>{

    const [added,setAdded] =
useState(false);


const favorites =
useFavoriteStore(
state=>state.favorites
);



const addToCart =
useCartStore(
state=>state.addToCart
);




const addAll = () => {


  if (added) return;



  favorites.forEach(
    product => {

      addToCart(
        product,
        1
      );

    }
  );



  setAdded(true);


};




return (

<main
className="
min-h-screen

bg-white

px-[25px]
pb-[120px]
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<h1
className="
pt-[65px]

pb-[30px]

text-center

text-[20px]

font-semibold

border-b
border-[#E2E2E2]
"
>

Favourite

</h1>






{
favorites.length===0
?

<p
className="
mt-[120px]

text-center

text-[#7C7C7C]
"
>

No favourites yet

</p>


:


favorites.map(
item=>(

<FavoriteItem

key={item.id}

product={item}

/>

)

)

}






{
favorites.length>0
&&


<button

disabled={added}

onClick={addAll}


className={`
fixed

left-[25px]
right-[25px]

bottom-[100px]


md:left-1/2
md:-translate-x-1/2

md:w-[430px]


h-[67px]


rounded-[19px]


text-white

text-[18px]

font-semibold


transition


${
added
?
"bg-[#9AD4B0] cursor-not-allowed"
:
"bg-[#53B175] active:scale-95"
}

`}
>


{
added
?
"Added!"
:
"Add All To Cart"
}


</button>


}



</div>


</main>

)

}


export default Favourite;