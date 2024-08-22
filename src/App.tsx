import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <animated.div style={styles} className="text-4xl font-bold text-blue-500">
        Welcome to My Portfolio!
      </animated.div>
    </div>
  );
};

export default App;
