import { ArticlesService } from './articles.service';
import { Article } from './article';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit 20220528';
  subTitle = 'A place to share your <u>knowledge</u>.';
  keyword = '';

  // articles: Article[] = this.articlesService.articles;
  get articles(): Article[] {
    return this.articlesService.articles;
  }

  constructor(private articlesService: ArticlesService) { }


  searchArticle(keyword: string) {
    // console.log(keyword);
    // this.articles = this.originalArticles.filter(article => article.title.indexOf(keyword) !== -1);
    this.articlesService.searchArticle(keyword);
  }
}
