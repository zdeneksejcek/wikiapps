import { Runner } from "./server/runner.ts";
import {Core} from "./apps/core/core.ts";

const runner = new Runner();
runner.installApp(new Core())
runner.start();

// domain: cloudapp.wiki
// domain: wikiapps.dev
// domain: linkyapps.com

/*
    one POST command for all features
*/

/*
    Server Engine
    * shared Deno module
    * configurable
*/

/*
    object address
    object query
 */

