import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule as , IgxAvatarModule as , IgxButtonModule as , IgxListModule as , IgxButtonModule as , IgxIconModule as , IgxAvatarModule as , IgxInputGroupModule as , IgxSelectModule as , IgxCardModule as , IgxAvatarModule as , IgxButtonModule as , IgxIconModule as , IgxRadioModule as , IgxSelectModule as , IgxInputGroupModule as , IgxButtonModule as , IgxIconModule as , IgxAvatarModule as  } from 'igniteui-angular';
import { FormsModule as , FormsModule as , FormsModule as , FormsModule as  } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyInfoComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxCardModule,
    IgxRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
