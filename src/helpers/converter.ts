export const celsiusToFahrenheit = (celsius: number): number => {
  return celsius * 1.8 + 32;
};
export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return (fahrenheit - 32) / 1.8;
};
