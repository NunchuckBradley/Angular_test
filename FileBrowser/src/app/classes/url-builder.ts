// Application Classes
// import { QueryStringParameters } from './query-string-parameters';
import { Constants } from '../constants';

export class QueryStringParameters {
  private paramsAndValues: string[];
  constructor() {
    this.paramsAndValues = [];
  }
  public push(key: string, value: Object): void {
    value = encodeURIComponent(value.toString());
    this.paramsAndValues.push([key, value].join('='));
  }
  public toString = (): string => this.paramsAndValues.join('&');
}


export class UrlBuilder {
  public url: string;
  public queryString: QueryStringParameters;

  constructor(
    // private baseUrl: string,
    private action: string,
    queryString?: QueryStringParameters,
    private constants: Constants = new Constants()

  ) {
    let baseUrl: string = "http://" + this.constants.API_BASEPOINT+"/"+this.constants.API_ENDPOINT;
    this.url = [baseUrl, action].join('/');
    this.queryString = queryString || new QueryStringParameters();
  }

  public toString(): string {
    const qs: string = this.queryString ?
                       this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }

  public buildUrl(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ) {
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(this.queryString);
    }
    return this.toString();
  }
}
