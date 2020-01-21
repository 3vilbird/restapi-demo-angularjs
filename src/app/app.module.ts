import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { AdduserComponent } from './adduser/adduser.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UpdatingComponent } from './updating/updating.component';
import { ByparameterComponent } from './byparameter/byparameter.component';
import { CreatedemoComponent } from './createdemo/createdemo.component';
import { DeletingComponent } from './deleting/deleting.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UpdatingComponent,
    ByparameterComponent,
    CreatedemoComponent,
    DeletingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    NgxPaginationModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
