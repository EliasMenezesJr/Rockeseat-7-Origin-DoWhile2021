let topGear = 0
for( let i = 1; i <= 10; i ++){
    const gear = document.createElement(`div`)
    gear.classList.add(`gear${i}`,`config-gear`)
    gears.appendChild(gear)
    
    topGear = topGear + 40
    console.log(top);
    gear.style.top = `${topGear}px`
    if(i % 2){
        gear.style.animation = "rotateImg2 10s linear infinite"
        gear.style.left = "120px"
        console.log("oi");
    } else {
        gear.style.animation = "rotateImg 10s linear infinite"
        gear.style.left = "100px"
    }
}

