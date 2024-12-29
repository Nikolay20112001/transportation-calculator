import { requestModel } from "./requestModel";

export class api {
  url: URL

  constructor(url: URL) {
    this.url = new URL(url)
  }

  calculatePrice(data: requestModel) {
    const _url = new URL(this.url.pathname + "/cost", this.url);
    for (const [k, v] of Object.entries(data)) {
      _url.searchParams.append(k.toString(), v.toString())
    }

    return fetch(_url)
    .then((res) => {
      if (res.ok) return res.json();
      else return Promise.reject(res.status);
    })
  }
}

