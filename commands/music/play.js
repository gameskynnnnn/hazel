module.exports = {
    name: "play",
    description: "plays a song",
    options: [
        {
            name: "text",
            description: "youtube, spotify",
            type: 3,
            required: true
        }
    ],

    async execute(client, interaction) {
        const query = interaction.options.getString("text");

        if (!interaction.member.voice.channel) {
            await interaction.reply(
                {
                    content: "this command can only be used inside a voice channel",
                    ephemeral: true
                }
            );

            return;
        }

        if (!interaction.member.voice.channel.members.has(client.CLIENT_ID) && client.voice.adapters.get(interaction.guildId)) {
            await interaction.reply(
                {
                    content: "u cannot use this command if you're not in the same voice channel as hazel",
                    ephemeral: true
                }
            );

            return;
        }

        client.distube.playVoiceChannel(interaction.member.voice.channel, query,
            {
                textChannel: interaction.channel,
                member: interaction.member
            }
        );

        await interaction.reply(`searching: \`${query}\``);
    }
};