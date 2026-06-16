import { Check } from "lucide-react";


interface Props{

label:string;

checked:boolean;

onClick:()=>void;

}



const FilterCheckbox=({

label,
checked,
onClick

}:Props)=>{


return (

<button

onClick={onClick}

className="
flex
items-center
gap-[12px]

text-[15px]
"
>


<div

className={`
w-[20px]
h-[20px]

rounded-[6px]

border

flex
items-center
justify-center

${
checked
?
"bg-[#53B175] border-[#53B175]"
:
"border-[#B1B1B1]"
}

`}

>


{
checked &&
<Check
size={15}
className="
text-white
"
/>
}


</div>




<span

className={
checked
?
"text-[#53B175]"
:
"text-[#181725]"
}

>

{label}

</span>


</button>

)

}


export default FilterCheckbox;