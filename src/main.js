import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './style.css';

Reveal.initialize({
  hash: true,
  slideNumber: true,
  showNotes: false,
  transition: 'fade',
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2.0,
  plugins: [Notes],
});
