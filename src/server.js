const proffys = [
  {
    name: "Albert Einstein",
    avatar: "https://www.practicaespanol.com/wp-content/uploads/Alt-Fotograf%C3%ADa-de-Arthur-Sasse-de-la-instant%C3%A1nea-de-Albert-Einstein-EFE.jpg",
    whatsapp: "12992129200",
    bio: "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta. Me da uns 10 conto te ensino umas coisas ai sobre a relatividade",
    subject: "Física",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Albert Einstein do Futuro",
    avatar: "https://www.practicaespanol.com/wp-content/uploads/Alt-Fotograf%C3%ADa-de-Arthur-Sasse-de-la-instant%C3%A1nea-de-Albert-Einstein-EFE.jpg",
    whatsapp: "12992129200",
    bio: "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta. Me da uns 10 conto te ensino umas coisas ai sobre a relatividade",
    subject: "Física",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  }
]


const express = require('express');
const server = express();


// nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});


server
.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)
.listen(5500)


function pageLanding (req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  return res.render("study.html", {proffy: proffys});
}

function pageGiveClass(req, res) {
  return res.render("give-classes.html");
}