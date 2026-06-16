import { create } from "zustand";


import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";



interface CartStore {

  items: CartItem[];


  addToCart: (
    product: Product,
    quantity: number
  ) => void;


  increaseQuantity: (
    productId: number
  ) => void;


  decreaseQuantity: (
    productId: number
  ) => void;


  removeItem: (
    productId: number
  ) => void;


  clearCart: () => void;


  totalPrice: () => number;

}




export const useCartStore =
create<CartStore>((set, get) => ({


  items: [],




  addToCart: (product, quantity) => {


    const cartItems = get().items;


    const existing =
      cartItems.find(
        item =>
          item.product.id === product.id
      );



    if (existing) {


      const updatedQty =
        Math.min(
          existing.quantity + quantity,
          product.stock
        );



      set({

        items:
          cartItems.map(item =>

            item.product.id === product.id

              ? {
                  ...item,
                  quantity: updatedQty,
                }

              : item

          ),

      });


      return;

    }





    set({

      items: [

        ...cartItems,


        {
          product,
          quantity:
            Math.min(
              quantity,
              product.stock
            ),
        },

      ],

    });


  },







  increaseQuantity: (productId) => {


    set({

      items:

        get().items.map(item => {


          if (
            item.product.id !== productId
          ) {

            return item;

          }



          return {

            ...item,


            quantity:
              Math.min(
                item.quantity + 1,
                item.product.stock
              ),

          };


        }),

    });


  },







  decreaseQuantity: (productId) => {


    set({

      items:

        get().items.map(item => {


          if (
            item.product.id !== productId
          ) {

            return item;

          }



          return {

            ...item,


            quantity:
              Math.max(
                1,
                item.quantity - 1
              ),

          };


        }),

    });


  },







  removeItem: (productId) => {


    set({

      items:

        get().items.filter(

          item =>
            item.product.id !== productId

        ),

    });


  },







  clearCart: () => {


    set({
      items: [],
    });


  },







  totalPrice: () => {


    return get()
      .items
      .reduce(

        (total,item) =>

          total +
          item.product.price *
          item.quantity,


        0

      );


  },


}));