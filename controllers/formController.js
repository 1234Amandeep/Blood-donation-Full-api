const Contact = require("../Models/formModel");
const main = require("../mailer.js");

const formController = async (req, res) => {
  const { name, email, bloodGroup } = req.body;
  const contact = await Contact.create({
    name,
    email,
    bloodGroup,
  });
  main(contact);
  res.json(contact);
};

const deleteController = async (req, res) => {
  const Response = await Contact.deleteMany();
  console.log(Response);
};

module.exports = {
  formController,
  deleteController,
};
