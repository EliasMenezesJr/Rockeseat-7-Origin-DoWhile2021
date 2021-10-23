const linksSocialMedia = {
    userName: "Elias Menezes Jr.",
    guthub: "EliasMenezesJr",
    youtube: "channel/UCtaaMknSR2VyRFv3am0w1Iw",
    facebook: "",
    instagram: "elias_menezes_jr",
    twitter: ""
}

function changeSocailMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocailMediaLinks()

function getUserGitHub(){
    const url = `https://api.github.com/users/${linksSocialMedia.guthub}`

    fetch(url).then(response => response.json()).then(data => {
        userName.innerText = data.name
        userNameGitHub.innerText = data.login
        github_url.href = data.html_url
        imgProfile.src = data.avatar_url
        bioGitHub.innerText = data.bio
    })
}

getUserGitHub()