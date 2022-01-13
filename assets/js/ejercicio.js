let precio = parseInt(prompt("Dame el precio del artículo: "));
let cuponDescuento= String(prompt("Dame el cupón (Bronce, Plata, Oro, Platino):"));
 let descuento;

 switch(cuponDescuento){
     case "Bronce":
     descuento = precio*.95;
     break;
     case "Plata":
     descuento = precio *.90;
     break;
     case "Oro":
     descuento = precio *.80;
     break;
     case "Platino":
     descuento = precio *.75;
     break;
     default:
       descuento = document.write("Cupón Pirata");
         break;
 }
 document.write(`El precio del artículo original es: ${precio} y con su descuento es: ${descuento}`);
