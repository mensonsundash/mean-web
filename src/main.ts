// import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { appConfig } from './app/111111111111app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(AppModule)
// .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err) => console.error(err));
