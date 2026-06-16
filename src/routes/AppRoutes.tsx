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

</Routes>

)

}


export default AppRoutes;