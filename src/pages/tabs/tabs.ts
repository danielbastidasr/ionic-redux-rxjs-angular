import { Component } from "@angular/core";
import { FavouritesPage } from "../favourites/favourites";
import { LibraryPage } from "../library/library";

@Component({
    selector: 'page-tabs',
    template: `
      <ion-tabs>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      </ion-tabs>
    `
  })
  export class TabsPage {
    favoritesPage = FavouritesPage;
    libraryPage = LibraryPage;
  }