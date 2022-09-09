import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    subcontract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcontract",
    },
    hirecontract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hirecontract",
    },
    subcontractCreatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { versionKey: false }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
