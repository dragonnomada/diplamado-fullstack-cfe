const http = require("http");
const express = require("express");

const cfeContactoRouter = require("./routes/cfe/contacto");

async function main() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // TODO: RUTAS
  app.use("/", express.static("public"));

  app.use("/api/cfe/contacto", cfeContactoRouter);

  const server = http.createServer(app);

  console.log("Servidor iniciado un servidor en http://localhost:3000/");

  server.listen(3000);
}

main().catch((error) => {
  console.log(`${error}`);
});

