// Función para mostrar/ocultar partidos de un día
function mostrarPartidos(id) {
    const partidos = document.getElementById(id);
    if (partidos.style.display === "none") {
        partidos.style.display = "block";
    } else {
        partidos.style.display = "none";
    }
}

// Función para mostrar/ocultar detalles de un partido
function verDetalles(id) {
    const detalles = document.getElementById(id);
    if (detalles.style.display === "none") {
        detalles.style.display = "block";
    } else {
        detalles.style.display = "none";
    }
}

// Función para inicializar el mapa
function initMap() {
    const estadio = { lat: 48.218861, lng: 11.624639 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: estadio,
    });
    const marker = new google.maps.Marker({
        position: estadio,
        map: map,
        title: 'Allianz Arena - Final Champions 2025',
    });
    const infoWindow = new google.maps.InfoWindow({
        content: '<p>Allianz Arena, Múnich</p>',
    });
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Función para mostrar la información del usuario
function mostrarInformacionUsuario() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const equipoFavorito = localStorage.getItem('equipoFavorito');
    const informacionUsuarioDiv = document.getElementById('informacion-usuario');

    if (!informacionUsuarioDiv) {
        console.error("No se encontró el contenedor para la información del usuario.");
        return;
    }

    if (!nombreUsuario || !equipoFavorito) {
        informacionUsuarioDiv.innerHTML = "<span>No se encontraron datos del usuario.</span>";
        return;
    }

    const imagenesEquipos = {
        "Arsenal": "arsenal.png",
        "Aston Villa": "aston.png",
        "Atlético Madrid": "atleti.png",
        "Borussia Dortmund": "bdormunt.png",
        "Barcelona": "fcb.png",
        "Bayern Múnich": "bayer.png",
        "Benfica": "benfica.png",
        "Club Brugge": "brujas.png",
        "Feyenoord": "Feyenoord.png",
        "Inter de Milán": "inter.png",
        "Bayer Leverkusen": "leverkusen.png",
        "Lille": "Lille.png",
        "Liverpool": "Liverpool.png",
        "Paris Saint-Germain": "paris.png",
        "PSV Eindhoven": "psv.png",
        "Real Madrid": "real.png"
    };

    const imagenEquipo = imagenesEquipos[equipoFavorito];

    if (!imagenEquipo) {
        console.error("No se encontró la imagen para el equipo:", equipoFavorito);
        informacionUsuarioDiv.innerHTML = `<span>${nombreUsuario} - ${equipoFavorito}</span>`;
        return;
    }

    informacionUsuarioDiv.innerHTML = `
        <img src="imagenes/${imagenEquipo}" alt="${equipoFavorito}" class="escudo-equipo">
        <span>${nombreUsuario} - ${equipoFavorito}</span>
    `;
}

// Función para guardar los datos del usuario
function guardarDatosUsuario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const equipo = document.getElementById('equipo').value.trim();

    if (!nombre || !email || !edad || !pais || !equipo) {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }

    localStorage.setItem('nombreUsuario', nombre);
    localStorage.setItem('emailUsuario', email);
    localStorage.setItem('edadUsuario', edad);
    localStorage.setItem('paisUsuario', pais);
    localStorage.setItem('equipoFavorito', equipo);

    return true;
}

// Función para mostrar todos los datos del usuario
function mostrarDatosCompletosUsuario() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const emailUsuario = localStorage.getItem('emailUsuario');
    const edadUsuario = localStorage.getItem('edadUsuario');
    const paisUsuario = localStorage.getItem('paisUsuario');
    const equipoFavorito = localStorage.getItem('equipoFavorito');
    const datosCompletosDiv = document.getElementById('datos-completos-usuario');

    if (!datosCompletosDiv) {
        console.error("No se encontró el contenedor para los datos completos del usuario.");
        return;
    }

    if (!nombreUsuario || !emailUsuario || !edadUsuario || !paisUsuario || !equipoFavorito) {
        datosCompletosDiv.innerHTML = "<p>No se encontraron datos del usuario.</p>";
        return;
    }

    datosCompletosDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombreUsuario}</p>
        <p><strong>Correo electrónico:</strong> ${emailUsuario}</p>
        <p><strong>Edad:</strong> ${edadUsuario}</p>
        <p><strong>País:</strong> ${paisUsuario}</p>
        <p><strong>Equipo favorito:</strong> ${equipoFavorito}</p>
    `;
}

// Eventos
document.addEventListener('DOMContentLoaded', mostrarInformacionUsuario);
document.addEventListener('DOMContentLoaded', mostrarDatosCompletosUsuario);