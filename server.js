const express = require("express");
const app = express();
const port = 3001;

const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("./petHandlers.js"); // 'petHandlers.js' contains the route handlers

/* const requestLogger = (request, next) => {
    console.log('Method:', request.method);
    console.log('URL:  ', request.url);
    console.log('Time: ', new Date().toLocaleTimeString());
    console.log('---');
  }
 */

app.use(express.json());
// ROUTES

// GET /pets
app.get("/pets", getAllPets);

// POST /pets
app.post("/pets", createPet);

// GET /pets/:petId
app.get("/pets/:petId", getPetById);

// PUT /pets/:petId
app.put("/pets/:petId", updatePet);

// DELETE /pets/:petId
app.delete("/pets/:petId", deletePet);

/* app.use(requestLogger); */

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});