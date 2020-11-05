var piso=0, npisos=6;
//Modulo crear un elevador
function subir(){
        if(piso<=npisos){
            piso=piso++;
            console.log("Te encuentras en el piso: "+piso);
        }
        else{
            console.log("Has llegado al limite de pisos!!"); 
        }
    }
console.log(subir);

function bajar(){
        if(piso<=npisos){
            piso=piso-1;
            console.log("Te encuentras en el piso: "+piso);
        }
        else{
            console.log("Has llegado al limite de pisos!!")
}
console.log(bajar);

function seleccionar(){
    var npiso,;
    var diferencia;
    var r;

    console.log("Piso 1,2,3,4,5,6")//no supe como guardar el resultado de el usuario en la variable 'npiso'
          npiso=npiso;
         if(piso<npisos && npiso<piso){
             diferencia=piso-npiso;
             r=piso-diferencia;

            console.log("Estas en el piso: "+r);
                   
         }
         if(piso<npisos && npiso>piso){
             diferencia=npiso-piso;
             r=piso+diferencia;

             console.log("Estas en el piso: "+r)
         }
         if(piso<npisos && npiso==piso){
             console.log("Ya estás en el piso requerido");
         }
         else{
             console.log("Eror");
         }
}
console.log(seleccionar);

function abrir(){
    console.log("Has abierto la puerta");
}

console.log(abrir);

function cerrar(){
     console.log("Has cerrado la puerta");
}

console.log(cerrar);