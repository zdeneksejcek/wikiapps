import {IApp, ILinkSchema, IObjectSchema} from "../App.ts"
import { Locale } from "../../common/Locale.ts"

export class Core implements IApp {
    public signature(_locale: Locale): string {
        return "Core";
    }

    public executeCommand() {

    }

    public executeQuery() {

    }

    linkSchemes(): ILinkSchema[] {
        return [];
    }

    objectSchemes(): IObjectSchema[] {
        return [];
    }
}