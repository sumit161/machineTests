import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './share/component/nav/nav.component';
import { DashbordComponent } from './share/component/dashbord/dashbord.component';
import { UserComponent } from './share/component/user/user.component';
import { CreateComponent } from './share/component/create/create.component';
import { TableComponent } from './share/component/table/table.component';
import { ChartComponent } from './share/component/chart/chart.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directive/dropdown.directive';
import { InterceptorService } from './share/service/interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './share/component/login/login.component';
import { CreateCardComponent } from './share/component/create-card/create-card.component';
import { BlurDirective } from './directive/blur.directive';
import { SelfToggleDirective } from './directive/self-toggle.directive';
import { NavbarhideshowDirective } from './directive/navbarhideshow.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashbordComponent,
    UserComponent,
    CreateComponent,
    TableComponent,
    ChartComponent,
    FilterPipe,
    DropdownDirective,
    LoginComponent,
    CreateCardComponent,
    BlurDirective,
    SelfToggleDirective,
    NavbarhideshowDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
