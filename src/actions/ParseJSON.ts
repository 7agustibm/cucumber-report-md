import Feature from "../entity/feature";

export default class ParseJSON {

    public parse(json: any[]): Feature[] {
        const features: Feature[] = [];
        json.forEach( (data: any) => {
            const feature = new Feature(data.name);
            feature.addDescription(data.description);
            features.push(feature);
        });
        return features;
    }
}
