import ParseJSON from "../../src/actions/ParseJSON";
import Feature from "../../src/entity/feature";

describe("Parse JSON", () => {
    const name = "Create Feature";
    const description = "description";
    const json = [{
        keyword:  "Feature",
        name,
        description,
    }];
    test("happy path", () => {
        const parseJSON = new ParseJSON();
        const list: Feature[] = parseJSON.parse(json);
        const feature = list[0];

        expect(feature.getTitle()).toBe(name);
        expect(feature.getMarkdown()).toContain(description);
    });
});
