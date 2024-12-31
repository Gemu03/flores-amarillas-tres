// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var titulo = document.querySelector("h1.titulo");

var mensaje = [
  { text: "Sofía, es miércoles 15 de marzo, y aunque muchos me regañan por siquiera pensar en volver contigo, necesito desahogarme.", time: 0, duration: 8 },
  { text: "Hoy necesité mi pedal de piano y vernos otra vez me removió todo. Fue muy difícil esperarte como antes.", time: 8, duration: 8 },
  { text: "Verte bajar del bus con el mismo saco de aquel día me dolió. Fue como un viaje a lo que éramos.", time: 16, duration: 8 },
  { text: "Entrar a tu casa, casi pasar por tu cuarto… me invadió la nostalgia. Y en la despedida, tu abrazo, tu perfume… me rompí.", time: 24, duration: 8 },
  { text: "Yo fui quien terminó contigo, y sé que mis decisiones nos quitaron cualquier oportunidad de volver.", time: 32, duration: 8 },
  { text: "Busqué llenar tu ausencia con fiestas y besos sin sentido, pero nada se comparó a lo que sentí a tu lado.", time: 40, duration: 8 },
  { text: "Tú eras mi apoyo, mi motivación, mi amiga de verdad. Mis recuerdos siguen anclados a ti.", time: 48, duration: 8 },
  { text: "Recordé nuestros últimos besos y lloré por dentro. Ha pasado tiempo, pero aún me duele pensarte.", time: 56, duration: 8 },
  { text: "Claro que cometí errores. Te perdí y no me di cuenta de todo lo que valías hasta que fue muy tarde.", time: 64, duration: 8 },
  { text: "Duele verte seguir con tu vida, pero admito que no puedo reprocharte nada. Yo también me equivoqué mucho.", time: 72, duration: 8 },
  { text: "Me cuesta creer que la Sofía que conocí siga ahí. Quizá ya somos dos extraños, y eso me parte el alma.", time: 80, duration: 8 },
  { text: "Danna complicó nuestra historia, sí, pero también asumo mi parte de la culpa. No supe manejar nada bien.", time: 88, duration: 8 },
  { text: "Al final, las mentiras y los malos entendidos nos distanciaron más y más… hasta perdernos.", time: 96, duration: 8 },
  { text: "Hoy solo me queda el recuerdo de lo que fuimos. Me duele y me libera a la vez contarlo aquí.", time: 104, duration: 8 },
  { text: "No busco lástima, Sofía. Necesitaba hablarte y tal vez entender mi propio dolor. Espero no incomodarte.", time: 112, duration: 8 },
  { text: "Te amo todavía, aunque sé que nada es igual. Te pido perdón por todo el daño que te causé… y el que me causé a mí mismo.", time: 120, duration: 8 },
  { text: "Gracias por haberme dado parte de tu vida. Fuiste mi motor y me diste luz en momentos oscuros.", time: 128, duration: 8 },
  { text: "Ojalá algún día pueda mirar atrás sin este nudo en el pecho. Te deseo lo mejor, Sofi.", time: 136, duration: 8 },
  { text: "No sé si leas esto, pero… cuídate siempre. Te agradezco cada instante que compartimos.", time: 144, duration: 8 },
  { text: "Este es mi último mensaje. Quizá un cierre que tanto necesitaba. Adiós, con amor y gratitud.", time: 152, duration: 8 }
];


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "♪ ♪", time: 0, duration: 20 },
  { text: "THOUGHT I FOUND A WAY", time: 20, duration: 4 },
  { text: "THOUGHT I FOUND A WAY OUT (OUT)", time: 24, duration: 4 },
  { text: "BUT YOU NEVER GO AWAY (NEVER GO AWAY)", time: 28, duration: 4 },
  { text: "SO I GUESS I GOTTA STAY NOW", time: 32, duration: 4 },
  { text: "OH I HOPE SOMEDAY I'LL MAKE IT OUT OF HERE", time: 36, duration: 8 },
  { text: "EVEN IF IT TAKES ALL NIGHT OR A HUNDRED YEARS", time: 44, duration: 8 },
  { text: "NEED A PLACE TO HIDE BUT I CAN'T FIND ONE NEAR", time: 52, duration: 8 },
  { text: "WANNA FEEL ALIVE OUTSIDE I CAN'T FIGHT MY FEAR", time: 60, duration: 10 },
  { text: "ISN'T IT LOVELY?", time: 70, duration: 3 },
  { text: "ALL ALONE", time: 73, duration: 2 },
  { text: "HEART MADE OF GLASS MY MIND OF STONE", time: 75, duration: 4 },
  { text: "TEAR ME TO PIECES", time: 79, duration: 2 },
  { text: "SKIN TO BONE", time: 81, duration: 3 },
  { text: "HELLO", time: 84, duration: 1 },
  { text: "WELCOME HOME.", time: 85, duration: 6 },
  { text: "WALKING OUT OF TIME", time: 91, duration: 4 },
  { text: "LOOKING FOR A BETTER PLACE", time: 95, duration: 5 },
  { text: "SOMETHING'S ON MY MIND", time: 100, duration: 2 },
  { text: "MIND", time: 102, duration: 2 },
  { text: "ALWAYS IN MY HEAD SPACE", time: 104, duration: 2 },
  { text: "BUT I KNOW SOMEDAY I'LL MAKE IT OUT OF HERE", time: 106, duration: 9 },
  { text: "EVEN IF IT TAKES ALL NIGHT OR A HUNDRED YEARS", time: 115, duration: 8 },
  { text: "NEED A PLACE TO HIDE BUT I CAN'T FIND ONE NEAR", time: 123, duration: 8 },
  { text: "WANNA FEEL ALIVE OUTSIDE I CAN'T FIGHT MY FEAR", time: 131, duration: 10 },
  { text: "ISN'T IT LOVELY?", time: 141, duration: 3 },
  { text: "ALL ALONE", time: 144, duration: 1 },
  { text: "HEART MADE OF GLASS MY MIND OF STONE", time: 145, duration: 4 },
  { text: "TEAR ME TO PIECES", time: 149, duration: 3 },
  { text: "SKIN TO BONE", time: 152, duration: 2 },
  { text: "HELLO,", time: 154, duration: 2 },
  { text: "WELCOME HOME", time: 156, duration: 4 },
  { text: "[KALID: VOCALIZING]", time: 160, duration: 7 },
  { text: "[BILLIE: VOCALIZING]", time: 167, duration: 8 },
  { text: "♪ ♪", time: 175, duration: 13 },
  { text: "HELLO, WELCOME HOME", time: 188, duration: 5 },
];

// Función para actualizar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.innerHTML = "";
  }
}

// Función para actualizar el título
function updateTitulo() {
  var time = Math.floor(audio.currentTime);
  var currentMessage = mensaje.find(
    (msg) => time >= msg.time && time < msg.time + msg.duration
  );

  if (currentMessage) {
    titulo.innerHTML = currentMessage.text;
  } else {
    titulo.innerHTML = "";
  }
}

// Actualizar ambos elementos en el intervalo
setInterval(() => {
  updateLyrics();
  updateTitulo();
}, 500); // Actualización más rápida para mejorar la sincronización
