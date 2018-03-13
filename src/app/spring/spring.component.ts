import { Component, OnInit,Input } from '@angular/core';
import {SpringService} from "./spring.service";

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {
  title = "List of weathers";
  imageUrl = "https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg";
  colSpan =2;
  isActive = false;
@Input('is-liked') isLiked:boolean;

  onSave($event){
    console.log("********** Button was clicked");
  }
  address ="Meehan Drive";
  onkeyup(){
    {
      console.log(this.address);
    }


  }
  weathers;
    getTitle(){
    return this.title;
  }

  //make sure you inject service under providers in the app.module class
  constructor(service:SpringService) {

     this.weathers =service.getWeathers();
  }

  ngOnInit() {
  }


  course ={

      title: "The Complete Guide to Dubai",
      rating: 4.9745,
      students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)

  }

  onClick(){
      this.isLiked = !this.isLiked;

  }
}
