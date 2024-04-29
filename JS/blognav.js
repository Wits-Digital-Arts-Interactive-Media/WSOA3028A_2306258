const root = "/WSOA3028A_2306258"


const blogItems = [
    {name: "", week:"0", href: ``},
    {name: "Git - The enemy", blog:"1", href: `${root}/Blogs/b1.html`},
    {name: "The Wireframes", blog:"2", href: `${root}/blogs/blog2.html`},
    {name: "Semantic Markup", blog:"3", href: `${root}/blogs/blog3.html`},
    {name: "IxD Process", blog:"4", href: `${root}/blogs/blog4.html`},
    {name: "", blog:"5", href: ``},
    {name: "UX and UX of Websites", blog:"6", href: `${root}/blogs/blog6.html`},
    {name: "", blog:"7", href: ``},
    {name: "Ethical Dilemmas in Software Engineering", blog:"8", href: `${root}/blogs/blog8.html`},
    {name: "Internet is a human right", blog:"9", href: `${root}/blogs/blog9.html`},
    {name: "Fourth Industrial Revolution", blog:"10", href: `${root}/blogs/blog10.html`},

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