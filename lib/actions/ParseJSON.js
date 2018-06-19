"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feature_1 = __importDefault(require("../entity/feature"));
class ParseJSON {
    parse(json) {
        const features = [];
        json.forEach((data) => {
            const feature = new feature_1.default(data.name);
            feature.addDescription(data.description);
            features.push(feature);
        });
        return features;
    }
}
exports.default = ParseJSON;
//# sourceMappingURL=ParseJSON.js.map