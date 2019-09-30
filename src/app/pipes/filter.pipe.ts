import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultUsers = [];
    for (const user of value) {
      if (user.login.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUsers.push(user);
      };
    };
    return resultUsers;
  }
}
