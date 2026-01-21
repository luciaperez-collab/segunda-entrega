const Productos = [
    {id:"001" ,nombre:"Cardina" ,precio:7000 ,stock:2 ,categoria:"peluqueria", foto: "https://media.istockphoto.com/id/471058010/es/foto/de-mascotas-aseo-cepillo.jpg?s=612x612&w=0&k=20&c=tfPcFPMPEr_fme19Og03VzxOCy7XbWlo9F52ioleuoo=" },
    {id:"002" ,nombre:"Perfume" ,precio:5000 ,stock:5 ,categoria:"peluqueria", foto: "https://media.istockphoto.com/id/1318185363/es/foto/chihuahua-merle-color-con-perfume-y-cuentas-de-joyer%C3%ADa-chica-va-a-salir-retrato-de-un-perro.jpg?s=612x612&w=0&k=20&c=Jklpg-9z3G3D51NyxxFsz6P8JzD7xzctykPvyvOXXI8=" },
    {id:"003" ,nombre:"Pelota" ,precio:3000 ,stock:3 ,categoria:"juguetes", foto: "https://media.istockphoto.com/id/1218498447/es/foto/juguete-de-bolas-para-perro-y-gato-consolado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=9Nwyh_Wp4nSlWzykPMVcCUZhRr0Fkr8oQexUNrPJoRo=" },
    {id:"004" ,nombre:"Croquetas" ,precio:8000 ,stock:4 ,categoria:"forraje", foto: "https://media.istockphoto.com/id/2247962626/es/foto/deliciosos-biscuits-para-perro.jpg?s=612x612&w=0&k=20&c=Ilf-cCmYmcZY-3w0f_98bJx8FjtxeeEB_S2JqqwQk9c=" },
    {id:"005" ,nombre:"Bebedero" ,precio:6500 ,stock:1 ,categoria:"forraje", foto: "https://media.istockphoto.com/id/1349087569/es/foto/tocadores-dobles-para-perros.jpg?s=612x612&w=0&k=20&c=BJbNrz7MOCDr7K0-RgKlcL_86SoB__qP9AJKOfPFR8c=" },
    {id:"006" ,nombre:"Lentes para perros" ,precio:2300 ,stock:0 ,categoria:"accesorios", foto: "https://media.istockphoto.com/id/1372047922/es/foto/retrato-de-un-divertido-cachorro-de-perro-salchicha-con-mirada-tonta-que-usa-gafas-anticuadas.jpg?s=612x612&w=0&k=20&c=SLBmrpZGphE03RberhoOrPB3yV62ZaGJWOX4ewAjVh4=" },
    {id:"007" ,nombre:"Balanceado" ,precio:10500 ,stock:7 ,categoria:"forraje", foto: "https://media.istockphoto.com/id/1010847920/es/foto/comida-para-perros-croquetas-secas.jpg?s=612x612&w=0&k=20&c=ET8XaTeFdnKD8UhpAUZSDI-g_g95aZnlzkL9gqad-Vw=" },
    {id:"008" ,nombre:"Saca nudos" ,precio:7800 ,stock:0 ,categoria:"peluqueria", foto: "https://media.istockphoto.com/id/2221107731/es/foto/peine-aislado-para-perros-negros-y-amarillos.jpg?s=612x612&w=0&k=20&c=MSQNBq0yrU5HWysI-meyNmDoGFR317q3u0fdpH3Tcy8=" },
    {id:"009" ,nombre:"Shampoo" ,precio:9900 ,stock:8 ,categoria:"peluqueria", foto: "https://media.istockphoto.com/id/1282198018/es/foto/un-ni%C3%B1o-lava-a-su-perro-jack-russell-terrier-con-champ%C3%BA-o-jab%C3%B3n-en-el-ba%C3%B1o-cuidar-de-la-salud.jpg?s=612x612&w=0&k=20&c=Gl3FkiMskIRa3lcDkB2xKJQhY4slBPI4eyI4pqDu0L4=" },
    {id:"010" ,nombre:"Conejin" ,precio:1000 ,stock:2 ,categoria:"forraje", foto: "https://media.istockphoto.com/id/1385680261/es/foto/conejito-peludo-con-galleta-aislada-adorable-conejito-de-conejo-blanco-y-marr%C3%B3n-hambriento.jpg?s=1024x1024&w=is&k=20&c=rWuzjZ1j7WZkSy7RQ0JyNHuU3czVvOeP4GnyszXG67M=" }
];

