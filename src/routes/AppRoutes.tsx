import {
 Routes,
 Route
} from "react-router-dom";


import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboarding";
import SignIn from "../pages/auth/SignIn";
import OtpVerification from "../pages/auth/OtpVerification";
import Location from "../pages/auth/Location";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/app/Home";  
import ProductDetail from "../pages/app/ProductDetail";
import Cart from "../pages/app/Cart";
import AppLayout from "../components/layout/AppLayout";
import Explore from "../pages/app/Explore";


const AppRoutes = () => {

return (

<Routes>

<Route
path="/"
element={<Splash />}
/>


<Route
path="/onboarding"
element={<Onboarding />}
/>

<Route
 path="/signin"
 element={<SignIn />}
/>

<Route
  path="/verify-otp"
  element={<OtpVerification />}
/>

<Route
 path="/location"
 element={<Location />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/signup"
  element={<Signup />}
/>


<Route element={<AppLayout />}>

  <Route
    path="/home"
    element={<Home />}
  />


  <Route
    path="/cart"
    element={<Cart />}
  />


  <Route
    path="/explore"
    element={<Explore />}
  />


  <Route
    path="/favourite"
    element={<div>Favourite</div>}
  />


  <Route
    path="/account"
    element={<div>Account</div>}
  />


</Route>
 

 <Route

path="/product/:id"

element={<ProductDetail/>}

/>

</Routes>

)

}


export default AppRoutes;