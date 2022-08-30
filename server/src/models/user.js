import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      trim: true,
    },
    lineid: {
      type: String,
    },
    subdistrict: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      trim: true,
    },
    province: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: String,
      trim: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetTokenExpiry: {
      type: Number,
    },
    subcontracts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcontract",
      },
    ],
    hirecontracts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hirecontract",
      },
    ],
    task: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    roles: {
      type: String,
      default: "User",
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

export default User;
