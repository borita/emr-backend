
const { EncountersService } = require('../services')

module.exports = {
  create: (req, res) => {
    EncountersService.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send({ message: 'Error creating user', err }));
  },
  find: (req, res) => {
      console.log("probando get")
    EncountersService.find()
      .then(encounters => res.status(200).send(encounters))
      .catch(err => res.status(404).send({ message: 'Encounters not found', err }));
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await EncountersService.findById(id); 
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ message: "Not found", err })
    }
  },
  findByIdAndUpdate: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    EncountersService.findById(id)
      .then(encounter => EncountersService.update(encounter, body))
      .then(updatedEncounter => res.status(200).send(updatedEncounter))
      .catch(err => res.status(400).send({ message: "Error updating encounter", err }));
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await EncountersService.findById(id);
      await EncountersService.update(encounter, { is_active: false })
      res.status(204).send(); 
    } catch (error) {
      res.status(404).send({ message: "Error deleting user", error });
    }
  }
}