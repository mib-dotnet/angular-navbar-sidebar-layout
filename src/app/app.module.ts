import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { GridComponent } from "./grid/grid-boston-marathon/grid.component";
import { DataService } from "./grid/services/data.service";
import { IgxSparklineCoreModule } from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule } from "igniteui-angular-charts/ES5/igx-sparkline-module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		HttpClientModule,
		IgxSparklineCoreModule,
		IgxSparklineModule
  ],
  providers: [DataService],
  entryComponents: []
})
export class AppModule {}
