const Discord = require('discord.js');

module.exports = {
    name: 'The name of the embed',
    description: 'Embeds!',
    execute(message, args, Disocrd) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('The Hex color for your embed')
            .setTitle('What title you want')
            .addFields(
                {name: '!ping', value: 'sending pong'}, //You can edit this however you want
            )

            message.channel.send(newEmbed);

    }


}
