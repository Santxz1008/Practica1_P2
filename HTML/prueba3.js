function validarFunction()
{
    let x = document.forms["frm1"]["nombre"].value;
    if(x === ""){
        alert("Se debe completar el nombre")
        return false;
    }
}

function miFunction()
{
    let x=document.getElementById("numero").value;
    let texto;
    if(isNaN(x)||x<1||x>10){
        texto="Esta entrada es erronea";
    }
    else
    {
       texto="Entrada correcta";
    }
    document.getElementById("demo").innerHTML=texto;
}