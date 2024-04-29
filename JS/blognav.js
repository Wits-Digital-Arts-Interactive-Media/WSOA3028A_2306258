const root = "/WSOA3028A_2306258";

const blogItems = [
    { name: "Home", href: root + "/Blogs/b1.html" },
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
    for (let menuItem of blogItems) {
        const li = document.createElement("li")
        if (currentPage != blogItems.name) {
            const a = document.createElement("a")
            a.innerText = blogItemsItem.name
            a.setAttribute("href", blogItems.href)
            li.appendChild(a)
        } else { li.innerText = blogItems.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}