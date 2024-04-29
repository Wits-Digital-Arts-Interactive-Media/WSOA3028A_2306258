const root = "/WSOA3028A_2306258"

const lastBlog = 10

const blogItems = [
    {name: "", week:"0", href: ``},
    {name: "Git - The enemy", week:"1", href: `${root}/Blogs.b1.html`},
    {name: "The Wireframes", week:"2", href: `${root}/blogs/blog2.html`},
    {name: "Semantic Markup", week:"3", href: `${root}/blogs/blog3.html`},
    {name: "IxD Process", week:"4", href: `${root}/blogs/blog4.html`},
    {name: "", week:"5", href: ``},
    {name: "UX and UX of Websites", week:"6", href: `${root}/blogs/blog6.html`},
    {name: "", week:"7", href: ``},
    {name: "Ethical Dilemmas in Software Engineering", week:"8", href: `${root}/blogs/blog8.html`},
    {name: "Internet is a human right", week:"9", href: `${root}/blogs/blog9.html`},
    {name: "Fourth Industrial Revolution", week:"10", href: `${root}/blogs/blog10.html`},

]

export function blogMenu()
{
    const menu = document.getElementById("menu")
    const h2 = document.createElement("h2")
    h2.innerText = `List of blogs`
    menu.appendChild(h2)
    const ul = document.createElement("ul")

    for (let blogItem of blogItems){
        
        if (blogItem.href != ``)
        {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.innerText = `Week ${blogItem.week} - ${blogItem.name}`
            a.setAttribute("href", blogItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }

    menu.appendChild(ul) 
}