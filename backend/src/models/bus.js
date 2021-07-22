const mongoose = require("mongoose");
const {Schema,model} = mongoose.Schema;
const busSchema = new Schema({
  operatorName: {
    type: String,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number],
    required: true,
  },
  // fare is manual
  totalSeats: {
    type: Number,
    required: false,
  },
  routes: {
    type: Schema.Types.ObjectId,
    ref: "Routes",
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  liveTracking: {
    type: Number,
    required: true,
  },
  reschedulable: {
    type: Number,
    required: true,
  },
});

module.exports = model("Buses", busSchema);
