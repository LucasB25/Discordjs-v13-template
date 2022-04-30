# Currently not finished

# Installation

**Node.js 14.6.0 or newer is required.**

```js
npm i
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

## Application Command Option Type:

![image](https://user-images.githubusercontent.com/50886682/166117079-b780761d-f7a8-4266-a431-73e3e74f6c06.png)

