## Error when Loading CSS
Note that the CSS file should use UTF-8 encoding.

At first I simply copied the content of the [CSS file](https://raw.githubusercontent.com/yytypescript/random-cat/main/app/page.module.css) from the browser when trying to add styles to the [random-cat](./random-cat) app, but an error `An unexpected Turbopack error occurred.` occurred with Turbopack. The problem wasn't solved even if I changed to webpack using `next dev --webpack`, which showed `Syntax error: ... Unknown word` followed by `PostCSSSyntaxError`, suggesting that there seemed to be some strange characters not correctly parsed.

Finally I realised that it was because the file I created using VSCode was encoded in **UTF-16LE** by default. Whenever it was decoded using UTF-8, an error would occur. So just make sure you write CSS files with UTF-8 encoding.