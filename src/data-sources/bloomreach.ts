import { RESTDataSource } from "@apollo/datasource-rest";

export class BloomreachAPI extends RESTDataSource {
  override baseURL = "https://developers.bloomreach.io/delivery/site/v1/";

  async getPage(path: string): Promise<any> {
    return this.get<any>(`channels/test-channel/pages/${path}`);
  }
}
