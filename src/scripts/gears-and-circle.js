/* gears vertical*/
let topGearV = 0
let topVR = 130

let topGearH = 40
let bottomGearH = 520

let leftGearH = 120

for( let i = 1; i <= 13; i++){
    /* gear V Right */
    const gearVL = document.createElement(`div`)
    gearVL.classList.add(`gear${i}VL`,`config-gear`)
    gears.appendChild(gearVL)
    topGearV = topGearV + 40
    
    gearVL.style.top = `${topGearV}px`
    if(i % 2){
        gearVL.style.animation = "rotateImg2 10s linear infinite"
        gearVL.style.left = "120px"
    } else {
        gearVL.style.animation = "rotateImg 10s linear infinite"
        gearVL.style.left = "100px"
    }

    /* gear V left */
    if( i < 6 ){
        const gearVR = document.createElement("div")
        gearVR.classList.add(`gear${i}VR`, "config-gear")
        gears.appendChild(gearVR)

        topVR = topVR + 45
        gearVR.style.top = `${topVR}px`

        if(i % 2){
            gearVR.style.animation = `rotateImg 10s linear infinite`
            gearVR.style.left = "380px"
        } else {
            gearVR.style.animation = `rotateImg2 10s linear infinite`
            gearVR.style.left = "400px"
        }
        
    }

    /* gear H Top and Bottom */
    if( i <= 6 ) {
        const gearHTop = document.createElement("div")
        const gearHBottom = document.createElement("div")

        gearHTop.classList.add(`gearHTop${i}`, "config-gear")
        gearHBottom.classList.add(`gearHBottom${i}`, "config-gear")

        gears.appendChild(gearHTop)
        gears.appendChild(gearHBottom)

        topGearH = topGearH + 15
        bottomGearH = bottomGearH - 20

        leftGearH = leftGearH + 40

        gearHTop.style.top = `${topGearH}px`
        gearHBottom.style.top = `${bottomGearH}px`

        gearHTop.style.left = `${leftGearH}px`
        gearHBottom.style.left = `${leftGearH}px`

        if(i % 2){
            gearHTop.style.animation = "rotateImg 10s linear infinite"
            gearHBottom.style.animation = "rotateImg 10s linear infinite"
        } else {
            gearHTop.style.animation = "rotateImg2 10s linear infinite"
            gearHBottom.style.animation = "rotateImg2 10s linear infinite"
        }
    }
}

for(let i = 1; i <= 2; i++ ){
    const contentCircle = document.createElement("div")
    contentCircle.classList.add("content-circle")
    circle.appendChild(contentCircle)

    if(i%2){
        const logoRocketseat = document.createElement("img")
        logoRocketseat.src = "./src/images/do-while-logo.png"
        circle.appendChild(logoRocketseat)
    }

    for(let j = 0; j < 2; j++){
        const circleSlider = document.createElement("div")
        circleSlider.classList.add("circle-slider")
        contentCircle.appendChild(circleSlider)
    }
}


