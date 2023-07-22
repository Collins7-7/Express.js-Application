const model = require("../models/message.model");

function getMessages(req, res) {
  res.status(200).json(model);
}

function getMessage(req, res) {
  const messageId = Number(req.params.messageId);
  const message = model[messageId];
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({
      error: "Message not found",
    });
  }
}

function postMessage(req, res) {
  if (!req.body.name) {
    return res.status(404).json({
      error: "Missing message name",
    });
  }
  const newMessage = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newMessage);

  res.status(201).json(newMessage);
}

module.exports = {
  getMessages,
  getMessage,
  postMessage,
};
