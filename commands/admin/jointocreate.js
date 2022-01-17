const joinToCreateSchema = require("../../models/joinToCreateSchema");

module.exports = {
    name: "jointocreate",
    description: "set a join to create voice channel",
    ownerOnly: true,
    options: [
        {
            type: 7,
            name: "voice_channel",
            description: "set a join to create voice channel",
            channelTypes: ["GUILD_VOICE"]
        },
        {
            type: 5,
            name: "enabled",
            description: "enable/disable welcome messages",
        },
    ],

    async execute(client, interaction) {
        const template = {};

        const channel = interaction.options.getChannel("voice_channel");

        const options = {
            channelId: channel?.id,
            enabled: interaction.options.getBoolean("enabled")
        };

        for (const prop in options) {
            if (options[prop] !== null && options[prop] !== undefined) {
                template[prop] = options[prop];
            }
        }

        if (!Object.keys(template).length) {
            await interaction.reply(
                {
                    content: "cannot create/update settings since no options were provided",
                    ephemeral: true
                }
            );

            return;
        }

        if (options.channelId && channel.type !== "GUILD_VOICE") {
            await interaction.reply("specified channel has to be a voice channel");

            return;
        }

        const data = await joinToCreateSchema.findOne({ guildId: interaction.guildId });

        if (!data) {
            const schema = await joinToCreateSchema.create(
                {
                    guildId: interaction.guildId,
                    ...template
                }
            );

            schema.save();
        } else {
            await joinToCreateSchema.findOneAndUpdate({ guildId: interaction.guildId }, template);
        }

        await interaction.reply("settings have been updated");
    },
};