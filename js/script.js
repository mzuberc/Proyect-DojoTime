function alerta(elemento) {
    //elemento = a onclick="alerta(this)" href="#">Burbank</a>
    var lugar = elemento.innerText; //Burbank
    alert("Cargando informe metereológico..."+lugar);
}

function eliminar_cookies() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

function cambiar_temperatura() {
    var elemento_select = document.querySelector("select");
    console.log(elemento_select.value);//para comprobar que me funcione
    var grados_c = [24, 18, 27, 19, 21, 16, 26, 21]; //lista con todas las temperaturas
    var grados_f = [75, 65, 80, 66, 69, 61, 78, 70];
// recorro las temperaturas con los identificadores del htlm

    for(let i=0; i < 8; i++) {
        var elemento_temp = document.querySelector('#temp'+i); //#temp0 -> <span class="max" id="temp0">24</span>
        if(elemento_select.value == "F") {
            elemento_temp.innerText = grados_f[i];
        } else {
            elemento_temp.innerText = grados_c[i];
        }
    }
}

