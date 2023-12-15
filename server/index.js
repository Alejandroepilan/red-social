import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(process.env.APP_PORT, () => {
  console.log("Servidor encendido.", process.env.APP_PORT);
});
