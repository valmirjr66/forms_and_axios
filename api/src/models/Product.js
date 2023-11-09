import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    short_description: { type: String, required: true },
    roast: { type: Number, required: true },
    origin: { type: String, required: true },
    notes: { type: String, required: true },
    count: { type: Number, default: 5 },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const products = mongoose.model("products", productSchema);

export default products;
