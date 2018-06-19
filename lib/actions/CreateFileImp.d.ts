import CreateFile from "./CreateFile";
export default class CreateFileImp implements CreateFile {
    private fileSystem;
    private path;
    constructor(fileSystem: any);
    save(title: string, content: string): void;
    private getFileName;
    private createPathIfNotExist;
    setPath(path: string): void;
}
//# sourceMappingURL=CreateFileImp.d.ts.map