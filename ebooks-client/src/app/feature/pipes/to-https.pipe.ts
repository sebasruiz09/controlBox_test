import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHttps',
})
export class ToHttpsPipe implements PipeTransform {
  transform(value: string | undefined): string  {
    return value?.replace('http', 'https') ?? '';
  }
}
