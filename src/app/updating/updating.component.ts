import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.css']
})
export class UpdatingComponent implements OnInit {
  objpatch: Post;

  constructor(private api: ApiService) { }

  ngOnInit() {
    const opost = new Post();
    opost.title = 'title is patched';
    this.api.patch(opost).subscribe(data => {this.objpatch = data; } );



  }

}
