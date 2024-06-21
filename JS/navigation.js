//code from Hanli's example from class... thank you Hanli!!

const root = "/WSOA3028A_2306258";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blog", href: `${root}/HTML/blog.html` },
    { name: "Portfolio", href: `${root}/HTML/portfolio.html` },
    { name: "Essays", href: `${root}/HTML/essays.html` },
    { name: "Profile", href: `${root}/HTML/profile.html` },
    { name: "Design", href: `${root}/HTML/design.html` },
]
export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}