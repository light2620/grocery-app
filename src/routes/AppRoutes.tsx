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

 <Route
        path="/home"
        element={<Home />}
      />

      <Route

path="/product/:id"

element={<ProductDetail/>}

/>

<Route
  path="/cart"
  element={<Cart />}
/>

</Routes>

)

}


export default AppRoutes;