import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, unique: true },
    state: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    cpf: { type: String, required: true },
    receivePromotionalInfo: { type: Boolean, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const users = mongoose.model("users", userSchema);

export default users;
