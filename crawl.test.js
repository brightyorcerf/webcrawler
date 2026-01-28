const { normalizeURL, getURLsFromHTML } = require('./crawl.js') 
const { test, expect } = require('@jest/globals')

test('simplified link', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('fix capitals', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})  

test('relative urls', () => {
    const inputHTMLBody = `
<html>
    <body>
        <a href = "/path/">
            yo
        </a>
    </body>
</html>
`
    const inputBaseURL = "https://google.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://google.com/path/"]
    expect(actual).toEqual(expected)
})  

test('absolute urls', () => {
    const inputHTMLBody = `
<html>
    <body>
        <a href = "https://google.com/path/">
            yo
        </a>
    </body>
</html>
`
    const inputBaseURL = "https://google.com/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://google.com/path/"]
    expect(actual).toEqual(expected)
})  

test('both urls', () => {
    const inputHTMLBody = `
<html>
    <body>
        <a href = "https://google.com/path1/">
            yo path 1
        </a>
        <a href = "/path2/">
            yo path 2
        </a>
    </body>
</html>
`
    const inputBaseURL = "https://google.com"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://google.com/path1/", "https://google.com/path2/"]
    expect(actual).toEqual(expected)
})  

test('invalid url', () => {
    const inputHTMLBody = `
<html>
    <body>
        <a href = "invalid">
            yo
        </a>
    </body>
</html>
`
    const inputBaseURL = "https://google.com/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
}) 