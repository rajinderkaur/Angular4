import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  /*user @Input() to mark properties as input properties*/
  @Input('is-favorite') isFavorite: boolean;

 //use eventemitter class when you want to notify that something changed. You can use any output value and use same value is html also
  @Output() changetest = new EventEmitter();
  constructor() { }


  onClick(){
    this.isFavorite =!this.isFavorite;
    /*passing object in event*/
    this.changetest.emit({newValue :this.isFavorite});
  }

}
