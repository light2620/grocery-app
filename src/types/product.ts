export type ProductCategory =
  | "fruits"
  | "vegetables"
  | "meat"
  | "grocery";


export interface Product {

  id:number;

  name:string;

  images:string[];

  stock: number;

  price:number;

  quantity:string;

  description:string;

  nutrition:string;

  rating:number;

  category:ProductCategory;

  isExclusive:boolean;

  isBestSelling:boolean;

}