const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hug",
    description: "hug someone",
    options: [
        {
            name: "user",
            description: "select a user",
            type: 6,
            required: true
        }
    ],

    async execute(client, interaction) {
        const member = interaction.options.getUser("user");

        const embed = new MessageEmbed()
            .setColor("#8b81a5")
            .setDescription(`<@${interaction.member.id}> has hugged <@${member.id}>`)
            .setImage(
                client.getRandomArrayElement(
                    [
                        "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
                        "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                        "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
                        "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
                        "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
                        "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
                        "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
                        "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
                        "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                        "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
                        "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
                        "https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif",
                    ]
                )
            );

        await interaction.reply({ content: `<@${member.id}>`, embeds: [embed] });
    },
};