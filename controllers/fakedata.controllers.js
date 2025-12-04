const fakeDataModel = require("../models/fakedata.models");

class FakeDate {
  static getAllData = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 50;
      const skip = (page - 1) * limit;

      const fakeData = await fakeDataModel.find().skip(skip).limit(limit);

      const totalDataCount = await fakeDataModel.estimatedDocumentCount();
      const totalPageCount = Math.ceil(totalDataCount / limit);

      res.status(200).send({
        status: "Success",
        pagination: {
          page,
          limit,
          countOfPages: totalPageCount,
          countOfAllData: totalDataCount,
        },
        data: fakeData,
      });
    } catch (e) {
      res.status(500).send({
        status: "Failed",
        data: [],
        message: e.message,
      });
    }
  };
}

module.exports = FakeDate;
