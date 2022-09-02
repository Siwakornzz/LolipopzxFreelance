import mongoose from "mongoose";

const HirecontractSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
    },
    typeofwork: {
      type: String,
    },
    detail: {
      type: String,
    },
    duration: {
      type: Number,
    },
    budget: {
      type: Number,
    },
    province: {
      type: String,
    },
    status: {
      type: String,
      default: "WAITING",
    },
    hirecontractCreatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { versionKey: false }
);

const Hirecontract = mongoose.model("Hirecontract", HirecontractSchema);

export default Hirecontract;
