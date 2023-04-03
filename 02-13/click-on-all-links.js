// get all the links
const anchorLinks = Array.from(document.querySelectorAll('a'))


// add stuff to the link to make it open up a new tab

anchorLinks.forEach(anchorItem => {
    anchorItem.target="_blank";
})

// click on the links

anchorLinks.forEach(anchorItem => {
    anchorItem.click();
})