import { Action } from "@ngrx/store";
import { Quote } from "../../model/quote";


export const ADDQUOTE = 'ADDQUOTE';
export const DELETEQUOTE = 'DELETEQUOTE';
export const ADDBACKGROUND = 'ADDBACKGROUND';
export const REMOVEBACKGROUND = 'REMOVEBACKGROUND';

export class AddQuote implements Action {
    readonly type = ADDQUOTE;
    constructor(public payload: Quote){}
}

export class DeleteQuote implements Action {
    readonly type = DELETEQUOTE;
    constructor(public payload: Quote){}
}

export class AddBackground implements Action {
    readonly type = ADDBACKGROUND;
}
export class RemoveBackground implements Action {
    readonly type = REMOVEBACKGROUND;
}


export type QuoteActions = AddQuote | DeleteQuote | AddBackground | RemoveBackground ;