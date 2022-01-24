import { Application, Router } from "../deps.ts";
import {IApp} from "../apps/App.ts";

export class Runner {
    router = new Router();
    port = 4242;
    apps: IApp[] = []

    public installApp(app: IApp) {
        this.apps.push(app);
    }

    public start() {
        console.log(`Starting linkyapps`);
        /*
        {
            app: "calendar",
            com: "createNewEvent",
            arg: {
                when: "2022-01-15T12:00:00Z",
                note: ""
            }
        }
         */

        this.router.post("/api/v1/command", (context) => {
            context.response.body = {
                success: true,
                msg: "Command",
            };
        });

        this.router.post("/api/v1/query", (context) => {
            context.response.body = {
                success: true,
                msg: "Query",
            };
        });

        const app = new Application();
        app.use(this.router.routes());
        app.use(this.router.allowedMethods());

        console.log(`Http server running on port ${this.port}`);

        app.listen(`127.0.0.1:${this.port}`);
    }
}