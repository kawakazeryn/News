import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	articles : any;
  constructor(public navCtrl: NavController, private articlesProvider:ArticlesProvider) {
  	this.showPublicArticles();
  }

 showPublicArticles() {
 	this.articlesProvider.getArticles("top-headlines?country=id").subscribe(news => {
     this.articles = news['articles'];
     console.log(this.articles);
   });
 }

}
