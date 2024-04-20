import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { Scene } from "./Scene";

const Home = () => {
  const [message, setMessage] = useState(
    <>
      Hi, I am <span className="font-semibold">John</span>👋
      <br />A student from Singapore
    </>
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "Feel free to look around the portfolio\nor continue playing around 😊"
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSceneLoaded = () => {
    setIsLoading(false);
  };

  return (
    <section className="w-full h-screen relative">
      {isLoading ? (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            {message}
          </h1>
        </div>
      )}
      <Canvas onCreated={() => handleSceneLoaded()}>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
    </section>
  );
};

export default Home;
