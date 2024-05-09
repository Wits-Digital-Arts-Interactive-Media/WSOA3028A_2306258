//this is basically the same code as the menu js but just an id addtion and tweaks to the nammes

const root = "/WSOA3028A_2306258"


const blogItems = [
    {name: "Intro to Github", blog:"1", href: `${root}/HTML/Blogs/b1.html`},
    {name: "Folder Structure and Stuff", blog:"2", href: `${root}/HTML/Blogs/b2.html`},
    {name: "Interaction Design...oouuuu", blog:"3", href: `${root}/HTML/Blogs/b3.html`},
    {name: "IxD Process, aka what i'm thinking", blog:"4", href: `${root}/HTML/Blogs/b4.html`},
    {name: "UX and UI analysis of Websites", blog:"5", href: `${root}/HTML/Blogs/b5.html`},
    {name: "Ethical Dilemmas in Software Engineering", blog:"6",href: `${root}/HTML/Blogs/b6.html` },
    {name: "Internet Access is a fundamental right", blog:"7", href: `${root}/HTML/Blogs/b7.html`},
    {name: "Making Feminist Internet in Africa", blog:"8", href: `${root}/HTML/Blogs/b8.html`},

]

export function blogMenu()
{
    const menu = document.getElementById("menu")
    const h2 = document.createElement("h2")
    h2.innerText = `:`
    menu.appendChild(h2)
    const ul = document.createElement("ul")

    for (let blogItem of blogItems){
        
        if (blogItem.href != ``)
        {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.innerText = `Blog Post ${blogItem.blog} - ${blogItem.name}`
            a.setAttribute("href", blogItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }

    menu.appendChild(ul) 
}

const navData = [
    { title: "Home", link: "https://fefeswork.github.io/IM4A-Internet-Art-A3/home.html"},
    { title: "Theory", link: "https://fefeswork.github.io/IM4A-Internet-Art-A3/Theory/theory.html"},
    { title: "Internet Art", link: "https://fefeswork.github.io/IM4A-Internet-Art-A3/Internet Art/IAHome.html"},
    { title: "Design", link: "https://fefeswork.github.io/IM4A-Internet-Art-A3/Design/design.html"},
]


// I was going to try and use this method below but i struggled to get it to work...
// it's recycled code i had from anohter priject i worked on


// const navElement = document.getElementById("nav-Id");

// let list = document.createElement("ul");

// for(var i = 0; i < navData.length; i++){

//     let listItemLink = document.createElement("a");
//     listItemLink.innerText = navData[i].title;
//     listItemLink.setAttribute("href", navData[i].link);
    
//     let listItem = document.createElement("li");
//     listItem.appendChild(listItemLink);
//     list.appendChild(listItem);
// }

// navElement.appendChild(list);

// //Dev notes

// // Navigation data, you are essentially using relative referenicng for the links//