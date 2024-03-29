import { generarfizzbuzz, generarfizzbuzzLimite } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarfizzbuzz(1)).toEqual("1");
  });

  it("Deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 2", () => {
    expect(generarfizzbuzz(2)).toEqual("2");
  });

  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarfizzbuzz(3)).toEqual("Fizz");
  });
  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarfizzbuzz(6)).toEqual("Fizz");
  });

  it("Deberia mostrar la palabra buzz para los multiplos del numero 5", () => {
    expect(generarfizzbuzz(5)).toEqual("Buzz");
  });
  it("Deberia mostrar la palabra buzz para los multiplos del numero 5", () => {
    expect(generarfizzbuzz(10)).toEqual("Buzz");
  });

  it("Deberia mostrar la palabra fizzbuzz para los multiplos del numero 5 y 3", () => {
    expect(generarfizzbuzz(15)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar la palabra fizzbuzz para los multiplos del numero 5 y 3", () => {
    expect(generarfizzbuzz(30)).toEqual("FizzBuzz");
  });

});