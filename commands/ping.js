const { client, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with bot ping!'),
	async execute(interaction, client) {
		const m = await interaction.reply({ content: 'Pinging...', fetchReply: true});
		interaction.editReply(`Ping: ${m.createdTimestamp - interaction.createdTimestamp}ms`)
	},
};