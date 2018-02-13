import { Quote } from "../../model/quote";
import * as QuoteActions from "./quotes.actions";

export interface State {
    quotes:Quote [],
    background:boolean
}
const initialState :  State = {
    quotes: [],
    background: false

}

export function quotesReducer(state: State = initialState, action: QuoteActions.QuoteActions) {
    

    switch (action.type){
        case ((QuoteActions.ADDQUOTE)):
            state.quotes.push(action.payload);

            return {
                ...state,
                quotes: state.quotes
            };
        case ((QuoteActions.ADDBACKGROUND)):
            return {
                ...state,
                background: true
            };
        case ((QuoteActions.REMOVEBACKGROUND)):
            return {
                ...state,
                background: false
            };
        case ((QuoteActions.DELETEQUOTE)):
            const quotesFinal= state.quotes.filter(
                (quoteEl: Quote) => {
                    return quoteEl.id != action.payload.id;
                }
            );
            return {    
                ...state,
                quotes: quotesFinal
                
            };

        default:
            return state;
    }
    
}