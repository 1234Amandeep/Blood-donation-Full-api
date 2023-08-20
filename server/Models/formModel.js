const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", formSchema);

module.exports = Contact;
