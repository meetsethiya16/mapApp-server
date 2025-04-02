import "../models/connection";
import citySchemaModel from "../models/city.model";

export const saveCity = async (req, res) => {
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
    res.status(500).json({ status: false });
  }
};
