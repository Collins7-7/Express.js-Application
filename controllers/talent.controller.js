const model = require("../models/talent.model");

function postTalent(req, res) {
  if (!req.body.name) {
    res.status(400);
    return res.json({
      error: "No talent name found",
    });
  }

  const newTalent = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newTalent);

  res.status(201).json(newTalent);
}

function getTalents(req, res) {
  res.json(model);
}

function getTalent(req, res) {
  const talentId = Number(req.params.talentId);
  const talent = model[talentId];
  if (talent) {
    res.status(200).json(talent);
  } else {
    res.status(404).json({
      error: "talent not found",
    });
  }
}

module.exports = {
  postTalent,
  getTalents,
  getTalent,
};
