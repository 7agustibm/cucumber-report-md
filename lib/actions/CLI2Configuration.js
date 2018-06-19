"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CLI2Configuration {
    generate(cliArgs) {
        let path = "doc";
        let file = "cucumber.json";
        for (let i = 0, len = cliArgs.length; i < len; i++) {
            switch (cliArgs[i]) {
                case "--path":
                    i++;
                    path = cliArgs[i];
                    break;
                case "--json":
                    i++;
                    file = cliArgs[i];
                    break;
            }
        }
        return { path, file };
    }
}
exports.default = CLI2Configuration;
//# sourceMappingURL=CLI2Configuration.js.map