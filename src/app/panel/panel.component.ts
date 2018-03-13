import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  constructor() { }
  panels =[1,2]
  viewMode ='map';

  employees =[

    {id:1, name: 'Raji'},
    {id:2, name: 'Armaan'},
    {id:3, name: 'DP'},
    {id:4, name: 'Alia'}

  ];

  onAdd(){

    this.employees.push({id:5, name: 'Sophia'});
  }

  onRemove(emp){
    let index = this.employees.indexOf(emp);
    this.employees.splice(index,1)
  }

  onChange(emp){
    emp.name = 'UPDATED';
  }

  task={
    title:"Review",
    assignee:{
      name: 'Raji'
    }
  }
}
