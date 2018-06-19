export default class CLI2Configuration {

    public generate(cliArgs: string[]): any {
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

        return {path, file};
    }
}
