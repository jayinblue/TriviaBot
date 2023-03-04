const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('SAVE ME FROM MYSELF'),
	async execute(interaction) {
		const helpEmbed = new EmbedBuilder()
			.setColor('DarkVividPink')
			.setTitle('**GAME STARTED**')
			.setDescription('*i hate discordjs*')

	await interaction.reply({ embeds: [helpEmbed], components: [row] });
	},
};