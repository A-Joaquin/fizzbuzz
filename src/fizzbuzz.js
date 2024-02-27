export function generarfizzbuzz(n) {
    let mensaje = "";
    if (n % 3 == 0 || n % 5 == 0) {
      if (n % 3 == 0) {
        mensaje = "Fizz";
      }
      if (n % 5 == 0) {
        mensaje = mensaje + "Buzz";
      }
    } else {
      mensaje = n + "";
    }
    return mensaje;
  }
  
  export function generarfizzbuzzLimite(limite) {
    let secuencia = "";
    for (let i = 1; i <= limite; i++) {
      const resultadoFizzBuzz = generarfizzbuzz(i);
      secuencia += resultadoFizzBuzz;
  
      if (i < limite) {
        secuencia += ", ";
      }
    }
    return secuencia;
  }
  