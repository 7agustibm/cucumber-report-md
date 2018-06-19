import ICreateFile from "../../src/actions/ICreateFile";
import CreateFileImp from "../../src/actions/CreateFileImp";

describe("Create File", () => {
    const title = "title";
    const content = "content";
    let fileSystem: any;
    let createFile: ICreateFile;

    beforeEach(() => {
        mockFileSystem();
        createFile = new CreateFileImp(fileSystem);
    });

    test("happy path", () => {
       createFile.save(title, content);

       expect(fileSystem.writeFileSync).toHaveBeenCalledWith(title + ".md", content);
    });

    test("set path", () => {
        const path = "path";
        createFile.setPath(path);
        createFile.save(title, content);

        expect(fileSystem.writeFileSync).toHaveBeenCalledWith(path + "/" + title + ".md", content);
    });

    test("create path", () => {
        const path = "path";
        fileSystem.existsSync.mockReturnValue(false);
        createFile.setPath(path);
        createFile.save(title, content);

        expect(fileSystem.mkdirSync).toHaveBeenCalledWith(path);
    });

    const mockFileSystem = () => {
        fileSystem = {
            writeFileSync: jest.fn(),
            existsSync: jest.fn(),
            mkdirSync: jest.fn(),
        };
        fileSystem.existsSync.mockReturnValue(true);
    };
});
