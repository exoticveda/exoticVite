import './App.css';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import AppRoutes from './Routes/routes.config';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay, or replace with real async logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <><Navbar />
        <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div></>

    );
  }

  return (
    <>

      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex w-full">
          <div className="flex-1">
            <AppRoutes />
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}

export default App;



// import './App.css';
// import Navbar from './Components/Common/Navbar';
// import Footer from './Components/Common/Footer';
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';
// import AppRoutes from './Routes/routes.config';

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       return storedTheme === "dark";
//     } else {
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay, or replace with real async logic
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div><Navbar />
//       <div className="flex justify-center items-center h-screen bg-white">
//       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
//     </div></div>

//     );
//   }

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="flex w-full">
//           <div className="flex-1">
//             <AppRoutes />
//           </div>
//         </div>
//       </motion.div>

//       <Footer />
//     </div>
//   );
// }

// export default App;
