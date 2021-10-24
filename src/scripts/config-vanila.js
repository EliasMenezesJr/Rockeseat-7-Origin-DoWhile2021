const widhtWindow = window.innerWidth;

if(widhtWindow > 720){
    VanillaTilt.init(document.querySelector("main"), {
        max: 15,
        speed: 200
        
    });
}
