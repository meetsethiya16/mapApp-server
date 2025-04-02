import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  _id: Number,
  cityName: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const citySchemaModel = mongoose.model("city_collection", citySchema);

export default citySchemaModel;
