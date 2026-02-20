let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {  //specify intended direction
    const items = document.querySelectorAll(".carousel-item");  //set items equal to "carousel-item"

    if (direction == "forward") {  //if forward
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {  //if at end
            return false;   //early termination
        }
        currentPosition++;  //increase current position
    } else {                        //otherwise
        if (currentPosition == 0) {  //if at begining
            return false;       //early termination
        }
        currentPosition--;  //decrease current position
    }

    const offset = (slideWidth + gap) * currentPosition;  //track move formula

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;  //implementing track move function via X position
    }
}
