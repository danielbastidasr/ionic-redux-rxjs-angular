import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducers';
import * as fromQuotes from './quotes/quotes.reducers'

export interface AppState {
    auth: fromAuth.State,
    quotes: fromQuotes.State
}

export const ReducersApp: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    quotes: fromQuotes.quotesReducer
};