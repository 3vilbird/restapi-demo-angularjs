import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';
import { FormControl } from '@angular/forms';
import { callbackify } from 'util';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  [x: string]: any;
  objPut = Post;


  constructor(private api: ApiService) { }

  ngOnInit() {
    const opost = new Post();
    opost.body = 'updating body';
    opost.title = 'updating tilte';
    opost.userId =  '78';
    this.api.put(opost).subscribe
    ( data => {
      this.objPut = data;

    }
    );
    console.log('soooooooooooooooooooooooooooomething');
    console.log(this.objPut);
  }

}
