import { create } from "zustand";


interface FilterStore {

  categories: string[];

  brands: string[];


  setCategories:
  (values:string[])=>void;


  toggleCategory:
  (value:string)=>void;


  toggleBrand:
  (value:string)=>void;


  clearFilters:()=>void;

}




export const useFilterStore =
create<FilterStore>((set,get)=>({


categories:[],

brands:[],




setCategories:(values)=>{


set({
 categories:values
});


},





toggleCategory:(value)=>{


const exists =
get()
.categories
.includes(value);



set({

categories:

exists

?

get()
.categories
.filter(
item=>item!==value
)

:

[
...get().categories,
value
]

});


},





toggleBrand:(value)=>{


const exists =
get()
.brands
.includes(value);



set({

brands:

exists

?

get()
.brands
.filter(
item=>item!==value
)

:

[
...get().brands,
value
]

});


},




clearFilters:()=>{


set({

categories:[],

brands:[]

});


}


}));