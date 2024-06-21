//code from Hanli's example from class... thank you Hanli!!

const root = "/WSOA3028A_2306258";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blog", href: `${root}/blog/blog.html` },
    { name: "Portfolio", href: `${root}/portfolio/portfolio.html` },
    { name: "Essays", href: `${root}/essays/essays.html` },
    { name: "Profile", href: `${root}/profile/profile.html` },
    { name: "Design", href: `${root}/design/design.html` },
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