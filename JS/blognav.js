const root = "/WSOA3028A_2306258"


const blogItems = [
    {name: "Intro to Github", blog:"1", href: `${root}/HTML/Blogs/b1.html`},
    {name: "Folder Structure and Stuff", blog:"2", href: `${root}/HTML/Blogs/b2.html`},
    {name: "Interaction Design...oouuuu", blog:"3", href: `${root}HTML/Blogs/b3.html`},
    {name: "IxD Process, aka what i'm thinking", blog:"4", href: `${root}/HTML/Blogs/b4.html`},
    {name: "UX and UI analysis of Websites", blog:"5", href: `${root}/HTML/Blogs/b5.html`},
    {name: "UX and UX of Websites", blog:"6", href: `${root}/HTML/Blogs/b6.html`},
    {name: "Ethical Dilemmas in Software Engineering", blog:"7",href: `${root}/HTML/Blogs/b7.html` },
    {name: "Internet Access is a fundamental right", blog:"8", href: `${root}/HTML/Blog/b8.html`},
    {name: "Making Feminist Internet in Africa", blog:"8", href: `${root}/HTML/Blog/b9.html`},

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