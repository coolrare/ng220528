import { filterArticle, FilterArticlePipe } from './filter-article.pipe';
import { ArticlesService } from './articles.service';
import { Article } from './article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterArticlePipe]
})
export class AppComponent implements OnInit {
  title = 'conduit 20220528';
  subTitle = 'A place to share your <u>knowledge</u>.';
  keyword = '';

  // articles: Article[] = this.articlesService.articles;
  // get articles(): Article[] {
  //   return this.articlesService.articles;
  // }
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService, private filterArticlePipe: FilterArticlePipe) { }

  ngOnInit() {
    this.articlesService.queryArticles('').subscribe(result => {
      this.articles = result.articles;
    });
  }


  searchArticle(keyword: string) {
    // console.log(keyword);
    // this.articles = this.originalArticles.filter(article => article.title.indexOf(keyword) !== -1);
    // this.articlesService.searchArticle(keyword);
    this.articlesService.queryArticles(keyword).subscribe(result => {
      this.articles = result.articles;
      // this.articles = filterArticle(this.articles, keyword);
      // this.articles = this.filterArticlePipe.transform(this.articles, keyword);
    });
  }
}
