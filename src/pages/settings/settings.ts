import { Component, OnInit } from "@angular/core";
import { Toggle } from "ionic-angular";
import { QuotesService } from "../../services/quotes";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
  })
  export class SettingsPage implements OnInit{
    
    checkAltBackground: Observable<boolean>;
    constructor(private quoteService: QuotesService) {}

    ngOnInit(){
        this.checkAltBackground = this.quoteService.isAltBackground();
    }

  
    onToggle(toggle: Toggle) {
        this.quoteService.setBackground(toggle.checked);
    }
  
    
  }