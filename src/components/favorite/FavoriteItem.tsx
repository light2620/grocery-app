import {
ChevronRight
} from "lucide-react";


import type { Product } 
from "../../types/product";


interface Props{

product:Product;

}



const FavoriteItem=({
product

}:Props)=>{


return (

<div
className="

py-[30px]

border-b
border-[#E2E2E2]

flex
items-center

gap-[30px]

"
>


<img

src={product.images[0]}

alt={product.name}

className="
w-[60px]
h-[60px]

object-contain
"

/>




<div
className="
flex-1
"
>


<h3
className="
text-[18px]

font-semibold

text-[#181725]
"
>

{product.name}

</h3>



<p
className="
mt-[5px]

text-[#7C7C7C]
"
>

{product.quantity}

</p>


</div>





<strong
className="
text-[18px]
"
>

${product.price}

</strong>




<ChevronRight/>


</div>

)


}


export default FavoriteItem;