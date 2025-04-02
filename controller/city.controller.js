import "../models/connection.js";
import citySchemaModel from "../models/city.model.js";

export const save = async (req, res) => {
  const cityList = await citySchemaModel.find();
  const _id = cityList.length === 0 ? 1 : cityList[cityList.length - 1]._id + 1;
  const cityDetail = {
    ...req.body,
    _id: _id,
  };
  try {
    await citySchemaModel.create(cityDetail);
    res.status(200).json({ status: true });
  } catch (error) {
    console.error("Error saving city:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};
