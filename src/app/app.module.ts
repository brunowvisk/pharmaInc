import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {MatNativeDateModule} from '@angular/material/core';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './data/services/api-service.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ModalDetailsComponent } from './components/modal-details/modal-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableFilterModule } from 'mat-table-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ModalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableFilterModule,
    Ng2SearchPipeModule,
    DragDropModule

  ],
  exports: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
    
  ],


  providers: [HttpClientModule, ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

