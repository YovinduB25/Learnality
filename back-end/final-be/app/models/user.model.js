var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    fname : String,
    gender : String,
     
    username: {
      type: String,
      unique: true,
    },
    password: String,
    course: Array,
    is_teacher: Boolean,
    answers: [{ type: Schema.Types.ObjectId, ref: 'question' }],
    learning_method: [{ type: Schema.Types.ObjectId, ref: 'learning' }],
    personality_trait: [{ type: Schema.Types.ObjectId, ref: 'persona' }]
  },
  { timestamps: true }
);
UserSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports =  mongoose.model('user', UserSchema)