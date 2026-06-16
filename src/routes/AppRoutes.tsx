import {
 Routes,
 Route
} from "react-router-dom";


import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboarding";


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


</Routes>

)

}


export default AppRoutes;