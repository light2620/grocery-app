import {
  Heart,
  Home,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";


const navItems = [
  {
    label: "Shop",
    path: "/home",
    icon: Home,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: Search,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: ShoppingCart,
  },
  {
    label: "Favourite",
    path: "/favourite",
    icon: Heart,
  },
  {
    label: "Account",
    path: "/account",
    icon: User,
  },
];


const BottomNavigation = () => {


  return (

    <nav
      className="
        fixed

        bottom-0
        left-0
        right-0

        z-50

        h-[90px]

        bg-white

        rounded-t-[15px]

        shadow-[0_-5px_20px_rgba(0,0,0,0.08)]


        md:hidden
      "
    >


      <div
        className="
          h-full

          flex
          items-center
          justify-around
        "
      >


        {navItems.map((item)=>{


          const Icon = item.icon;


          return (


            <NavLink

              key={item.path}

              to={item.path}

              className={({isActive})=>
                `
                flex
                flex-col
                items-center
                gap-[5px]


                text-[12px]
                font-semibold


                ${
                  isActive
                    ? "text-[#53B175]"
                    : "text-[#181725]"
                }

                `
              }

            >


              <Icon
                size={26}
                strokeWidth={2.4}
              />



              <span>

                {item.label}

              </span>



            </NavLink>


          )

        })}


      </div>



    </nav>

  );

};


export default BottomNavigation;