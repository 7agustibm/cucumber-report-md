import Feature from "../../src/entity/feature";
import ICreateFile from "../../src/actions/ICreateFile";
import GenerateWiki from "../../src/actions/GenerateWiki";

describe("Generate Wiki", () => {
    const title: string = "title";
    const feature: Feature = new Feature(title);
    const listFeatures: Feature[] = [feature];

    test("happy path", () => {
       const createFile: ICreateFile = {
           save: jest.fn(),
           setPath: jest.fn(),
       } as ICreateFile;

       const wiki = new GenerateWiki(createFile);
       wiki.create(listFeatures);

       expect(createFile.save).toHaveBeenCalledWith(feature.getTitle(), feature.getMarkdown());
   });
});
