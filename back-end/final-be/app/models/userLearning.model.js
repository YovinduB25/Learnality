var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserLearningSchema = new Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user' 
    },
    learning_method: String
  },
  { timestamps: true }
);

UserLearningSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports =  mongoose.model('learning', UserLearningSchema)

  