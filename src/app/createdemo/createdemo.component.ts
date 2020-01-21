import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';


@Component({
  selector: 'app-createdemo',
  templateUrl: './createdemo.component.html',
  styleUrls: ['./createdemo.component.css']
})
export class CreatedemoComponent implements OnInit {
  objpost = Post;

  constructor(private api: ApiService) { }

  ngOnInit() {
const opost = new Post();
opost.body = 'new body is created';
opost.title = 'this is new title';
opost.userId = '007';
this.api.post(opost).subscribe ( data => { this.objpost = data; });

  }

}
