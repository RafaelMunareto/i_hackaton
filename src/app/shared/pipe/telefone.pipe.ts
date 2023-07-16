import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
  standalone: true,
})
export class TelefonePipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): unknown {
    value = String(value);
    return `(${value.substring(0, 2)}) ${value.substring(
      2,
      7
    )}-${value.substring(7)}`;
  }
}
