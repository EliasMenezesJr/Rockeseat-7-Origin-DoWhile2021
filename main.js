const linksSocialMedia = {
    userName: "Elias Menezes Jr.",
    guthub: "EliasMenezesJr",
    youtube: "channel/UCtaaMknSR2VyRFv3am0w1Iw",
    facebook: "",
    instagram: "elias_menezes_jr",
    twitter: ""
}

function changeSocailMediaLinks(){
    userName.textContent = `${linksSocialMedia.userName}`
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocailMediaLinks()