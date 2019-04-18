import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http} from '@angular/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
posts=[];
  constructor(private _http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._http.get('http://localhost:3000/api/contacts1')
      .map(res => res.json())
      .subscribe( contact => { //add the contact if successfully added into DB
        this.posts.push(contact);
      });
       console.log(this.posts[0].length); 
    
  }

  getUrl(post)
{
  return this.sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/'+ post.url +'/');
}

}
