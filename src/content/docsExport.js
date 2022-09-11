// DO NOT EDIT! 
// This doc was auto generated from ./src/scripts/build-page-imports.js 
// Sat Sep 10 2022 18:35:11 GMT-0700 (Pacific Daylight Time)
      
// Import primary markdown tools
import {InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';
      
// internal markdown docs
import Practice002Page from './static/blog/practice002.md'; 
import WarmupsPage from './static/blog/warmups.md'; 
import AboutPage from './static/general/about.md'; 
import HomePage from './static/home.md'; 

      
// internal markdown docs
export class Practice002 extends InternalMarkdownWrapper {
  readme = Practice002Page
}

export class Warmups extends InternalMarkdownWrapper {
  readme = WarmupsPage
}

export class About extends InternalMarkdownWrapper {
  readme = AboutPage
}

export class Home extends InternalMarkdownWrapper {
  readme = HomePage
}


    