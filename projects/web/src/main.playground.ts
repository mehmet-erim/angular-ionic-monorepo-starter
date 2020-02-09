import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { CommonModule } from '../../common/src/public-api';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [CommonModule.forRoot()],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
