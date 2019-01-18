module.exports = [
  {
    "name": "File",
    "dataSource": "db1",
    "definition": require("../models/file.json")
  },
  {
    "name": "Role",
    "dataSource": "db1",
    "definition": require("../models/role.json")
  },
  {
    "name": "User",
    "dataSource": "db2",
    "definition": require("../models/user.json")
  }
];
