import { Link } from "react-router-dom";


const routes = [

  {
    name: "Splash",
    path: "/",
  },

  {
    name: "Onboarding",
    path: "/onboarding",
  },

  {
    name: "Sign In",
    path: "/signin",
  },

  {
    name: "Verification",
    path: "/verification",
  },

  {
    name: "Location",
    path: "/location",
  },

  {
    name: "Login",
    path: "/login",
  },

  {
    name: "Signup",
    path: "/signup",
  },

  {
    name: "Home",
    path: "/home",
  },

  {
    name: "Explore",
    path: "/explore",
  },

  {
    name: "Beverages Category",
    path: "/category/beverages",
  },

  {
    name: "Product Details",
    path: "/product/1",
  },

  {
    name: "Cart",
    path: "/cart",
  },

  {
    name: "Favourite",
    path: "/favourite",
  },

  {
    name: "Filter",
    path: "/filter",
  },

  {
    name: "Account",
    path: "/account",
  },

];


const Screens = () => {


  return (

    <main
      className="
        min-h-screen

        bg-white

        px-[25px]
        py-[40px]
      "
    >


      <div
        className="
          max-w-xl
          mx-auto
        "
      >


        <h1
          className="
            text-[26px]

            font-semibold

            mb-8
          "
        >
          Application Screens
        </h1>




        <div
          className="
            flex
            flex-col
            gap-4
          "
        >


          {routes.map(route => (


            <Link

              key={route.path}

              to={route.path}


              className="
                h-[55px]

                rounded-xl

                bg-[#F2F3F2]

                px-5

                flex
                items-center
                justify-between

                hover:bg-[#53B175]
                hover:text-white

                transition
              "
            >


              <span>
                {route.name}
              </span>


              <span>
                →
              </span>


            </Link>


          ))}


        </div>


      </div>


    </main>

  );

};


export default Screens;