const root = "/WSOA3028A_2306258"

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    //Type Coercion - it is taking a const, adding it to a string and making it the string it expects
    { name: "Blog", href: `${root}/HTML/blog.html` },
    //back-tick syntax (template strings) `...` - allows the use of whitespace, ", ', interpolation, and substitution
    //allows for string interpolation ${ } - automatically replaces variables and expressions with real values
    { name: "Essays", href: `${root}/HTML/essays.html` },
    { name: "Portfolio", href: `${root}/HTML/portfolio.html` },
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