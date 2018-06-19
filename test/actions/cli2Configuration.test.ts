import CLI2Configuration from "../../src/actions/CLI2Configuration";

describe("CLI2Configuration", () => {
    const jsonfile = "json";
    const path = "wiki";

    test("happy path", () => {
        const cliArgs = ["../node", "../index.js"];
        const cli2Configuration = new CLI2Configuration();
        const config = cli2Configuration.generate(cliArgs);
        expect(config.path).toBe("doc");
        expect(config.file).toBe("cucumber.json");
    });

    test("add path", () => {
        const cliArgs = ["../node", "../index.js", "--path", path];
        const cli2Configuration = new CLI2Configuration();
        const config = cli2Configuration.generate(cliArgs);
        expect(config.path).toBe(path);
    });

    test("load json file", () => {
        const cliArgs = ["../node", "../index.js", "--json", jsonfile];
        const cli2Configuration = new CLI2Configuration();
        const config = cli2Configuration.generate(cliArgs);
        expect(config.file).toBe(jsonfile);
    });

    test("add path and load json file", () => {
        const cliArgs = ["../node", "../index.js", "--json", jsonfile, "--path", path];
        const cli2Configuration = new CLI2Configuration();
        const config = cli2Configuration.generate(cliArgs);
        expect(config.file).toBe(jsonfile);
        expect(config.path).toBe(path);
    });
});
