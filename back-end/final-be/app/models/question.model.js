var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema(
  {
    userId: String,
    answers: [{
      type: String
    }],
    is_learning: Boolean
  },
  { timestamps: true }
);
QuestionSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports =  mongoose.model('question', QuestionSchema)

  