import Feature from "./entity/feature";
import CreateFileImp from "./actions/CreateFileImp";
import * as fs from "fs";
import GenerateWiki from "./actions/GenerateWiki";
import CLI2Configuration from "./actions/CLI2Configuration";
import ParseJSON from "./actions/ParseJSON";

const cliArgs = process.argv;
const cli2Configuration = new CLI2Configuration();
const config = cli2Configuration.generate(cliArgs);

const jsonString = fs.readFileSync(config.file).toString("UTF8");
const json = JSON.parse(jsonString);

const parseJSON = new ParseJSON();
const features: Feature[] = parseJSON.parse(json);

const createFile = new CreateFileImp(fs);
createFile.setPath(config.path);
const generate = new GenerateWiki(createFile);

generate.create(features);
