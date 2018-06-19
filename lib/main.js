"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateFileImp_1 = __importDefault(require("./actions/CreateFileImp"));
const fs = __importStar(require("fs"));
const GenerateWiki_1 = __importDefault(require("./actions/GenerateWiki"));
const CLI2Configuration_1 = __importDefault(require("./actions/CLI2Configuration"));
const ParseJSON_1 = __importDefault(require("./actions/ParseJSON"));
const cliArgs = process.argv;
const cli2Configuration = new CLI2Configuration_1.default();
const config = cli2Configuration.generate(cliArgs);
const jsonString = fs.readFileSync(config.file).toString("UTF8");
const json = JSON.parse(jsonString);
const parseJSON = new ParseJSON_1.default();
const features = parseJSON.parse(json);
const createFile = new CreateFileImp_1.default(fs);
createFile.setPath(config.path);
const generate = new GenerateWiki_1.default(createFile);
generate.create(features);
//# sourceMappingURL=main.js.map