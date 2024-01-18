const usuarios=[]


class NuevoUsuario{
    constructor(nombre , clave){
    this.nombre =nombre;
    this.clave =clave;
}
}
const logFormulario= document.getElementById("logFormulario");
const formulario= document.getElementById("Formulario");

formulario.addEventListener("submit",(a)=>{
    a.preventDefault();
    const usuario= document.getElementById("usuario");
    const contraseña= document.getElementById("contraseña");
    const nUsuario =new NuevoUsuario(usuario.value,contraseña.value)
    usuarios.push(nUsuario);
    const enJSON= JSON.stringify(usuarios);
    localStorage.setItem("usuario",enJSON);
    formulario.reset();

})
console.log(usuarios)

logFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const users=JSON.parse(localStorage.getItem("usuario"));
    const logUsuario= document.getElementById("logUsuario");
    const logContraseña= document.getElementById("logContraseña");
console.log(users)

const nmbre=users.find((user)=>{
    return user.nombre === logUsuario.value;})
console.log(nmbre)


    if(nmbre  && logContraseña.value===nmbre.clave ){
        location.href="../index.html"
    }
    alert("Los datos no son correctos o no se han registrado,intente de nuevo.")
    
})

