let moneda = document.querySelector(".moneda");
let padre = document.querySelector(".padre");
let padreMoneda = document.querySelector(".padre_moneda");

padreMoneda.style.display = "flex";
padreMoneda.style.justifyContent = "center";
moneda.style.margin = "10px";

moneda.addEventListener("click",tirar => {
    let azar = Math.trunc(Math.random()*2);

    if( azar == 0){        
        let cara = document.createElement("P");
        cara.innerHTML = "Cara";
        cara.classList.add("one");
        padre.appendChild(cara);
    }else{
        
        let seca = document.createElement("P");
        seca.innerHTML = "Seca";
        seca.classList.add("two");
        padre.appendChild(seca);
    }

});


