import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { Scene } from "./Scene";
import { Html, useProgress } from "@react-three/drei";

function Loading() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "blue",
          }}
        />
      </div>
    </Html>
  );
}

function SceneWithLoading() {
  const { active } = useProgress();

  return (
    <>
      {active && <Loading />}
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <Scene />
      </Physics>
    </>
  );
}

const Home = () => {
  const [message, setMessage] = useState("");
  const [secondMessage, setSecondMessage] = useState("");
  const { active } = useProgress();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessage(
        <>
          Hi, I am <span className="font-semibold">John</span>👋
          <br />A student from Singapore
        </>
      );
    }, 5000);

    const timer2 = setTimeout(() => {
      setSecondMessage("Feel free to look around the portfolio\nor continue playing around 😊");
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      {!active && (message || secondMessage) && (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            {message}
            {secondMessage}
          </h1>
        </div>
      )}
      <Canvas>
        <SceneWithLoading />
      </Canvas>
    </section>
  );
};

export default Home;
