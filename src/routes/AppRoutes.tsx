import {
 Routes,
 Route
} from "react-router-dom";


import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboarding";
import SignIn from "../pages/auth/SignIn";


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


</Routes>

)

}


export default AppRoutes;