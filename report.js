function printReport(pages){
    console.log("==========")
    console.log("report")
    console.log("==========")

    const sortedPages = sortPages(pages)
    for(const page of sortedPages){
        const url = page[0]
        const hits = page[1]
        console.log(`found ${hits} links to page ${url}`)
    }

    console.log("==========")
    console.log("end report")
    console.log("==========")    
}    

function sortPages(pages){
    if(!pages){
        return []
    }

    const pagesArr = Object.entries(pages)
    pagesArr.sort((a, b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1]-a[1]
    })
    return pagesArr
}

module.exports = {
    sortPages,
    printReport
}