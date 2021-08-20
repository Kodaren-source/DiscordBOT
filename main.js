const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const { execute } = require('./commands/ping');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('This bot is ready');
    client.user.setActivity("", { //What ever status you want
        type: "PLAYING" //You can edit this to PLAYING, LISTENING, WATCHING

    })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'command') {

        client.commands.get('command').execute(message, args, Discord);
    }

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    
    
    
    
    
    
    
    });



    client.login('Your Token (Find it on https://discord.com/developers/applications)');
