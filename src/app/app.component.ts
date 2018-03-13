import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  post ={
    title: "Title",
    isFavorite:true
  }


  like={
    isLiked:"true"
  }
  onFavoriteChanged(eventArgs){
    console.log("************ Favorite changed", eventArgs);
  }
}
