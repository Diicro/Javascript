const USUARIO={
    adrian:{nombre:"Adrian",clave:"Adrian1"},
    carlos:{nombre:"Carlos",clave:"Carlos1"},
    juan:{nombre:"Juan",clave:"Juan1"},
    
}
function registro() {
    y=prompt("Ingrese un nombre de usuario:");
    w=prompt("Ingrese una contraseña para ese usuario:");

    
}
let intentos =0;
let pass, result,y;
let nombre=prompt("Coloca nombre de usuario").toLowerCase();
if (nombre in USUARIO) {
    pass= prompt("coloque la contraseña:");
    while (!(pass === USUARIO[nombre].clave)) {
    intentos++
        pass=prompt("Esa no era la contraseña,intente con otra");
        if (pass !== USUARIO[nombre].clave){
            result=3-intentos;
            alert("Esa no es la contraseña,le quedan " + result +" intentos antes de ser bloqueado");
            if (result===0) {
                alert("Lo siento,su cuenta ha sido bloqueada");
                break;                
            }
        }
        
    }
    if(result!==0){alert("Bienvenido a Fachapets "+ nombre.toLocaleUpperCase()+" !!Ya puedes añadir al carrito las fachas de tu peludo!!");}
    else{alert("Regrese al inicio e inicie sesión con otra cuenta ó desbloquee su cuenta");}
}
else{
    alert("Registrese para poder realizar compras");
    registro();
    alert("Bienvenido a Fachapets "+ y.toLocaleUpperCase()+", ya puede navegar por nuestra web" );
}
