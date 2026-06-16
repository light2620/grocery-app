import ProductCard from "../../product/ProductCard";

import type { Product } from "../../../types/product";

interface Props {
  title: string;

  products: Product[];
}

const ProductSection = ({ title, products }: Props) => {
  return (
    <section className="mt-[30px]">
      <div
        className="
flex
items-center
justify-between
"
      >
        <h2
          className="
text-[24px]
font-semibold
"
        >
          {title}
        </h2>

        <button
          className="
text-[#53B175]
font-semibold
"
        >
          See all
        </button>
      </div>

      <div
        className="
mt-[20px]

flex
gap-[15px]

overflow-x-auto

lg:grid
lg:grid-cols-4
lg:overflow-visible
"
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
