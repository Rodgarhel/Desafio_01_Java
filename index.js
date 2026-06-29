precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

//calculator
let spanCant = document.querySelector(".cantidad")
let spanTotal = document.querySelector(".valor-total")

//Button functions
function clickPlus(){
       
    let valorActual = spanCant.innerHTML
    let math = Number(valorActual) + 1;
    spanCant.innerHTML = math;

    let finalCant = spanCant.innerHTML
    spanTotal.innerHTML = Number(finalCant) * Number(precio);   
}
function clickMinus(){
      
    let valorActual = spanCant.innerHTML
    let math = Number(valorActual) - 1;
    spanCant.innerHTML = math;

    let finalCant = spanCant.innerHTML
    spanTotal.innerHTML = Number(finalCant) * Number(precio);   
}



