"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFileImp {
    constructor(fileSystem) {
        this.path = "";
        this.fileSystem = fileSystem;
    }
    save(title, content) {
        this.createPathIfNotExist();
        const file = this.getFileName(title);
        this.fileSystem.writeFileSync(file, content);
    }
    getFileName(title) {
        const path = this.path === "" ? this.path : this.path + "/";
        return path + title + ".md";
    }
    createPathIfNotExist() {
        if (!this.fileSystem.existsSync(this.path)) {
            this.fileSystem.mkdirSync(this.path);
        }
    }
    setPath(path) {
        this.path = path;
    }
}
exports.default = CreateFileImp;
//# sourceMappingURL=CreateFileImp.js.map