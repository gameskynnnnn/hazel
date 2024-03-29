const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "blush",
	description: "Blush",
	options: [
		{
			name: "user",
			description: "Provide a user",
			type: 6,
		},
	],

	async execute(client, interaction) {
		const member = interaction.options.getUser("user");

		const embed = new MessageEmbed()
			.setColor(client.color)
			.setDescription(
				member
					? `**${interaction.member.user.username}** has blushed towards **${member.username}**`
					: `**${interaction.member.user.username}** has blushed`
			)
			.setImage(
				client.getRandomArrayElement([
					"https://media.giphy.com/media/ulWUgCk4F1GGA/giphy.gif",
					"https://media.giphy.com/media/klmpEcFgXzrYQ/giphy.gif",
					"https://media.giphy.com/media/6CBGoJnEBbEWs/giphy.gif",
					"https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif",
					"https://media.giphy.com/media/UUjkoeNhnn0K4/giphy.gif",
					"https://media.giphy.com/media/dzVN9d0k1Xn0TYsBuO/giphy.gif",
					"https://media.giphy.com/media/l3mAFwOEPLzoafdA5B/giphy.gif",
					"https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif",
					"https://media.giphy.com/media/cxRGi2nJb3cBy/giphy.gif",
					"https://media.giphy.com/media/FjMfcItWjr3DG/giphy.gif",
					"https://media.giphy.com/media/4orREzKni7BTi/giphy.gif",
					"https://media.giphy.com/media/1gbQIeNzZxcSk/giphy.gif",
				])
			);

		let object = { embeds: [embed] };

		if (member) {
			object = { ...object, content: `<@${interaction.member.id}> <@${member.id}>` };
		}

		await interaction.reply(object);
	},
};
