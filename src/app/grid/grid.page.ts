import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  page = '';
  resultsCount = 10;
  totalPages=10;
  data: any[] = [];
  bulkEdit= false;
  sortDirection = 0;
  sortKey= 0;
  constructor(private http: HttpClient) {
    this.loadData();
  }

  ngOnInit() {
  }
loadData() {
  this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe((res:any)=>{
    console.log('res_', res);
    this.data= res['results'];
    this.sort();
    console.log(this.data);

  });
}
sortBy(key: any){
  this.sortKey = key
  this.sortDirection++;
  this.sort();
}
sort(){
  if(this.sortDirection === 1){
this.data = this.data.sort((a,b)=>{
  const valA = a[this.sortKey];
  const valB = b[this.sortKey];
  return valA.localeCompare(valB);
});
  }
  else if  (this.sortDirection===2){
    this.data = this.data.sort((a,b)=>{
      const valA = a[this.sortKey];
      const valB = b[this.sortKey];
      return valB.localeCompare(valA);
    });
  }
  else{
    this.sortDirection= 0;
    this.sortKey = 0;
  }
}
toggleBulkEdit(){}
bulkDelete(){}
removeRow(index: any){
  this.data.splice(index, 1);
}
}
