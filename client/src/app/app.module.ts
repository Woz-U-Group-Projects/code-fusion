import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemDetailService } from './item-detail.service';

@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [AppComponent, LoginComponent, RegisterComponent, HeaderComponent, HomeComponent, ProfileComponent, ItemDetailComponent, ReceivingComponent, InventoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ItemDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
