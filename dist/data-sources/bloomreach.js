import { RESTDataSource } from "@apollo/datasource-rest";
export class BloomreachAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://developers.bloomreach.io/delivery/site/v1/";
    }
    async getPage(path) {
        return this.get(`channels/test-channel/pages/${path}`);
    }
}
