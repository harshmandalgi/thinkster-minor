import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  test = 'abcd';
  posts=[];
  angular: any;
  constructor(private _http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    


    this._http.get('http://localhost:3000/api/contacts')
      .map(res => res.json())
      .subscribe( contact => { //add the contact if successfully added into DB
        this.posts.push(contact);
      });

  
}

getUrl(post)
{
  return this.sanitizer.bypassSecurityTrustResourceUrl('https://'+ post.url +'/');
}

}