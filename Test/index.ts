import { Plugin } from "aliucord/entities";
import { MessageActions, GuildMemberStore } from 'aliucord/metro';

export default class AtSomeone extends Plugin {
    public async start() {

        this.commands.registerCommand({
            name: "test",
            description: "Plugin test",
            options: [],
            execute(_, ctx) {
                MessageActions.sendMessage(ctx.channel.id, {content: `Hola`})
            }
        });
    }
}
