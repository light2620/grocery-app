import { Outlet } from "react-router-dom";

import BottomNavigation from "./BottomNavigation";


const AppLayout = () => {


  return (

    <>


      <main
        className="
          pb-[90px]

          md:pb-0
        "
      >

        <Outlet />


      </main>



      <BottomNavigation />


    </>

  );

};


export default AppLayout;