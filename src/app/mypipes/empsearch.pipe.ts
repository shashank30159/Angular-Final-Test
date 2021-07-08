import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empsearch'
})
export class EmpsearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const empArray = [];
    for (const employee of value) {
      if (employee.empName.includes(filteredString)) {
        empArray.push(employee);
      }
    }
    return empArray;
  }

}
