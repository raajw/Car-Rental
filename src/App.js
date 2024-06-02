import Landing from "./components";

import {Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import ContactUs from "./pages/contact-us";
import Services from "./pages/services";
import BrowseCars from "./pages/browse-cars";
import FAQ from "./pages/faq";
import FAQs from "./pages/faq";
import Registration from "./pages/registration";

function App() {
  return (
    <div className=" text-center">
      <Landing/>
    <Routes>
    <Route
    path='/'
    element={<Home/>}
    />
      <Route
    path='/contact'
    element={<ContactUs/>}
    />
      <Route
    path='/services'
    element={<Services/>}
    />
    <Route
    path='/browsecars'
    element={<BrowseCars/>}
    />
    <Route
    path="/registration"
    element={<Registration />}
    />

<Route
    path='/FAQs'
    element={<FAQs/>}
    />

    </Routes>
      
    </div>
  );
}

export default App;
