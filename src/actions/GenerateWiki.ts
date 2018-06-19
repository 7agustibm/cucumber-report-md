import Feature from "../entity/feature";
import ICreateFile from "./ICreateFile";

export default class GenerateWiki {
    private createFile: ICreateFile;

    constructor(createFile: ICreateFile) {
        this.createFile = createFile;
    }

    public create(features: Feature[]) {
        features.forEach(this.createFileAndSave());
    }

    private createFileAndSave() {
        return (feature: Feature) => this.createFile.save(feature.getTitle(), feature.getMarkdown());
    }
}
