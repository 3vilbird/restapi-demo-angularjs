import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { Comments } from './comments';
import { MatPaginator, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


displayedColumns: string[] = ['id', 'username', 'email'];
oop: Comments[];
  //  dataSource = new MatTableDataSource(  );


@ViewChild(MatPaginator, {static: false} ) paginator: MatPaginator;
@ViewChild(MatPaginator , {static: false}) dataSource: MatTableDataSource<Comments>;



constructor(private api: ApiService) {}
ngOnInit() {

    // tslint:disable-next-line: no-unused-expression
    this.api.getcomments().subscribe
    (
      data => {
        this.dataSource = data;
      }

    );
    this.dataSource.paginator = this.paginator;
    }



}
