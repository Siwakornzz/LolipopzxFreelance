import mongoose from "mongoose";

const SubcontractSchema = new mongoose.Schema(
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
    startbudget: {
      type: Number,
    },
    province: {
      type: String,
    },
    status: {
      type: String,
      default: "WAITING",
    },
    subcontractCreatorId: {
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

const Subcontract = mongoose.model("Subcontract", SubcontractSchema);

export default Subcontract;
