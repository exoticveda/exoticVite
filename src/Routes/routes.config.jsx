import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle} from "lucide-react";
import { Routes, Route } from "react-router-dom";
import Dietryuse from "../Pages/Categoery/Dietry";
import Skincare from "../Pages/Categoery/Skincare";
import Haircare from "../Pages/Categoery/Haircare";
import PoojaItmes from "../Pages/Categoery/Diyabatti";
import Contact from "../Pages/Contact";
import Aboutus from "../Pages/Aboutus";
import Home from "../Pages/Home";
import ProductGrid from "../Components/Reusable/ProductGrid";
import Wellness from "../Pages/Categoery/Wellness";
import ReturnPolicy from "../Pages/Policies/Returnpolicy";
import TermsAndConditions from "../Pages/Policies/TermsAndConditions";
import PrivacyPolicy from "../Pages/Policies/PrivacyPolicy";
import FAQ from "../Components/Common/FAQ";
import ScrollToTop from "./ScrollToTop";
import BeetrootPowder from "../Pages/ProductPages/BeetrootPowder";
import HennaPowder from "../Pages/ProductPages/HennaPowder";
import SearchBar from "../Components/Common/Search";
import AmlaPowder from "../Pages/ProductPages/AmlaPowder";
import Aloevera from "../Pages/ProductPages/Aloevera";
import CurryleafPower from "../Pages/ProductPages/CurryleafPower";
import MulatniMiti from "../Pages/ProductPages/MulatniMiti";
import SandalwoodPowder from "../Pages/ProductPages/SandalwoodPowder";
import Lemongrass from "../Pages/ProductPages/Lemongrass";
import Alumbar from "../Pages/ProductPages/Alumbar";
import Moringaleafpowder from "../Pages/ProductPages/Moringaleafpowder";
import TriphalaPowder from "../Pages/ProductPages/TriphalaPowder";
import Jamunswed from "../Pages/ProductPages/Jamunswed";
import Yuvprash from "../Pages/ProductPages/Yuvprash";
// import SandalwoodPowdedr from "../Pages/ProductPages/SandalwoodPowdedr";
import Shikakhi from "../Pages/ProductPages/Shikakhi";
import Shilajit from "../Pages/ProductPages/Shilajit";
const NotFound =({ darkMode }) => {
    return (
      <motion.div
        className={`flex flex-col items-center justify-center  text-center p-20  ${darkMode ? 'bg-amber-600 text-white' : 'bg-yellow-50  text-pink-400'} `}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <AlertTriangle className="text-red-500 w-20 h-20 animate-bounce" />
        <h1 className="text-6xl font-extrabold text-gray-800 mt-6">404</h1>
        <p className="text-2xl text-gray-600 mt-2">Oops! Page Not Found</p>
        <p className="text-md text-gray-500 mt-2">
          The page you are looking for might have been removed or doesn't exist.
        </p>


      </motion.div>
    );
  };



  const AppRoutes = () => {
    return (
      <>
      <ScrollToTop/>
       <Routes>

<Route path="*" element={<NotFound />} />
{/* <Route path="/search" element={<SearchBar />} /> */}
<Route path="/Contact" element={<Contact/>} />
<Route path="/" element={<Home/>} />
<Route path="/products" element={<ProductGrid/>} />
<Route path="/Dietry-Use-Category" element={<Dietryuse/>} />
<Route path="/category/dietary" element={<Dietryuse/>} />
<Route path="/category/haircare" element={<Haircare/>} />
<Route path="/Skincaree-category" element={<Skincare/>} />
<Route path="/category/skincare" element={<Skincare/>} />
<Route path="/Diya-Batti" element={<PoojaItmes/>} />
<Route path="/category/puja-items" element={<PoojaItmes/>} />
<Route path="/aboutus" element={<Aboutus/>} />
<Route path="/wellness" element={<Wellness/>} />
<Route path="/return-policy" element={<ReturnPolicy/>} />
<Route path="/faq" element={<FAQ/>} />
<Route path="/terms" element={<TermsAndConditions/>} />
<Route path="/privacy-policy" element={<PrivacyPolicy/>} />
<Route path='/products/beetroot-powder' element={<BeetrootPowder/>}/>
<Route path='/products/henna-powder' element={<HennaPowder/>}/>
<Route path='/products/amla-powder' element={<AmlaPowder/>}/>
<Route path='/products/aloevera-powder' element={<Aloevera/>}/>
<Route path='/products/curry-leaf-powder' element={<CurryleafPower/>}/>
<Route path='/products/multani-mitti' element={<MulatniMiti/>}/>
<Route path='/products/sandalwood-powder'element={<SandalwoodPowder/>}/>
<Route path='/products/Lemongrass' element={<Lemongrass/>}/>
<Route path='/products/alum-bar' element={<Alumbar/>}/>
<Route path='/products/moringa-leaf-powder' element={<Moringaleafpowder/>}/>
<Route path='/products/triphala-powder' element={<TriphalaPowder/>}/>
<Route path='/products/jaamun-seed' element={<Jamunswed/>}/>
<Route path='/products/yuvprash' element={<Yuvprash/>}/>
<Route path='/products/shikhakhai-powder' element={<Shikakhi/>}/>
<Route path='/products/shilajit' element={<Shilajit/>}/>



</Routes>
      </>

    );
  };

  export default AppRoutes;