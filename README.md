This is a simple URL shortening react/next application. See live version [https://urlshortenerr.netlify.app/](https://urlshortenerr.netlify.app/)

How to run the app locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Technologies used:
1. Next js
2. Typescript
3. Styled components

## Reasons for the technologies used:

1. Next js: Next js comes pre packaged with great features e.g:
   - Automatic code splitting, which makes for much faster page loading time since the browser doesn't have to downloand JS and CSS that is not required for a specifi page
   - Server side rendering and static site generation. Next js provide this out-of-the-box, taking away need for a lot of tweaking with issues related to caching and server load. This speed development time.

2. Typescript: The main reason I pick Typescript is to enable IDEs to provide a richer environment for spotting common errors as I type. 
    - Typecript also support modern javascript.

3. Styled components: It enables styling of components with plain CSS inside javascript code, which gives freedom to build custom components with CSS.
     - CSS-in-Style allows for scoped styles. 
     - Server-side rendering

# External APIs integrated
1. https://api.shrtco.de/v2/ from https://shrtco.de/docs/
