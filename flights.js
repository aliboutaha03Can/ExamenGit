// Flight data for Canada to Morocco routes
const flightData = {
  "Toronto-Casablanca": [
    { airline: "Air Canada", price: 850, duration: "7h 30m", stops: "Direct" },
    { airline: "Royal Air Maroc", price: 795, duration: "7h 45m", stops: "Direct" },
    { airline: "Air France", price: 920, duration: "11h 20m", stops: "1 escale (Paris)" },
    { airline: "Lufthansa", price: 885, duration: "12h 10m", stops: "1 escale (Frankfurt)" }
  ],
  "Toronto-Marrakech": [
    { airline: "Air Canada", price: 920, duration: "8h 15m", stops: "1 escale (Casablanca)" },
    { airline: "Royal Air Maroc", price: 865, duration: "8h 30m", stops: "1 escale (Casablanca)" },
    { airline: "Air France", price: 985, duration: "12h 45m", stops: "1 escale (Paris)" }
  ],
  "Toronto-Rabat": [
    { airline: "Royal Air Maroc", price: 875, duration: "8h 00m", stops: "1 escale (Casablanca)" },
    { airline: "Air France", price: 950, duration: "12h 30m", stops: "1 escale (Paris)" },
    { airline: "Air Canada", price: 910, duration: "8h 45m", stops: "1 escale (Casablanca)" }
  ],
  "Toronto-Tangier": [
    { airline: "Royal Air Maroc", price: 895, duration: "9h 15m", stops: "1 escale (Casablanca)" },
    { airline: "Air France", price: 975, duration: "13h 00m", stops: "1 escale (Paris)" }
  ],
  "Montreal-Casablanca": [
    { airline: "Air Canada", price: 830, duration: "7h 15m", stops: "Direct" },
    { airline: "Royal Air Maroc", price: 775, duration: "7h 30m", stops: "Direct" },
    { airline: "Air France", price: 895, duration: "10h 50m", stops: "1 escale (Paris)" }
  ],
  "Montreal-Marrakech": [
    { airline: "Royal Air Maroc", price: 845, duration: "8h 15m", stops: "1 escale (Casablanca)" },
    { airline: "Air France", price: 960, duration: "12h 20m", stops: "1 escale (Paris)" }
  ],
  "Montreal-Rabat": [
    { airline: "Royal Air Maroc", price: 855, duration: "7h 50m", stops: "1 escale (Casablanca)" },
    { airline: "Air Canada", price: 890, duration: "8h 30m", stops: "1 escale (Casablanca)" }
  ],
  "Montreal-Tangier": [
    { airline: "Royal Air Maroc", price: 875, duration: "9h 00m", stops: "1 escale (Casablanca)" },
    { airline: "Air France", price: 950, duration: "12h 45m", stops: "1 escale (Paris)" }
  ],
  "Vancouver-Casablanca": [
    { airline: "Air Canada", price: 1150, duration: "14h 30m", stops: "1 escale (Toronto)" },
    { airline: "Lufthansa", price: 1095, duration: "15h 45m", stops: "1 escale (Frankfurt)" },
    { airline: "Air France", price: 1120, duration: "15h 20m", stops: "1 escale (Paris)" }
  ],
  "Vancouver-Marrakech": [
    { airline: "Air Canada", price: 1220, duration: "15h 15m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1165, duration: "16h 30m", stops: "2 escales" }
  ],
  "Vancouver-Rabat": [
    { airline: "Air Canada", price: 1185, duration: "15h 00m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1145, duration: "16h 15m", stops: "2 escales" }
  ],
  "Vancouver-Tangier": [
    { airline: "Air Canada", price: 1205, duration: "15h 45m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1175, duration: "17h 00m", stops: "2 escales" }
  ],
  "Calgary-Casablanca": [
    { airline: "Air Canada", price: 1180, duration: "14h 45m", stops: "1 escale (Toronto)" },
    { airline: "Lufthansa", price: 1125, duration: "16h 00m", stops: "1 escale (Frankfurt)" },
    { airline: "Air France", price: 1150, duration: "15h 35m", stops: "1 escale (Paris)" }
  ],
  "Calgary-Marrakech": [
    { airline: "Air Canada", price: 1250, duration: "15h 30m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1195, duration: "16h 45m", stops: "2 escales" }
  ],
  "Calgary-Rabat": [
    { airline: "Air Canada", price: 1215, duration: "15h 15m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1175, duration: "16h 30m", stops: "2 escales" }
  ],
  "Calgary-Tangier": [
    { airline: "Air Canada", price: 1235, duration: "16h 00m", stops: "2 escales" },
    { airline: "Lufthansa", price: 1205, duration: "17h 15m", stops: "2 escales" }
  ]
};

function searchFlights() {
  const departureCity = document.getElementById('departure-city').value;
  const arrivalCity = document.getElementById('arrival-city').value;
  const resultsDiv = document.getElementById('results');
  
  const routeKey = `${departureCity}-${arrivalCity}`;
  const flights = flightData[routeKey];
  
  if (!flights) {
    resultsDiv.innerHTML = '<p style="color: #e74c3c;">Aucun vol trouvé pour cette route.</p>';
    return;
  }
  
  // Sort flights by price to find the cheapest
  const sortedFlights = [...flights].sort((a, b) => a.price - b.price);
  const cheapestPrice = sortedFlights[0].price;
  
  let html = '<h3>Résultats de recherche:</h3>';
  
  sortedFlights.forEach(flight => {
    const isCheapest = flight.price === cheapestPrice;
    const cardClass = isCheapest ? 'result-card cheapest' : 'result-card';
    
    html += `
      <div class="${cardClass}">
        ${isCheapest ? '<div class="cheapest-badge">✈️ VOL LE MOINS CHER</div>' : ''}
        <h3><span class="airline">${flight.airline}</span></h3>
        <div class="price">${flight.price} CAD$</div>
        <div class="flight-details">
          <p>⏱️ Durée: ${flight.duration}</p>
          <p>🛫 ${flight.stops}</p>
          <p>📍 ${departureCity} → ${arrivalCity}</p>
        </div>
      </div>
    `;
  });
  
  resultsDiv.innerHTML = html;
}
