import { Context, Scenes } from "telegraf";

export interface ISessionData {
    courseLike: boolean;
    name: string;
}

export interface IBotContext extends Context {
    session: ISessionData;
    
}


// export interface IBotContext extends IFBotContext {
//     session: ISessionData;
//     scene: Scenes.SceneContextScene<IBotContext>;
//     wizard: Scenes.WizardContextWizard<IBotContext>;
    
// }



