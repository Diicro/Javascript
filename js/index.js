if(!localStorage.getItem("usuario")){
    location.href="./pages/login.html"
}

// class NuevoProducto{
//     constructor(nombre, img){
//         this.nombre= nombre;
//         this.img= img;
//     }
// }
// const productos=[PRD1,PRD2,PRD3];

// const PRD1=new NuevoProducto("Perro con cuernos de reno","./Assets/Elegante.jpg")
// const PRD2=new NuevoProducto("Perro con disfraz de fantasma","./Assets/Fantasma.jpg")
// const PRD3=new NuevoProducto("Perro con saco negro","./Assets/Saco.jpg")

const card= document.getElementById("pcard");

card.innerHTML=`
<section class="card">
<a><img  src="" alt=""></a>
</section>
`