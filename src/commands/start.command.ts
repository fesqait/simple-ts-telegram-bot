import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        // this.bot.command('start')
        this.bot.start(async (ctx) => {
            console.log(ctx.session)
            ctx.reply('Did u like ...?', Markup.inlineKeyboard([
                [Markup.button.callback("yes!", 'smth_like')],
                [Markup.button.callback("no!", 'smth_dislike')]

            ]));
        });
        this.bot.action('smth_like', async (ctx) => {
            ctx.session.courseLike = true;
            ctx.editMessageText('cool!');
        })
        this.bot.action('smth_dislike', async (ctx) => {
            ctx.session.courseLike = false;
            ctx.editMessageText('ok ;(');
        })
    }

}