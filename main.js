const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
    //console.log('highlight...!!');
    //to know the page actual element 
    //console.log(this)
    const linkCoords=this.getBoundingClientRect();
    //console.log(linkCoords)
    //my way 
     const scrY=window.scrollY;
    // console.log(scrY)

    //wesbos way
    // const coords={
    //     width:linkCoords.width,
    //     height:linkCoords.height,
    //     top:linkCoords.top + window.scrollY,
    //     left:linkCoords.left+window.scrollX
    // };
    //my way 
    highlight.style.width=`${linkCoords.width}px`;
    highlight.style.height=`${linkCoords.height}px`;
    highlight.style.transform=`translate(${linkCoords.left}px,${linkCoords.top+scrY}px )`;
    //wes bos
    // highlight.style.width=`${coords.width}px`;
    // highlight.style.height=`${coords.height}px`;
    // highlight.style.transform=`translate(${coords.left}px,${coords.top}px )`;
}


triggers.forEach(a => a.addEventListener('mouseenter',highlightLink));