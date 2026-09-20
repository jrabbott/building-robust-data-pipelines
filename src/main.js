import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './style.css';

Reveal.initialize({
  hash: true,
  slideNumber: true,
  showNotes: false,
  transition: 'slide',
  plugins: [Notes],
});
