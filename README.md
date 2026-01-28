My spider is an asynchronous internet bot engineered in TypeScript which is designed for systematic traversal of the World Wide Web, performing deep-packet inspection of HTML structures to facilitate comprehensive SEO auditing and link-graph mapping

![image.jpg](image.jpg)

How to run (example): `npm start https://wagslane.dev`

### The Logic of Recursive Crawling

A recursive crawler follows a "Depth-First" or "Tree-like" approach. You define a function that:

- Extracts links (the nextURLs) from a page
- Filters them (to avoid leaving the site or repeating pages)
- Calls itself for each of those new links

### Topics I learnt:

- Using Jest (JS testing framework), `.test.js` files basically
- URL() constructor which returns a newly created URL object 
- `process.argv`, `process.exit(1)`