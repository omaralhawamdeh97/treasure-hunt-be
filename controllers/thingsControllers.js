const { Thing } = require("../db/models");

exports.getTreasures = async (req, res, next) => {
  try {
    const treasures = await Thing.findAll({
      where: { isTreasure: true },
    });
    res.json(treasures);
  } catch (error) {
    next(error);
  }
};

exports.getGarbages = async (req, res, next) => {
  try {
    const garbges = await Thing.findAll({
      where: { isTreasure: false },
    });
    res.json(garbges);
  } catch (error) {
    next(error);
  }
};
