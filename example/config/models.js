// TODO: auto-discover models instead of defining them manually
module.exports = [
  {
    "name": "File",
    "definition": require("../models/file.json")
  },
  {
    "name": "Role",
    "definition": require("../models/role.json")
  },
  {
    "name": "User",
    "definition": require("../models/user.json")
  }
];
