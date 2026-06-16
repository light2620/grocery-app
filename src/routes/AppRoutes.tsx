import {
 Routes,
 Route
} from "react-router-dom";


import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboarding";
import SignIn from "../pages/auth/SignIn";
import OtpVerification from "../pages/auth/OtpVerification";
import Location from "../pages/auth/Location";


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

</Routes>

)

}


export default AppRoutes;