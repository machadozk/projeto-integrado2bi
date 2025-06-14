// Popup functions
function mostrarPopup(id) {
  document.getElementById(id).style.display = 'block';
}

function fecharPopup(id) {
  document.getElementById(id).style.display = 'none';
}

// Event listeners
document.getElementById('solicitarBtn').addEventListener('click', () => {
  mostrarPopup('popupSucesso');
});

document.getElementById('cancelarBtn').addEventListener('click', () => {
  mostrarPopup('popupCancelar');
});

// Leaflet map
const vilaVelhaCoords = [-20.3297, -40.2925];
const map = L.map('map').setView(vilaVelhaCoords, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

let marker = L.marker(vilaVelhaCoords).addTo(map);

map.on('click', function (e) {
  marker.setLatLng(e.latlng);
});
