window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");


  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }


  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0; 

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
      "Perdon por ser tan pobre y no tener para tu regalo",
      "Feliz cumpleanos",
      "Adios senora bonita",
      "Adios Sasha",
      "La Catrina",
      "Ojala te den tu gaif- digo Iphone",
      "Wiwiwi",
      "Pasala bien, Pasala bien",
      "Los tomates dicen que pases bien tu cumpleanos",
      "Happy birthday my dear lady of the coromoto",
      "wiwiwi",
      "uwawa",
      "Se le quiere",
      "awawa",
      "Te wiwiwi",
      "Gracias por ser wiwiwi",
      "y no dejes que wiwiwi, porque eres mi wiwiwi",
	"iba a poner una frase del cadaver de la novia pero no da el espacio",
	"la escarcha me dejo traumas",
	"no tengo enie asi que cumple muchos anos",
	"Y recuerda que eres la fokin wiwiwi",
	"capaz y no lees todo el poco de mensajes",
	"pero wiwiwi",
	"se le quiere mucho",
	"porque wiwiwi",
	"modelame asi",
	"dame tu mejor pose, pose, pose",
	"(pose, pose, pose)",
	"entonces",
	"ten fe de que te van a dar el Iphone (yo no tengo telefono hasta que chambee capaz)",
	"te doy fe",
	"adios seniora del clap",
	"chama paga la bolsa",
	"la maldita",
	"wiwiwi",
	"y wiwiwi",
	"porque te wiwiwi",
	"recuerda que wiwiwi",
	"Feliz cumpeaniooosss",
	"ya casi mete curriculum",
	"se le quiere",
	"el pelo rulo se te ve mejor que panchado(un facto)",
	"asi ta mas bella",
	"pero te ves mejor con el pelo wi- ya mucho",
	"de todo pongo",
	"Todos hablan de lo brillante y hermosa que es la luna, pero nadie de lo sola que esta",
	"cada dia mas vieja",
	"perp ni modos",
	"ya hay que facturar",
	"te mantengo se me compartes la custodia de negro",
	"tengo que enseniarle a rob- a que no se lo humillen en peleas",
	"JSKAJSKAJSALJSKLJSLKLAKS",
	"dios mio estoy mal",
	"pero wiwiwi",
	"feliz",
	"cumpleanos",
	"quien duerme en plenp 2025?"

  ];

  currentIndex = (currentIndex + 1) % songLines.length; 
  lyrics.textContent = songLines[currentIndex]; 
}
