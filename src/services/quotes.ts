import { Quote } from "../model/quote";
import { Store } from "@ngrx/store";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../store/app.reducers';
import * as fromQuoteActions from '../store/quotes/quotes.actions';
import * as fromQuote from '../store/quotes/quotes.reducers';
import { Injectable } from "@angular/core";

@Injectable()

export class QuotesService {
    
    constructor(private store: Store<fromApp.AppState>){}
  
    addQuoteToFavorites(quote: Quote) {
        this.store.dispatch(new fromQuoteActions.AddQuote(quote));
    }
  
    removeQuoteFromFavorites(quote: Quote) {
        this.store.dispatch(new fromQuoteActions.DeleteQuote(quote));
    }
  
    getFavoriteQuotes(): Observable<Quote[]> {
        return this.store.select('quotes').map(
            (quoteState:fromQuote.State)=>{
                return quoteState.quotes;
            }
        );
    }
  
    isQuoteFavorite(quote: Quote): Observable<boolean> {
        return this.store.select('quotes').map(
            (quoteState: fromQuote.State)=>{

                let quoteFound = quoteState.quotes.find(
                    (quoteItem:Quote) =>{
                        return quoteItem.id == quote.id;
                    }, null
                );
                
                return quoteFound!=null;
            }
        );
    }

                    /** SETTINGS**/
    /** INTERACTING WITH THE BACKGROUND COLOR OPTION**/
    
    setBackground(isAlt: boolean) {
        if(isAlt){
            this.store.dispatch(new fromQuoteActions.AddBackground());
        }
        else this.store.dispatch(new fromQuoteActions.RemoveBackground());
      }
    
      isAltBackground(): Observable<boolean>  {
        return this.store.select('quotes').map(
            (quoteState: fromQuote.State)=>{
                return quoteState.background;
            }
        );
      }
  }
  