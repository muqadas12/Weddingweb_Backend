
const Booking = require("./routes/Booking");
const CarRentalRoute = require("./routes/CarRentalRoute");

const CateringRoute = require("./routes/DealerRoute");
const HallRoute = require("./routes/HallRoute");
const PhotographyBooking = require("./routes/PhotographyBooking");

const Saloon = require("./routes/Saloon");
const UpdateDealer = require("./routes/UpdateDealer-Route");
const UserRoute = require("./routes/UserRoute");
module.exports = [
  Booking,
  CarRentalRoute,
  CateringRoute,
  HallRoute,
  PhotographyBooking,
  Saloon,
  UpdateDealer,
  UserRoute,
];
