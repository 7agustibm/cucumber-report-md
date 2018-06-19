import Feature from "../../src/entity/feature";
import EmptyTitle from "../../src/entity/emptyTitle";

describe("Feature",  () => {
    const title = "demo";

    test("create Feature", () => {
        const feature = new Feature(title);
        expect(feature.getTitle()).toBe(title);
    });

    test("generate markdown title", () => {
        const feature = new Feature(title);
        expect(feature.getMarkdown()).toBe("# " + title + "\n");
    });

    test("empty title", () => {
        expect(() =>  new Feature("")).toThrowError(EmptyTitle);
    });

    test("null title", () => {
        expect(() =>  new Feature(null as any)).toThrowError(EmptyTitle);
    });

    test("undefined title", () => {
        expect(() =>  new Feature(undefined as any)).toThrowError(EmptyTitle);
    });

    test("add description", () => {
        const description = "As a ...";
        const feature = new Feature(title);
        feature.addDescription(description);
        expect(feature.getMarkdown()).toBe("# " + title + "\n" + description);
    });
});
