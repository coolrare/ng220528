import { ArticlesService } from './articles.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderDemoComponent } from './header-demo/header-demo.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterArticlePipe } from './filter-article.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    TagsComponent,
    FooterComponent,
    HeaderDemoComponent,
    TableComponent,
    FilterArticlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
