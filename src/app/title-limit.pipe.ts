import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleLimit'
})
export class TitleLimitPipe implements PipeTransform {

  transform(value: string, limit: number, after: string): unknown {
    return value.slice(0, limit) + after;
  }

}
