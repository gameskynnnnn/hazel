const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	guildId: { type: String, required: true, unique: true },
	channelId: { type: String },
	isEnabled: { type: Boolean, default: false },
});

const model = mongoose.model("joinToCreateSchema", schema);

module.exports = model;
