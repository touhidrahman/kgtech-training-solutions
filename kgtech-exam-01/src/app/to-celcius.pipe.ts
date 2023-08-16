import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius'
})
export class ToCelciusPipe implements PipeTransform {

  transform(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
  }

}
