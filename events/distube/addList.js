const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "addList",

	async execute(client, queue, playlist) {
		queue.textChannel.send(`Added \`${playlist.songs.length}\` songs to queue`);
	},
};