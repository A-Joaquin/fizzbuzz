function generarfizzbuzz(n) {
    let mensaje = "";
    if(n%3==0||n%5==0)
    {
        if(n % 3 == 0){
            mensaje = "fizz";
        }
        if(n%5==0)
        {
            mensaje=mensaje+"buzz"
        }
    }
    else{
        mensaje = n + "";
    }
    return mensaje;
  }
  export default generarfizzbuzz;