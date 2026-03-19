/* в этот файл добавляет скрипты*/

import { initNavMenu } from './nav.js';
import progressBar from './progress-bar.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavMenu();
  progressBar();
});
