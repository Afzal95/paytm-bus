const Booking = require("../models/boooking");

exports.addBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.send(booking);
};
exports.getBooking = async (req, res) => {
  let { id } = req.params;
  const bookings = await Booking.find().lean().exec();
  let filteredBookings = bookings.filter(
    (booking) => booking.customerId.toString() == id
  );
  res.send(filteredBookings);
};