import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
  _id: Number,
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: 20,
    minlength: 5,
    trim: true,
  },
  info: String,
});

userSchema.plugin(uniqueValidator);

const userSchemaModel = mongoose.model("user_collection", userSchema);

export default userSchemaModel;
