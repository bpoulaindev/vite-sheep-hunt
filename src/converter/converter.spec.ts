/** @vitest-environment jsdom */

import { expect, it } from "vitest";

import { JSDOM } from "jsdom";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../helpers/converter";

// create a new jsdom instance with an empty HTML document
const dom = new JSDOM(
  `<!DOCTYPE html><html lang="fr"><body><div><input id="ftc" /></div></body></html>`
);

it("Test if h1 is present", () => {
  document.body.innerHTML = `
 <h1>Coucou</h1>
`;
  let h1 = document.querySelector("h1");
  expect(h1?.innerHTML).toBe("Coucou");
});
it("changeToFahrenheit", () => {
  dom.window.document.body.innerHTML = `<input id="ctf" />`;
  const input = dom.window.document.getElementById("ctf") as HTMLInputElement;
  input?.dispatchEvent(new Event("change"));
  input.onchange = () => {};
  input.value = "100";
  expect(input?.value).toBe("32");
  expect(input).toBe(undefined);
});
it("changeToCelsius", () => {});
