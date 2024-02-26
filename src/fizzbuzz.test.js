import generarfizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarfizzbuzz(1)).toEqual("1");
  });

  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 2", () => {
    expect(generarfizzbuzz(2)).toEqual("2");
  });
});