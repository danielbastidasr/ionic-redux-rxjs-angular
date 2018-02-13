import { Component, OnInit } from "@angular/core";
import { Quote } from "../../model/quote";
import { NavParams, AlertController } from "ionic-angular";
import { QuotesService } from "../../services/quotes";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
  })
  export class QuotesPage implements OnInit {
    quoteGroup: {category: string, quotes: Quote[], icon: string};
  
    constructor(
      private navParams: NavParams,
      private alertCtrl: AlertController,
      private quotesService: QuotesService) {}

    ngOnInit() {
      this.quoteGroup = this.navParams.data;
    }
  
    // ionViewDidLoad() {
    //   this.quoteGroup = this.navParams.data;
    // Add elvis operator (?) in template to use this approach
    // }
  
    onAddToFavorites(selectedQuote: Quote) {
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.quotesService.addQuoteToFavorites(selectedQuote);
            }
          },
          {
            text: 'No, I changed my mind!',
            role: 'cancel',
            handler: () => {
              console.log('Cancelled!');
            }
          }
        ]
      });
  
      alert.present();
    }
  
    onRemoveFromFavorites(quote: Quote) {
      this.quotesService.removeQuoteFromFavorites(quote);
    }
  
    isFavorite(quote: Quote):Observable<boolean> {
      return this.quotesService.isQuoteFavorite(quote);
    }
  }
  