import "./index.css";
import { Converter } from "./converter/converter";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Wolf from './wolf.png';
import Sheep from './sheep.png';

const Button = ({
  colorClass,
  autoMove = true,
}: {
  colorClass: string;
  autoMove?: boolean;
}) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  const [buttonPosition, setButtonPosition] = useState<{
    width: number;
    height: number;
  }>({
    width: (windowWidth - 75) / 2,
    height: (windowHeight + 300) / 2,
  });
  const handleMouseEnter = useCallback(() => {
    // setIsHovered(true);
    setButtonPosition({
      width: Math.floor(Math.random() * (windowWidth - 100)) + 1,
      height: Math.floor(Math.random() * (windowHeight - 25)) + 1,
    });
  }, [buttonPosition]);

  useEffect(() => {
    if (autoMove) {
      const intervalId = setInterval(() => {
        setButtonPosition({
          width: Math.floor(Math.random() * (window.innerWidth - 100)) + 1,
          height: Math.floor(Math.random() * (window.innerHeight - 50)) + 1,
        });
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [autoMove]);

  return (
    <div
      className="flex justify-center cursor-pointer items-center mt-4 whitespace-nowrap absolute p-4 transform-gpu"
      style={{
        left: `${buttonPosition.width}px`,
        top: `${buttonPosition.height}px`,
        transition: "all 2s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseEnter}
    >
      { /* <button
        className={`btn whitespace-nowrap max-w-[150px] max-h-[50px] border-0 px-10 ${colorClass}`}
        onClick={() => alert("Bravo tu es vraiment giga fort")}
      >
        Cliquez ici
      </button> */ }
      <img src={Sheep} alt="wolf" className="w-10 h-10" />
    </div>
  );
};

const ButtonCluster = ({
  count,
  autoMove = true,
}: {
  count: number;
  autoMove?: boolean;
}) => {
  const colorClasses = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
      "bg-amber-500",
      "bg-orange-500",
      "bg-lime-500",
      "bg-emerald-500",
      "bg-cyan-500",
      "bg-violet-500",
      "bg-sky-500",

  ];

  return (
    <>
      {Array.from({ length: count }, (_, i) => i).map((i) => (
        <Button
          key={i}
          colorClass={
            colorClasses[Math.floor(Math.random() * colorClasses.length)]
          }
          autoMove={autoMove}
        />
      ))}
    </>
  );
};
function App() {
  const imageRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: any) => {
    setPosition({ x: event.clientX - 15, y: event.clientY - 15 });
    requestAnimationFrame(updatePosition)
  }, [position, setPosition]);
  const [isAnimating, setIsAnimating] = useState(false);
  const updatePosition = () => {
    const { x, y } = position;
    const image = imageRef.current;

    if (image) {
      // @ts-ignore
      image.style.top = `${y}px`;
      // @ts-ignore
      image.style.left = `${x}px`;
    }

    requestAnimationFrame(updatePosition);
  };
  useEffect(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      requestAnimationFrame(updatePosition);
    }
  });
  const [computedAutoMove, setComputedAutoMove] = useState<boolean>(false);
  const shuffleSheeps = useCallback(() => {
    setComputedAutoMove(true);
    const timeoutId = setTimeout(() => {
      console.log('5 seconds have passed');
      // do something here
      setComputedAutoMove(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [computedAutoMove, setComputedAutoMove]);
  return (
    <div className="flex flex-col items-center bg-white relative" onMouseMove={handleMouseMove} >
      <div className="flex flex-col w-full items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
        <div className="flex flex-col items-center w-50 py-24">
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Super convertisseur
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Vous trouverez ici un super convertisseur de température, par les
            développeurs du{" "}
          </p>
          <div className="flex items-center text-white mt-2 bg-indigo-300/30 text-lg font-medium cursor-pointer px-4 py-2 rounded-xl bg-transparent bg-indigo-500">
            ConvertissOL
            <ArrowRightCircleIcon className="h-6 w-6 ml-2 animate-bounce" />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[700px] text-center justify-center items-center ">
        <Converter />
      </div>
      <ButtonCluster count={100} autoMove={computedAutoMove} />
        <img
            src={Wolf}
            ref={imageRef}
            alt="Follow image"
            className="transform-gpu"
            style={{
              position: 'absolute',
              width: '50px',
              height: '5  0px',
              top: `${position.y}px`,
              left: `${position.x}px`,
              pointerEvents: 'none'
            }} />
      <button className="btn btn-primary mt-10" onClick={shuffleSheeps}>Mélanger</button>
    </div>
  );
}

export default App;
