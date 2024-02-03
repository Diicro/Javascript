const usuarios=[];
const usuariosLog=[];

class NuevoUsuario{
    constructor(nombre , clave){
    this.nombre =nombre;
    this.clave =clave;
}
}


if(localStorage.getItem("usuariosLog")){
    const btnProfileSing= document.getElementById("inSing");
    const btnProfileLog= document.getElementById("inLog");
    btnProfileSing.remove();
    btnProfileLog.remove();
    setTimeout(function (){
        Toastify({
            text: "Bienvenido",
            duration: 1500,
            }).showToast();
        
    },4000);
    }else{
    const btnProfileOut= document.getElementById("out");
    btnProfileOut.remove();
    
    }



function singUp(){
        Swal.fire({
        title:"Registrarse",
        showCancelButton:true,
        html:`
        <input type="text" placeholder="Usuario" id="usuarioSiValue">
        <input type="password" placeholder="Contraseña" id="contraseñaSiValue">
        `,
        preConfirm: ()=>{
            const usuarioSiValue= document.getElementById("usuarioSiValue");
            const contraseñaSiValue= document.getElementById("contraseñaSiValue");
            const nUsuario =new NuevoUsuario(usuarioSiValue.value,contraseñaSiValue.value)
            usuarios.push(nUsuario);
            const enJSON= JSON.stringify(usuarios);
            localStorage.setItem("usuario",enJSON);
            Toastify({
                text: "Te has registrado con exito",
                duration: 2000,
                }).showToast();
            
        }
        
    })
}


function logIn(){
    Swal.fire({
        title:"Ingresar",
        showCancelButton:true,
        html:`
        <input type="text" placeholder="Usuario" id="usuarioValue">
        <input type="password" placeholder="Contraseña" id="contraseñaValue">
        `,
        preConfirm: ()=>{
            const users=JSON.parse(localStorage.getItem("usuario"));
            const usuarioValue= document.getElementById("usuarioValue");
            const contraseñaValue= document.getElementById("contraseñaValue");
            const nmbre=users.find((user)=>{
                return user.nombre === usuarioValue.value;})
            if(nmbre  && contraseñaValue.value===nmbre.clave ){
                usuariosLog.push(nmbre);
                const enJSONLOG=JSON.stringify(usuariosLog) ;
                localStorage.setItem("usuariosLog",enJSONLOG);
                location.href="./index.html";
                }else{
                    Swal.fire({
                    icon:"error",
                    text:"Los datos no son correctos o no se han registrado,intente de nuevo."
                })};
                
        }
    })
};

function logOut(){
    localStorage.removeItem("usuariosLog");
    localStorage.removeItem("items");

    location.href="./index.html"
}



class NuevoProducto{
    constructor(nombre,img,id){
        this.nombre= nombre;
        this.img= img;
        this.id=id;
    }
}

const PRD1=new NuevoProducto("Perro con cuernos de reno","./Assets/Elegante.jpg",1)
const PRD2=new NuevoProducto("Perro con disfraz de fantasma","./Assets/Fantasma.jpg",2)
const PRD3=new NuevoProducto("Perro con saco negro","./Assets/Saco.jpg",3)

const productos=[PRD3,PRD2,PRD1];
const carrito=[];


const pcard= document.getElementById("pcard");
productos.forEach(producto=>{
const card= document.createElement('div');
card.innerHTML=`
    <section class="card">
        <button onclick ='agregarCarrito(${producto.id})'>
                <img  src="${producto.img}" alt="${producto.nombre}">
        </button>
    </section>`;
pcard.appendChild(card)
})


function agregarCarrito(id){
    if(localStorage.getItem("usuariosLog")){
    const productoCarrito=productos.find(producto=> producto.id===id)
    if(productoCarrito){
        carrito.push(productoCarrito);
        const carritoJSON=JSON.stringify(carrito);
        localStorage.setItem("items",carritoJSON);
        nuevoAlCarrito();
        
        }}else{
            Swal.fire({
                title:"Sesión no encontrada",
                icon:"error",
                text:"Necesitamos un perfil para agregar items al carrito"
            })
        }
}

function nuevoAlCarrito(){
    const localCarrito=JSON.parse(localStorage.getItem("items"));
    const carritoP=document.getElementById("carrito");
    carritoP.innerHTML='';
    localCarrito.forEach(producto=>{
        const card=document.createElement('div');
        card.innerHTML=`
        <section id="section${producto.id}" class="cardDos">
            <button class="btnCarrito" onclick="borrarDeCarrito(${producto.id})">
                    <img src="${producto.img}" alt="${producto.nombre}">
            </button>
        </section>
        `
        carritoP.appendChild(card);
    })
}


function borrarDeCarrito(idDelete){
        const prtDelete=carrito.find(producto=>producto.id===idDelete);
        carrito.splice(carrito.lastIndexOf(prtDelete),1)
        const carritoJSON=JSON.stringify(carrito);
        localStorage.setItem("items",carritoJSON);
        nuevoAlCarrito();
};