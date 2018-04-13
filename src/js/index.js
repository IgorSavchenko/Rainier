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
import main from './pages/main';

import { currentPage } from './modules/dev/_helpers';

/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Home page */
  case 'main': new main; break;

  /** No page found */
  default: console.warn('Undefined page');
}
