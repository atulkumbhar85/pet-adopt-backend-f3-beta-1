const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  // uudi: {
  //   type: String,
  //   required: true,
  // },
  petname: {
    type: String,
    required: true,
  },
  petcategory: {
    type: String,
    required: true,
  },
  selectedPet: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  petimages: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  about: {
    type: String,
    required: true,
  },
  requests: [
    {
      request: {
        type: String,
        required: true,
      },
    },
  ],
  adoptionFee: {
    type: String,
    required: true,
  },
});

const Pet = mongoose.model("PET", petSchema);

module.exports = Pet;
