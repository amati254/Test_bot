const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
    token: process.env.Page_token || '',
    verify: process.env.verify || '',
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
    let text = payload.message.text;

    reply({ text: 'This is me :)' }, function(err) {
        if (err) console.log(err);
    });
});

let port = process.env.PORT || 3000;
http.createServer(bot.middleware()).listen(port);