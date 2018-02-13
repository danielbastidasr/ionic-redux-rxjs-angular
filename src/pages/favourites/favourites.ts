import { Component } from "@angular/core";
import { Quote } from "../../model/quote";
import { QuotesService } from "../../services/quotes";
import { ModalController } from "ionic-angular";
import { Observable } from "rxjs";
import { QuotePage } from "../quote/quote";

@Component({
    selector: 'page-favourites',
    templateUrl: 'favourites.html'
  })
  export class FavouritesPage {
    quotes: Observable<Quote[]>;
  
    constructor(private quotesService: QuotesService,
                private modalCtrl: ModalController) {
    }
  
    ionViewWillEnter() {
      this.quotes = this.quotesService.getFavoriteQuotes();
    }
  
    onViewQuote(quote: Quote) {
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      modal.onDidDismiss((remove: boolean) => {
        if (remove) {
          this.onRemoveFromFavorites(quote);
        }
      });
    }
  
    onRemoveFromFavorites(quote: Quote) {
      this.quotesService.removeQuoteFromFavorites(quote);
    }
  
    isAltBackground():Observable<boolean> {
      return this.quotesService.isAltBackground();
    }
  }