const Contenedor = document.createElement('div');
Contenedor.style.border = "3px double #278eaeff"; 
Contenedor.style.backgroundColor = "#f9f9f9";  
Contenedor.style.padding = "20px";            
Contenedor.style.margin = "20px";            
Contenedor.style.borderRadius = "15px";         
Contenedor.style.textAlign = "center";         


let Titulo = document.createElement('h1');
Titulo.innerHTML = 'Pet Shop "El Jazmin"';
document.body.appendChild(Titulo);
Titulo.style.fontFamily = "Verdana, Geneva, sans-serif";
Titulo.style.margin = "0";

let ParrafoPagina = document.createElement('h2');
ParrafoPagina.innerHTML = 'Aca vas a encontrar todo para tu mascota, desde juguetes hasta elementos de forrajeria!';
document.body.appendChild(ParrafoPagina);
ParrafoPagina.style.fontFamily = "Verdana, Geneva, sans-serif";

Contenedor.appendChild(Titulo);
Contenedor.appendChild(ParrafoPagina);

document.body.appendChild(Contenedor);

const ContenedorPrincipal = document.createElement('div');
ContenedorPrincipal.style.display = "flex";
ContenedorPrincipal.style.flexWrap = "wrap";
ContenedorPrincipal.style.gap = "20px";
ContenedorPrincipal.style.padding = "20px";
ContenedorPrincipal.style.justifyContent = "center";
document.body.appendChild(ContenedorPrincipal);

let ProductosDelCarrito = [];

const BotonParaVerCarrito = document.createElement('button');
BotonParaVerCarrito.innerHTML = '🛒 Ver Carrito (0)';
BotonParaVerCarrito.style.position = "fixed"; 
BotonParaVerCarrito.style.top = "20px";       
BotonParaVerCarrito.style.right = "20px";     
BotonParaVerCarrito.style.zIndex = "1000";
BotonParaVerCarrito.style.padding = "15px 20px";
BotonParaVerCarrito.style.backgroundColor = "#3498db";
BotonParaVerCarrito.style.color = "white";
BotonParaVerCarrito.style.border = "none";
BotonParaVerCarrito.style.borderRadius = "50px";
BotonParaVerCarrito.style.cursor = "pointer";
BotonParaVerCarrito.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
BotonParaVerCarrito.style.fontWeight = "bold";
document.body.appendChild(BotonParaVerCarrito);

const VentanaDelCarrito = document.createElement('div');
VentanaDelCarrito.style.position = "fixed";
VentanaDelCarrito.style.top = "50%";
VentanaDelCarrito.style.left = "50%";
VentanaDelCarrito.style.transform = "translate(-50%, -50%)"; 
VentanaDelCarrito.style.backgroundColor = "white";
VentanaDelCarrito.style.padding = "30px";
VentanaDelCarrito.style.borderRadius = "15px";
VentanaDelCarrito.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.5)";
VentanaDelCarrito.style.display = "none"; 
VentanaDelCarrito.style.zIndex = "2000";
VentanaDelCarrito.style.minWidth = "300px";
VentanaDelCarrito.style.fontFamily = "sans-serif";
document.body.appendChild(VentanaDelCarrito);

