To see the weird problem of components being instantiated and mounted
twice, do the following:

1.) npm i
2.) npm run dev
3.) Open localhost:3000 in Chrome
4.) Inspect client-side console after you refresh the page. You will
  notice MinimalComponent being mounted twice for unknown reason(s).

