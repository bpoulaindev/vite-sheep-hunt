import { useCallback, useState } from "react";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../helpers/converter";

export const Converter = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheitResult, setFahrenheitResult] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<string>("");
  const [celsiusResult, setCelsiusResult] = useState<number | null>(null);
  const convertCelsius = (celsius: string) => {
    setCelsius(celsius);
    const result = celsiusToFahrenheit(parseInt(celsius));
    setFahrenheitResult(parseFloat(result.toFixed(2)));
  };
  const convertFahrenheit = (fahrenheit: string) => {
    setFahrenheit(fahrenheit);
    const result = fahrenheitToCelsius(parseInt(fahrenheit));
    setCelsiusResult(parseFloat(result.toFixed(2)));
  };
  return (
    <div className="flex justify-between items-start mt-16">
      <div className="flex flex-col w-fit">
        <span className="text-lg font-medium w-full text-start">
          Celsius vers Fahrenheit
        </span>
        <div className="flex items-center w-full mt-4">
          <input
            type="text"
            value={celsius}
            placeholder="Valeur en Celsius"
            className="input input-bordered w-full"
            onChange={(e) => convertCelsius(e.target.value)}
          />
        </div>
        {fahrenheitResult && (
          <div className="flex items-center mt-2">
            <span className="text-lg font-medium mr-2">Résultat : </span>
            {fahrenheitResult}
            <span className="relative flex h-3 w-3 -mt-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col ml-20 w-fit">
        <span className="text-lg font-medium w-full text-start">
          Fahrenheit vers Celsius{" "}
        </span>
        <div className="flex items-center w-full mt-4">
          <input
            type="text"
            value={fahrenheit}
            placeholder="Valeur en Fahrenheit"
            className="input input-bordered w-full"
            onChange={(e) => convertFahrenheit(e.target.value)}
          />
        </div>
        {celsiusResult && (
          <div className="flex items-center mt-2">
            <span className="text-lg font-medium mr-2">Résultat : </span>
            {celsiusResult}
            <span className="relative flex h-3 w-3 -mt-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
