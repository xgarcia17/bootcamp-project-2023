var blogs = [
    {
        title: "Blog Intro",
        date: "10-18-2023",
        description: "This is my intro to my blog on this website.",
        slug: "../blogIntro.html",
    },
    {
        title: "First Blog",
        date: "10-18-2023",
        description: "This is my first blog on this website.",
        slug: "../firstBlog.html",
    },
];
function iterateOverBlogs() {
    var container = document.getElementById("container");
    //console.log("we're starting!");
    for (var i = 0; i < blogs.length; i++) {
        //console.log("here we are" + i);
        var p = document.createElement("div");
        //p.classList.add("blogpost");
        //const blogpost = p.getElementsByClassName("blogpost")[0];
        p.title = blogs[i].title;
        p.textContent = blogs[i].date;
        p.innerText = blogs[i].description;
        p.innerHTML = blogs[i].slug;
        //console.log(p);
        container === null || container === void 0 ? void 0 : container.appendChild(p);
    }
}
iterateOverBlogs();
