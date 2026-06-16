import { useEffect } from "react";

import { MapPin, Search } from "lucide-react";

import ProductCard from "../../components/product/ProductCard";
import ProductSection from "../../components/common/home/ProductSection";
import Categories from "../../components/common/home/Categories";

import { useProductStore } from "../../stores/productStore";

import carrot from "../../assets/images/carrot-color.svg";

const Home = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const exclusiveProducts = products.filter((p) => p.isExclusive);

  const bestSellingProducts = products.filter((p) => p.isBestSelling);

  const groceryProducts = products.filter(
    (p) => !p.isBestSelling && !p.isExclusive,
  );

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
        <div
          className="
mt-[20px]

h-[115px]

rounded-[8px]

bg-[url('/banner/banner.png')]

bg-cover
bg-center
"
        />

        <ProductSection title="Exclusive Offer" products={exclusiveProducts} />

        <ProductSection title="Best Selling" products={bestSellingProducts} />

        <Categories />

        <ProductSection title="" products={groceryProducts} />
      </div>
    </main>
  );
};

export default Home;
