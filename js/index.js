
//header component



const gameLinks = [
    {
        text: "You Got Cubed",
        href: "#"
    },
    {
        text: "Boxed Kingdom",
        href: "#",
    },

];

const body = document.querySelector(".header-placement");
body.appendChild(headerComp(gameLinks));

function headerComp(arr){
    const header = document.createElement("header");
    const headDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const homeLink = document.createElement("a");
    const gamesDiv = document.createElement("div");
    const gameBtn = document.createElement("button");
    const dropDiv = document.createElement("div");

    arr.forEach(x =>{
        const gameLink = document.createElement("a");
        gameLink.textContent = x.text;
        gameLink.href = x.href;
        dropDiv.appendChild(gameLink);
    });

    headDiv.classList.add("header-div");
    h1.textContent = "Tile Time Gaming";
    nav.classList.add("main-nav");
    homeLink.href = "index.html";
    homeLink.textContent = "Home";
    gameBtn.textContent = "Games";
    dropDiv.classList.add("drop-down");
    
    gameBtn.addEventListener("click", ()=>{
        if(dropDiv.style.display === "none"){
            dropDiv.style.display = "flex";
        }else{
            dropDiv.style.display = "none";
        }
    });

    dropDiv.addEventListener("mouseleave", ()=>{
        dropDiv.style.display = "none";
    });

    header.appendChild(headDiv);
    headDiv.appendChild(h1);
    headDiv.appendChild(nav);
    nav.appendChild(homeBtn);
    homeBtn.appendChild(homeLink);
    nav.appendChild(gamesDiv);
    gamesDiv.appendChild(gameBtn);
    gamesDiv.appendChild(dropDiv);

    return header;


}
