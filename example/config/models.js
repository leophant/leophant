module.exports = [
  {
    "name": "User",
    "dataSource": "db1",
    "definition": require("../models/db1/user.json")
  },
  {
    "name": "User",
    "dataSource": "db2",
    "definition": require("../models/db2/user.json")
  },
  {
    "name": "User",
    "dataSource": "db3",
    "definition": require("../models/db2/user.json")
  }
];
