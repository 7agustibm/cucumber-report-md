"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emptyTitle_1 = __importDefault(require("./emptyTitle"));
class Feature {
    constructor(title) {
        this.title = "";
        this.setTitle(title);
        this.description = "";
    }
    getTitle() {
        return this.title;
    }
    getMarkdown() {
        return "# " + this.title + "\n" + this.description;
    }
    addDescription(description) {
        this.description = description;
    }
    checkTitle(title) {
        if (title === "" || title == null) {
            throw new emptyTitle_1.default();
        }
    }
    setTitle(title) {
        this.checkTitle(title);
        this.title = title;
    }
}
exports.default = Feature;
//# sourceMappingURL=feature.js.map