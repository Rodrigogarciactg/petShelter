const { response } = require("express");
const Pet = require("../models/pet.model");
module.exports.index = (request, response) => {
  response.json({
    message: "hello world",
  });
};

module.exports.createPet = (request, response) => {
  Pet.create(request.body)
    .then((Pet) => response.json(Pet))
    .catch((err) => response.json(err));
};

module.exports.getAllPets = (request, response) => {
  Pet.find({})
    .then((pets) => {
      console.log(pets);
      response.json(pets);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getPet = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((pet) => response.json(pet))
    .catch((err) => response.json(err));
};

module.exports.updatePet = (request, response) => {
  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then((updatedPet) => response.json(updatedPet))
    .catch((err) => response.json(err));
};

module.exports.deletePet = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
