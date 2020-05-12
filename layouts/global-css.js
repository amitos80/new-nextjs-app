const css = `
* { margin: 0; padding: 0; }
body { font-family: Montserrat; }
img, a img { border: none; }
input { outline: none; }

button { 
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; 
   cursor: pointer;
}
a:-webkit-any-link,
a {  cursor: pointer; text-decoration: none; color: inherit; }
*:focus {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  highlight-color: transparent;
}
* {
  highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
} 
.slick-list {
  padding: 0;
}`;

export default css;
