const { ActionRowBuilder, Events, StringSelectMenuBuilder, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('Category')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Minecraft',
							description: 'Generate random questions related to Minecraft',
							value: 'minecraft',
						},
						{
							label: 'Animals',
							description: 'Do not select this one, it doesn\'t work',
							value: 'animals',
						},
					),

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('Start your trivia match!'),
	async execute(interaction) {
		const helpEmbed = new EmbedBuilder()
			.setColor('DarkVividPink')
			.setTitle('**Game started!**')
			.setDescription('Select a category from the menu below this message to start your game! Once it has started, you have thirty seconds to select each answer from a ten-question round.')

		await interaction.reply({ embeds: [helpEmbed], components: [row] });
  }
});