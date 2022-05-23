import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == null || value === '' || value !== value) return null;
    let time = ''
    let ms = parseInt(String(value), 10);
    let seconds = Math.floor(ms / 1000);
    ms -= seconds * 1000;
    //let seconds = parseInt(String(value), 10);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
    let days = Math.floor(hours / 24);
    hours -= days * 24;
    if (days > 0){
     time += days + ' Days ';
    }
    if (hours > 0) {
      time += hours + ' Hours ';
    }
    if (minutes > 0) {
      time += minutes + ' Minutes ';
    }
    if (seconds >= 0) {
      time += seconds + ' Seconds ';
    }
    /*if (ms > 0) {
      time += ms + ' ms';
    }*/

    return time;
  }

}
