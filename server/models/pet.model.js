const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: [true, "Pet Name is required"],
      minlength: [3, "First name must be at least 3 characters"],
    },
    petType: {
      type: String,
      required: [true, "Pet type is required"],
      minlength: [3, "Pet type must be at least 3 characters"],
    },
    petDescription: {
      type: String,
      required: [true, "Pet description is required"],
      minlength: [3, "Pet description must be at least 3 characters"],
    },
    petSkill: { type: String },
    petSkill2: { type: String },
    petSkill3: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pet", PetSchema);
