'use strict';

/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */
import './components/Common';
import './components/PublicAPI';

/** Import page controllers */
import Home from './pages/Home';
import About from './pages/Page-2';

import { currentPage } from './modules/dev/_helpers';

/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Home page */
  case 'home': new Home; break;
  case 'page-2': new Page-2; break;

  /** No page found */
  default: console.warn('Undefined page');
}
