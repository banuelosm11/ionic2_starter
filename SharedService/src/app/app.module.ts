import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { UserService } from '../services/user';

@NgModule({
  declarations: [
    MyApp,
		Page1,
		Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
		Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService]
})
export class AppModule {}
