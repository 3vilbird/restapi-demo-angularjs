import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Comments } from '../comments';
import { MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    dataSource: Comments;


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getcomments().subscribe
    (
      data => {
        this.dataSource = data;
      }

    );

  }

}
