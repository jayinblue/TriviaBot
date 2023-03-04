const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lists all of the commands TriviaBot has!'),
	async execute(interaction) {
		const helpEmbed = new EmbedBuilder()
			.setColor('Aqua')
			.setTitle('**Trivia\'s Command List**')
			.setDescription('L you thought there was something here?')
			.setTimestamp()

	await interaction.reply({ embeds: [helpEmbed] });
	},
};