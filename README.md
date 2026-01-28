My spider is an internet bot which recursively traverses websites, extracts and normalizes URLs, and produces crawl reports useful for link analysis.

![image.jpg](image.jpg)

How to run (example): `npm start https://wagslane.dev`

### The Logic of Recursive Crawling

A recursive crawler follows a "Depth-First" or "Tree-like" approach. You define a function that:

- Extracts links (the nextURLs) from a page
- Filters them (to avoid leaving the site or repeating pages)
- Calls itself for each of those new links

### Topics I learned

- Unit testing with Jest (`.test.js` files)
- Using the `URL()` constructor for parsing and resolving URLs
- Error handling with `try/catch` around unsafe operations
- URL normalization for deduplication
- HTTP fetching and response handling
- Command-line argument handling with `process.argv` and `process.exit(1)`
