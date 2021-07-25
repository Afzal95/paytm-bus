const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/boooking");

exports.getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};
exports.getOneRoute = async (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;
  console.log(date);
  let routes = await Route.find().lean().exec();
  let route = routes.find((route) => {
    return (
      route.departureLocation.name.toLowerCase() == departure.toLowerCase() &&
      route.arrivalLocation.name.toLowerCase() == arrival.toLowerCase()
    );
  });

  let buses = await Bus.find();
  let matchedBuses = buses.filter((bus) => {
    return bus.routes.toString() === route._id.toString();
  });

  const bookings = await Booking.find().lean().exec();
  const busIdWithSeatsObj = {};
  for (let i = 0; i < matchedBuses.length; i++) {
    let currentBusSeats = [];
    const busBookings = bookings.filter((booking) => {
      return booking.busId === matchedBuses[i]._id;
    });
    busBookings.forEach((booking) => {
      currentBusSeats = [...currentBusSeats, ...booking.seats];
    });
    busIdWithSeatsObj[matchedBuses[i]._id.toString()] = currentBusSeats;
  }
  res.send({ route: route, matchedBuses: matchedBuses, busIdWithSeatsObj });
};