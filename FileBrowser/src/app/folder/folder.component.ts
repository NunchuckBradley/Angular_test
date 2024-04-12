import { Component, OnInit } from '@angular/core';
import { UrlBuilder, QueryStringParameters } from '../classes/url-builder';
import { Constants } from '../constants';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  constructor(private constants: Constants, private api: ApiService) { }

  ngOnInit(): void {
  }

  testFunction() {
    console.log("testing");

    let action: string = "users"
    let urlBuilder: UrlBuilder = new UrlBuilder(action);
    urlBuilder.queryString.push('id', 'foo');
    urlBuilder.queryString.push('name', 'bar');

    console.log(urlBuilder.toString());

    this.api.runAjax(urlBuilder.toString()).subscribe(res => {
      console.log(res);
    });
  }

  testUpdate() {
    let settings: object = {
      call: "post",
      body: {
        user: "martin extra"
      }
    }
    let urlBuilder: UrlBuilder = new UrlBuilder("user");
    this.api.runAjax(urlBuilder.toString(), settings).subscribe(res => {
      console.log(res);
    });
  }

}
