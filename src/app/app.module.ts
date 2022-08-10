import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';

import {ButtonModule} from 'primeng/button';
import { BoxComponent } from './element/text-box/box/box.component';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { TabComponent } from './create/tab/tab/tab.component';
import { ListComponent } from './create/list/list/list.component';
import { MenuComponent } from './create/menu/menu/menu.component';
import { KeybayComponent } from './play/keybar/keybay/keybay.component';
import { WinComponent } from './play/win/win.component';
import { LoseComponent } from './play/lose/lose.component';
import { CountComponent } from './play/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    PlayComponent,
    BoxComponent,
    TabComponent,
    ListComponent,
    MenuComponent,
    KeybayComponent,
    WinComponent,
    LoseComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
