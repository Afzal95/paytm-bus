const mongoose = require("mongoose");
const {Schema,model} = mongoose.Schema;
const routesSchema = new Schema({
  departureLocation: {
    name: {
      type: String,
      required: true,
    },
    subLocations: { type: [String] },
  },
  arrivalLocation: {
    name: {
      type: String,
      required: true,
    },
    subLocations: { type: [String] },
  },
  duration: {
    type: Number,
    required: true,
  },
});

module.exports = model("Routes", routesSchema);
