import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

export const  filterArticle =(value: Article[], keyword: string):Article[] => {
  if (!value || !keyword) {
    return value;
  }
  return value.filter(article => article.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
}

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(value: Article[], keyword: string):Article[] {
    return filterArticle(value, keyword);
  }

}
