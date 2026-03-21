/* в этот файл добавляет скрипты*/

import { initNavMenu } from './nav.js';
import { initAllCardsCarousels } from './cards-carousel.js';
import progressBar from './progress-bar.js';
import filterBar from './filter-bar.js';
import filterRange from './filter-range.js';
import alphabetFilter from './alphabet-filter.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavMenu();
  initAllCardsCarousels();
  progressBar();
  filterBar();
  filterRange();
  alphabetFilter();
});
