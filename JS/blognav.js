const blogPosts = [
    {_id: 0, name: "Blog-1", href: "./HTML/Blog/b1.html"},
    {_id: 1, name: "Blog-2", href: "./blog2.html"},
    {_id: 2, name: "Blog-3", href: "./blog3.html"},
    {_id: 3, name: "Blog-4", href: "./blog4.html"},
]

export function blogNavigation (currentPage) {
    const navigation = document.querySelector("blog-Nav")
    if (currentPage = blogPosts[0]._id) {
        const a = document.createElement("a")
        a.innerText = "Next"
        a.setAttribute("href", blogPosts[1].href)
    }
    else if (currentPage = blogPosts[blogPosts.length - 1]._id) {
        const b = document.createElement("b")
        b.innerText = "Previous"
        b.setAttribute("href", blogPosts[blogPosts.length - 2].href)
    }
    else {
        const c = doncument.createElement("c")
        c.innerText = "Next"
        c.setAttribute("href", blogPosts[currentPage + 1])
        const d = document.createElement("d")
        d.innertext = "Previous"
        d.setAttribute("href", blogPosts[currentPage - 1])
    }
}