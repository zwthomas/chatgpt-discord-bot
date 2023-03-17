const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gpt')
		.setDescription('Ask ChatGPT')
		.addStringOption(option => option.setName("prompt").setDescription("Prompt to ChatGPT").setRequired(true)),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		let response = await GPT.ask(interaction.options.getString("prompt")) 
		console.log(response)
		await interaction.reply(response);

	},
};