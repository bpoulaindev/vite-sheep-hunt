import { expect, it } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converter";

it("renders correctly", () => {
  expect(1 + 1).toBe(2);
});

it("convert properly", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(100)).toBe(212);
  expect(celsiusToFahrenheit(-40)).toBe(-40);
  expect(fahrenheitToCelsius(32)).toBe(0);
  expect(fahrenheitToCelsius(212)).toBe(100);
  expect(fahrenheitToCelsius(-40)).toBe(-40);
});
