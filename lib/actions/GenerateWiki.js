"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateWiki {
    constructor(createFile) {
        this.createFile = createFile;
    }
    create(features) {
        features.forEach(this.createFileAndSave());
    }
    createFileAndSave() {
        return (feature) => this.createFile.save(feature.getTitle(), feature.getMarkdown());
    }
}
exports.default = GenerateWiki;
//# sourceMappingURL=GenerateWiki.js.map