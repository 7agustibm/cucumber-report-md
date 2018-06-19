import EmptyTitle from "./emptyTitle";

export default class Feature {
    private title: string = "";
    private description: string;

    constructor(title: string) {
        this.setTitle(title);
        this.description = "";
    }

    public getTitle(): string {
        return this.title;
    }

    public getMarkdown(): string {
        return "# " + this.title + "\n" + this.description;
    }

    public addDescription(description: string): void {
        this.description = description;
    }

    private checkTitle(title: string) {
        if (title === "" || title == null) {
            throw new EmptyTitle();
        }
    }

    private setTitle(title: string) {
        this.checkTitle(title);
        this.title = title;
    }
}
