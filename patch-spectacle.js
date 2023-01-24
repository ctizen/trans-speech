const { readFileSync, writeFileSync } = require('fs');

const files = [
    'node_modules/spectacle/es/components/deck/deck.js',
    'node_modules/spectacle/lib/components/deck/deck.js',
    'node_modules/spectacle/dist/spectacle.js',
];

const search = `left: function left() {
      return stepBackward();
    },
    right: function right() {
      return stepForward();
    }`;

const replacement = `left: function left() {
      return stepBackward();
    },
    right: function right() {
      return stepForward();
    },
    pagedown: function pagedown() {
      return stepForward();
    },
    pageup: function pageup() {
      return stepBackward();
    }`;

files.forEach((f) => writeFileSync(f, readFileSync(f, 'utf-8').replace(search, replacement), 'utf-8'))
