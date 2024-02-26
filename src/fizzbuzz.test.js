import generarfizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarfizzbuzz(1)).toEqual("1");
  });

  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 2", () => {
    expect(generarfizzbuzz(2)).toEqual("2");
  });

  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarfizzbuzz(3)).toEqual("fizz");
  });
  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarfizzbuzz(6)).toEqual("fizz");
  });

});