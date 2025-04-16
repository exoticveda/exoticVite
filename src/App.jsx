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
