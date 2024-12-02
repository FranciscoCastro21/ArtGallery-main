require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
  ConnectionStrings: {
    MongoDB: "mongodb+srv://luisdavidortizr:Luisdavid123@cluster0.ynzoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
  Authentication: {
    facebook: {
      ClientId: "918908133530293",
      ClientSecret: "6f850dc45e9c855d3dc0425a40c85329",
      CallbackUrl: "http://localhost:3000/facebook/callback"
    },
    github: {
      ClientId: "Ov23liqJfQ6DWyaWB3Sx",
      ClientSecret: "8c28493b8e52a2cb19a14e41032fb2a424dd31ed",
      CallbackUrl: "http://localhost:3000/github/callback"
    }
  },
};
module.exports = configurations;
