import mongoose, { Schema } from "mongoose";

const NodeFileSchema = new Schema({
  title: String,
  version: String,
  offsetX: Number,
  offsetY: Number,
  scale: Number,

  nodes: [
    {
      id: Number,
      name: String,
      x: Number,
      y: Number,
      w: Number,
      h: Number,

      inputs: [],
      outputs: [],
      widgets: [],
    },
  ],

  links: [
    {
      id: Number,
      from: Number,
      to: Number,
    },
  ],
});

const NodeFile = mongoose.model('NodeFile', NodeFileSchema);
export default NodeFile;
