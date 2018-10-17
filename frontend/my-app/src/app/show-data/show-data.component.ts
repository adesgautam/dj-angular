import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  data: any
  private req: any
  url: string = '/getData/'

  constructor(private http:Http) { }

  ngOnInit() {
  	this.req = this.http.get(this.url).subscribe(data => {
      console.log(data.json())
      this.data = data.json() as [any]
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}
