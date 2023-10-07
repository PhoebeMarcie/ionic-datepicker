import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.page.html',
  styleUrls: ['./datepicker.page.scss'],
})
export class DatepickerPage implements OnInit {
  [x: string]: any;
modes=['date','date-time','month','month-year','time','time-date','year']
selectedMode = 'date';
showPicker= false;
dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
formattedString='';

  constructor() {
    this.setToday();
   }

  ngOnInit() {
  }

  setToday(){
this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),'MMM d ,yyyy')
  }
  dateChanged(value: any)
{
  this.formattedString = format(parseISO(value),'MMM d ,yyyy')
  this.dateValue = value;
  this.showPicker =false;
  console.log(this.dateValue);
  console.log(value);


  console.log(this.formattedString);
}

// close(){
//   this['datetime'].cancel(true);
// }
// select(){
//  this['datetime'].confirm(true);
// }
}
