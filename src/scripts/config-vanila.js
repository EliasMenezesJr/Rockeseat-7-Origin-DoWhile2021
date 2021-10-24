const widhtWindow = window.innerWidth;

if(widhtWindow > 660){
    VanillaTilt.init(document.querySelector("main"), {
        max: 15,
        speed: 200
        
    });
}
