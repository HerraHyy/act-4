const pets = [];

let nextPetId = 1;

function getNewPetId() {
  const newPetId = nextPetId;
  nextPetId++;
  return newPetId;
}

//  HANDLERS

// GET /pets
const getAllPets = (req, res) => {
  console.log(pets);
  res.json(pets);
};

// POST /Pets
const createPet = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const type = req.body.type;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;
  const newPet = {
    petId: getNewPetId(),
    name, type, age, color, weight
  };
  pets.push(newPet);
  res.json(newPet);
};

// GET /Pets/:petId
const getPetById = (req, res) => {
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  res.json(pet);
};

// PUT /Pets/:petId
const updatePet = (req, res) => {
  const name = req.body.name;
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  pet.name = name;
  res.json(pet);
};

// DELETE /Pets/:petId
const deletePet = (req, res) => {
  const petId = req.params.petId;
  const petIdx = pets.findIndex((pet) => pet.petId == petId);
  pets.splice(petIdx, 1);
  res.json({ message: "success" });
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};