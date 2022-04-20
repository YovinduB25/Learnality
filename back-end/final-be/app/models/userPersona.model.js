var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPersonaSchema = new Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user' 
    },
    personality_trait: String
  },
  { timestamps: true }
);
UserPersonaSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports =  mongoose.model('persona', UserPersonaSchema)

  