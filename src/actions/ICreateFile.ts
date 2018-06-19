export default interface ICreateFile {
    save(title: string, content: string): void;

    setPath(path: string): void;
}
