const express = require("express");

const talentController = require("../controllers/talent.controller");

talentRouter = express.Router();

talentRouter.use((req, res, next) => {
  console.log("This is the ip address", req.ip);
  next();
});

talentRouter.post("/", talentController.postTalent);
talentRouter.get("/", talentController.getTalents);
talentRouter.get("/:talentId", talentController.getTalent);

module.exports = talentRouter;
