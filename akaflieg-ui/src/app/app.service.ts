import {Injectable} from '@angular/core';
import {Response, Headers, RequestOptions, Http} from "@angular/http";

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  getAllNews(){
    return this.http.get("http://localhost:8080/news/test")
      .map((res: Response) => res.json())
  }

  addNewElement(header: string, body: string) {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    return this.http.post("http://localhost:8080/news/test",
      JSON.stringify({header: header, body: body}), options)
      .map((res: Response) => res.json());
  }

}
