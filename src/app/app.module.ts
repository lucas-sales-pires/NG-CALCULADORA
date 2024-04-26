import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { BotaoifComponent } from './components/botaoif/botaoif.component';


@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
    SobreComponent,
    BotaoifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
