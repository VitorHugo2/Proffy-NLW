//Servidor

const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, Sucess} = require("./pages")

//configurar Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configs do servidor
server
//recebimento dos formularios
.use(express.urlencoded({ extended: true }))
// configurar arquivos estaticos (imagens e css)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/sucess", Sucess)
.post("/save-classes", saveClasses)
// iniciação e ip do servidor
.listen(5500)