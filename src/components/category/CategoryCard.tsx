import type { Category } from "../../types/category";


interface CategoryCardProps {

  category: Category;

}


const CategoryCard = ({
  category,

}: CategoryCardProps) => {


  return (

    <button
      style={{
        backgroundColor: category.background,
        borderColor: category.border,
      }}

      className="
        h-[190px]

        rounded-[18px]

        border

        flex
        flex-col
        items-center
        justify-center

        px-3

        transition

        active:scale-95
      "
    >


      <img
        src={category.image}

        alt={category.name}

        className="
          h-[85px]

          object-contain
        "
      />



      <h3
        className="
          mt-[20px]

          text-center

          text-[16px]
          leading-[22px]

          font-[400]

          text-[#181725]
        "
      >

        {category.name}

      </h3>


    </button>

  );

};


export default CategoryCard;