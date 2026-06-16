import { useEffect } from "react";

import { MapPin, Search } from "lucide-react";

import ProductCard from "../../components/product/ProductCard";

import { useProductStore } from "../../stores/productStore";

import carrot from "../../assets/images/carrot-color.svg";

const Home = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main
      className="

min-h-screen

bg-white

pb-[90px]


lg:px-8

"
    >
      <div
        className="

max-w-7xl

mx-auto

px-[25px]

"
      >
        <header
          className="
pt-[55px]

flex
flex-col
items-center

"
        >
          <img src={carrot} className="w-[26px]" />

          <div
            className="
mt-[8px]

flex
items-center
gap-2

text-[#4C4F4D]
font-semibold
"
          >
            <MapPin size={18} />
            Dhaka, Banassre
          </div>
        </header>

        <div
          className="

mt-[20px]

h-[52px]

rounded-[15px]

bg-[#F2F3F2]

px-4

flex
items-center
gap-3

"
        >
          <Search />

          <span
            className="
text-[#7C7C7C]
"
          >
            Search Store
          </span>
        </div>

        <section className="mt-[30px]">
          <div
            className="
flex
justify-between
items-center
"
          >
            <h2
              className="
text-[24px]
font-semibold
"
            >
              Exclusive Offer
            </h2>

            <button
              className="
text-[#53B175]
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
