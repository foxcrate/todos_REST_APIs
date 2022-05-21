import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos";

let app = express();

app.use(bodyParser.json());

app.use("/todos", todosRoutes);

app.listen(3005, () => {
  //test_changing_the_language
  console.log("-- server started --");
});