function MostrarCarrito(){
    VentanaDelCarrito.innerHTML = '<h2> Tu carrito </h2>';
    if (ProductosDelCarrito.length === 0){
        VentanaDelCarrito.innerHTML += '<p> El carrito esta vacio. </p>';
    } else {
        ProductosDelCarrito.forEach((prod)=>{
            const renglon = document.createElement('div');
            renglon.style.borderBottom = "1px solid #eee";
            renglon.style.padding = "10px 0";
            renglon.style.display = "flex";
            renglon.style.justifyContent = "space-between";
            renglon.innerHTML = `<span>${prod.nombre}</span><b>$${prod.precio}</b>`;
            VentanaDelCarrito.appendChild(renglon);
        });

        const TotalCarrito = ProductosDelCarrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
        const TotalCarritoDiv = document.createElement('div');
        TotalCarritoDiv.innerHTML = `<h3 style="margin-top:20px;">Total: $${TotalCarrito}</h3>`;
        VentanaDelCarrito.appendChild(TotalCarritoDiv);
    }
    const BotonCerrarCarrito = document.createElement('button');
    BotonCerrarCarrito.textContent = 'Cerrar X';
    BotonCerrarCarrito.style.marginTop = "20px";

    BotonCerrarCarrito.addEventListener('click', () => {
    VentanaDelCarrito.style.display = "none";
    });

    VentanaDelCarrito.appendChild(BotonCerrarCarrito);
    VentanaDelCarrito.style.display = "block";

    const BotonVaciar = document.createElement('button');
    BotonVaciar.textContent = "Vaciar Carrito";
    BotonVaciar.style.marginLeft = "10px";
    BotonVaciar.style.backgroundColor = "#e74c3c";
    BotonVaciar.style.color = "white";
    BotonVaciar.style.border = "none";
    BotonVaciar.style.padding = "5px 10px";
    BotonVaciar.style.borderRadius = "5px";
    BotonVaciar.style.cursor = "pointer";


    BotonVaciar.addEventListener('click',() => {
        ProductosDelCarrito = []; 
        BotonParaVerCarrito.innerHTML = `Ver Carrito (0)`; 
        MostrarCarrito();
    });

VentanaDelCarrito.appendChild(BotonVaciar);

}

BotonParaVerCarrito.onclick = () => MostrarCarrito();

Productos.forEach(item => {
    const Tarjeta = document.createElement('div');
    Tarjeta.style.width = "250px";
    Tarjeta.style.padding = "20px";
    Tarjeta.style.border = "1px solid #ddd";
    Tarjeta.style.borderRadius = "12px";
    Tarjeta.style.textAlign = "center";
    Tarjeta.style.fontFamily = "sans-serif";
    Tarjeta.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

    if (item.stock === 0){
        Tarjeta.style.backgroundColor = "#e2252533";
    } 

    Tarjeta.innerHTML = `
        <img src="${item.foto}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
        <h3 style="margin: 10px 0;">${item.nombre}</h3>
        <p style="color: #666;">Categoría: ${item.categoria}</p>
        <p style="font-size: 1.2rem; font-weight: bold;">$${item.precio}</p>
        <p>Stock: ${item.stock}</p>
    `;

    const Carrito = document.createElement('button');
    Carrito.innerHTML = 'Añadir al carrito';
    Carrito.style.backgroundColor = "#27ae60";
    Carrito.style.color = "white";
    Carrito.style.padding = "12px 20px";
    Carrito.style.border = "none";
    Carrito.style.borderRadius = "25px";
    Carrito.style.cursor = "pointer";
    Carrito.style.width = "100%"; 
    Carrito.style.marginTop = "10px";

    if (item.stock === 0) {
        Carrito.innerHTML = "❌ Agotado";
        Carrito.style.backgroundColor = "#d3d3d3";
        Carrito.style.cursor = "not-allowed";
        Carrito.disabled = true;
    }

    Carrito.addEventListener('click',() => {
    ProductosDelCarrito.push(item);
    BotonParaVerCarrito.innerHTML = `Ver Carrito (${ProductosDelCarrito.length})`;


    const textoOriginal = Carrito.innerHTML;
    const colorOriginal = Carrito.style.backgroundColor;

    Carrito.innerHTML = "Añadido";
    Carrito.style.backgroundColor = "#f1c40f"; 

    setTimeout(() => {
        Carrito.innerHTML = textoOriginal;
        Carrito.style.backgroundColor = colorOriginal;
    }, 1000);
});

    Tarjeta.appendChild(Carrito);
    ContenedorPrincipal.appendChild(Tarjeta);
});