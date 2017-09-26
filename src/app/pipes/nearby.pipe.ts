//this pipe will get nearby spots in the same city
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'nearby'})

export class NearbyPipe implements PipeTransform {
  transform(value: any, args: any[], addition1: string, id: number): any[] {
    if (!value) return value;
    // this will filter for the spots in the same city and has a diffrent id
    value = value.filter(item => item.city == addition1 && item.id != id);

    return value

  }
}
