import express from "express";
import { connection } from "./postgres/postgres.js";
import routes from "./view/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}: http://localhost:${PORT}`);
});

connection();
