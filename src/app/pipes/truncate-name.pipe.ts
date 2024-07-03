import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLength: number = 30, ellipsis: string = "..."): unknown {
    if(value.length > maxLength){
      return value.slice(0, maxLength) + ellipsis; //Slice the name to the maxLength and add the ellipsis
    }

    return value;
  }

}
