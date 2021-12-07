// Definition von Linien Länge (Notwenig für Animation)
Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray:' + pathElement.getTotalLength() + ';stroke-dashoffset:' + pathElement.getTotalLength())
})

// alternativer Weg:
// setzen von Linen Länge
// siehe link
// https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/