function resetHeight(){

    const container = document.querySelector(".container");
    // const qrCodeCard = document.querySelector(".QRcode-card");
    // const attribution = document.querySelector(".attribution");

    // reset the container height to that of the inner browser
    const heightOfVisibleScreen = container.style.minHeight = window.innerHeight + "px";
    console.log("Height: " + heightOfVisibleScreen);

    //----------------For my reference---------------------
    // const heightDifference = container.offsetHeight - qrCodeCard.offsetHeight;
    // console.log("heightDifference: " + heightDifference);
    // const push_the_element_down = 0 - (heightDifference / 2);
    // console.log("push_the_element_down: " + push_the_element_down);
    //
    // css(attribution, {
    //   'font-size': '0.79rem',
    //   'position': 'absolute',
    //   'text-align': 'center',
    //   'bottom': push_the_element_down+'px',
    //   'left': 0,
    //   'right': 0
    // });
    //----------------For my reference---------------------
}

// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();

//---------For reference------------------
// function css(element, style){
//   console.log("Working");
//   for(const property in style)
//     element.style[property] = style[property];
// }
//---------For reference------------------
