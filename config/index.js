const config = [
  {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
  },
  {
    url: "http://localhost:3000",
  },
];

module.exports = config;
