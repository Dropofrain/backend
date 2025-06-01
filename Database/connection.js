const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true,
    tls: true,

    // useFindAndModify: true
  })
  .then(() => {
    console.log("DataBase connection");
  })
  .catch((err) => {
    console.log("DataBase connection failed", err);
  });
