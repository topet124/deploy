import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["paid", "free"],
    default: "free",
  },
  avatar: String,
  avatarPublicId: String,
});

// User instance to delete password after fetch

UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  delete obj.confirmPassword;
  return obj;
};

export default mongoose.model("User", UserSchema);
