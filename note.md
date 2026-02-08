## [random-cat](./random-cat)
### Error when Loading CSS
Note that the CSS file should use UTF-8 encoding.

At first I simply copied the content of the [CSS file](https://raw.githubusercontent.com/yytypescript/random-cat/main/app/page.module.css) from the browser when trying to add styles to the [random-cat](./random-cat) app, but an error `An unexpected Turbopack error occurred.` occurred with Turbopack. The problem wasn't solved even if I changed to webpack using `next dev --webpack`, which showed `Syntax error: ... Unknown word` followed by `PostCSSSyntaxError`, suggesting that there seemed to be some strange characters not correctly parsed.

Finally I realised that it was because the file I created using VSCode was encoded in **UTF-16LE** by default. Whenever it was decoded using UTF-8, an error would occur. So just make sure you write CSS files with UTF-8 encoding.

## [vitest-test](./vitest-test)
### Error when Importing an External Component
I was trying to test my [LikeButton](./like-button/src/LikeButton.tsx) component by importing from its source directory, instead of creating a new one in the test directory as in the textbook. However, an error occurred suggesting that the dependency react could not be resolved.

As react used in [LikeButton.tsx](./like-button/src/LikeButton.tsx) is actually from [like-button](./like-button) project, it seemed that the error occurred because Vitest could just not successfully find the react dependency of another project. To solve the problem, I added `optimizeDeps` to [vitest.config.ts](./vitest-test/vitest.config.ts) as below:

```ts
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
```
to guarantee react to be pre-bundled, so that Vitest would not try to find react from another project, but use that pre-bundled react instead.