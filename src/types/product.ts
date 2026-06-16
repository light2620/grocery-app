export type ProductCategory =
  | "fruits"
  | "vegetables"
  | "meat"
  | "grocery";


export interface Product {

  id:number;

  name:string;

  image:string;

  price:number;

  quantity:string;

  category:ProductCategory;


  isExclusive:boolean;

  isBestSelling:boolean;

}