import ICreateFile from "./ICreateFile";

export default class CreateFileImp implements ICreateFile {
    private fileSystem: any;
    private path: string = "";

    constructor(fileSystem: any) {
        this.fileSystem = fileSystem;
    }

    public save(title: string, content: string): void {
        this.createPathIfNotExist();
        const file = this.getFileName(title);
        this.fileSystem.writeFileSync(file, content);
    }

    public setPath(path: string): void {
        this.path = path;
    }

    private getFileName(title: string) {
        const path = this.path === "" ? this.path : this.path + "/";
        return path + title + ".md";
    }

    private createPathIfNotExist() {
        if (!this.fileSystem.existsSync(this.path)) {
            this.fileSystem.mkdirSync(this.path);
        }
    }
}
