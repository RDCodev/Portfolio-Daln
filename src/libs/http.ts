export type HttpMethod = "get" | "post" | "put" | "delete";

export interface Builder<P> {
  builder         : ()                                      => Builder<P>;
  method          : (method: HttpMethod)                    => Builder<P>;
  headers         : (headers: Record<string, string>)       => Builder<P>;
  params          : (params: Record<string, string>)        => Builder<P>;
  body            : (payload: P)                            => Builder<P>;
  url             : (url: string)                           => Builder<P>;
  build           : ()                                      => HttpRequest<P>;
}

export class HttpRequest<P> {
  
  public url     !: Required<string>;
  public method   : HttpMethod                      = "get";
  public body     : P | null                        = null;
  public headers  : Record<string, string> | null   = null;
  public params   : Record<string, string> | null   = null;

  public request(url?: string) {
    return fetch(url ?? this.url)
  }
};

export class HttpRequestBuilder<P> implements Builder<P> {
  
  public httpRequest   !: HttpRequest<P>;

  constructor() { this.builder(); }

  public build() {
    return this.httpRequest;
  }

  public builder() {
    this.httpRequest = new HttpRequest();
    return this;
  };

  public headers(headers: Record<string, string>) {
    this.httpRequest.headers = headers;
    return this;
  }

  public params(params: Record<string, string>) {
    this.httpRequest.params = params;
    return this;
  }

  public body(body: P) {
    this.httpRequest.body = body;
    return this;
  }

  public url(url: string) {
    this.httpRequest.url = url;
    return this;
  }

  public method(method: HttpMethod) {
    this.httpRequest.method = method;
    return this;
  };
}

const http = new HttpRequestBuilder()
  .builder()
  .url("https://jsonplaceholder.typicode.com/posts/1")
  .build();

const response = await http.request();

response.json();