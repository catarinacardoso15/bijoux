import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ItemsComponent } from './page/plasbijoux-items/items/items.component';
import { PlasbijouxItemsComponent } from './page/plasbijoux-items/plasbijoux-items.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    PlasbijouxItemsComponent,
    ItemsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
  ],
  exports: [MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
