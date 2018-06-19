import {After, Given, Then, When} from "cucumber";
import Feature from "../../src/entity/feature";
import GenerateWiki from "../../src/actions/GenerateWiki";
import * as fs from "fs";
import CreateFileImp from "../../src/actions/CreateFileImp";
import { expect } from "chai";
import rimraf = require("rimraf");

let features: Feature[];

After( () => new Promise ((resolve) => rimraf("wiki", resolve)));

Given(/^feature Demo$/, () => features = [new Feature("Demo")]);

When( /^run app$/, () => {
    const createFile = new CreateFileImp(fs);
    createFile.setPath("wiki");
    const generate = new GenerateWiki(createFile);

    generate.create(features);
});
Then( /^have a directory$/, () => expect(fs.existsSync("wiki")).to.equal(true));
Then( /^the demo feature file$/, () => expect(fs.existsSync("wiki/Demo.md")).to.equal(true));
