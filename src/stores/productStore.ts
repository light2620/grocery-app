import { create } from "zustand";

import products from "../data/products.json";

import type { Product } from "../types/product";

interface ProductStore {
  products: Product[];

  loading: boolean;

  fetchProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  loading: false,

  fetchProducts: () => {
    set({
      loading: true,
    });

    setTimeout(() => {
      set({
        products: products as Product[],

        loading: false,
      });
    }, 800);
  },
}));
