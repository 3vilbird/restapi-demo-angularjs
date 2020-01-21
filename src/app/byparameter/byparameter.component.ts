import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-byparameter',
  templateUrl: './byparameter.component.html',
  styleUrls: ['./byparameter.component.css']
})
export class ByparameterComponent implements OnInit {
  objbypara: Post[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getbyid().subscribe(data => {this.objbypara = data; } );

  }

}
