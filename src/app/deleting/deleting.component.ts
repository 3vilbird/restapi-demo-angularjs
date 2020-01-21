import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-deleting',
  templateUrl: './deleting.component.html',
  styleUrls: ['./deleting.component.css']
})
export class DeletingComponent implements OnInit {
  message: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.delete().subscribe( data => {this.message =  'data has been deleted successfully'; } );
  }

}
