import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app.routing';
import {DiscordComponent} from './components/discord/discord.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServersComponent} from './components/servers/servers.component';
import {AppComponent} from './containers/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HomeComponent} from './views/home/home.component';

export const APP_COMPONENTS = [
	AppComponent,
	DiscordComponent,
	FooterComponent,
	HomeComponent,
	ServersComponent,
]

@NgModule({
  declarations: APP_COMPONENTS,
  imports: [
	  BrowserModule,
	  AppRouting,
	  BrowserAnimationsModule,
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
