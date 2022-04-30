# Currently not finished

# Discord.js v13 Template

A simple discord.js v13 template

# Installation

**Node.js 14.6.0 or newer is required.**

```js
npm install discord.js
```


# More Examples

```js
const { Client } = require("discord.js")
const client = new Client();
const prefix = "djs!";

client.on("ready", async () => {
  client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "with discord.js v13",
                type: "PLAYING"
            }
        ]
    });
    
  console.log(`[ API ] Logged in as ${client.user.tag}`);
});


client.login("your bot token here");
```

# Application Command Option Type

NAME	VALUE	NOTE
SUB_COMMAND	1	
SUB_COMMAND_GROUP	2	
STRING	3	
INTEGER	4	Any integer between -2^53 and 2^53
BOOLEAN	5	
USER	6	
CHANNEL	7	Includes all channel types + categories
ROLE	8	
MENTIONABLE	9	Includes users and roles
NUMBER	10	Any double between -2^53 and 2^53
ATTACHMENT	11	attachment object

## Application Command Option Type:
(link)[https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type]