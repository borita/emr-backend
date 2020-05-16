require('nested-object-assign');
const Encounters = require('../models/Encounters');
console.log("llego a services")
module.exports = {
  create: (body) => Encounters.create(body),
  find: () => Encounters.find(),
  findById: (id) => Encounters.findById(id),

  //Superheroe.findOneAndUpdate({_id: idHeroe},{$set:keysToUpdate},{new:true}).exec()
  update: (encounter, body) => {
    //encounter = JSON.parse(JSON.stringify(body));
    //let dr  = subjective.rendering; 
    //Object.assign(encounter,body);
    console.log("--------------------")
    nestedObjectAssign(encounter,JSON.parse(JSON.stringify(body)));
    console.log(nestedObjectAssign(encounter,JSON.parse(JSON.stringify(body))))
    return encounter.save();
  },
}

