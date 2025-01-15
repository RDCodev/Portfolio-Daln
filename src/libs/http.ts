type HttpMethod = "get" | "post" | "put" | "delete";

interface Builder<P> {
  builder         : ()                                      => Builder<P> | HttpRequestBuilder<P>;
  method          : (method: HttpMethod)                    => Builder<P> | HttpRequestBuilder<P>;
  headers         : (headers: Record<string, string>)       => Builder<P> | HttpRequestBuilder<P>;
  params          : (params: Record<string, string>)        => Builder<P> | HttpRequestBuilder<P>;
  body            : (payload: P)                            => Builder<P> | HttpRequestBuilder<P>;
  url             : (url: string)                           => Builder<P> | HttpRequestBuilder<P>;
  build           : ()                                      => HttpRequest<P>;
}

class HttpRequest<P> {
  
  private _url     !: Required<URL>;
  private _method   : HttpMethod                      = "get";
  private _body     : unknown | null                  = null;
  private _headers  : Headers | null                  = null;
  private _params   : URLSearchParams | null          = null;

  public async fetch(url?: string): Promise<P> {

    const res = await fetch(
      this.parseUrl(url ?? this.url, this.params),
      {
        method: this.method,
        headers: this.headers ?? undefined,
      }
    );

    const data = await res.json();

    return (data as P);
  }

  private parseUrl(url: URL | string, params?: URLSearchParams | null) {

    if (typeof url === "string") url = new URL(url);

    if (!params) return url;

    for (const [key, value] of params.entries()) {
      url.searchParams.append(key, value);
    }

    return url;
  }

  public set url(url: Required<URL | string>) {
    this._url = new URL(url);
  }

  public get url() {
    return this._url;
  }

  public set method(method: HttpMethod) {
    this._method = method;
  }

  public get method() {
    return this._method;
  }

  public set body(body: unknown | null) {
    this._body = body;
  }

  public get body() {
    return this._body;
  }

  public set headers(headers: Headers | null) {
    this._headers = headers;
  }

  public get headers() {
    return this._headers;
  }

  public set params(params: URLSearchParams | null) {
    this._params = params;
  }

  public get params() {
    return this._params;
  }

};

export class HttpRequestBuilder<P> implements Builder<P> {
  
  public httpRequest   !: HttpRequest<P>;

  constructor() { this.builder(); }

  public builder() {
    this.httpRequest = new HttpRequest();
    return this;
  };

  public headers(headers: Record<string, string>) {
    const reqHeaders = new Headers();

    for (const [key, value] of Object.entries(headers)) 
      reqHeaders.append(key, value)

    this.httpRequest.headers = reqHeaders;

    return this;
  }

  public params(params: Record<string, string>) {
    this.httpRequest.params = new URLSearchParams(params);

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

  public build() {

    const http = this.httpRequest;

    this.builder();

    return http;
  }
}