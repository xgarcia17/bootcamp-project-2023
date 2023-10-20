var blogs = [
    {
        title: "Blog Intro",
        date: "2023-10-18",
        description: "This is my intro to my blog on this website.",
        slug: "./blogIntro.html",
    },
    {
        title: "First Blog",
        date: "2023-10-18",
        description: "This is my first blog on this website.",
        slug: "./firstBlog.html",
    },
];
function displayBlogPosts() {
    // Sort the blogs by their preview dates
    blogs.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    console.log(document.documentElement.childNodes);
    var container = document.getElementById("blogpost-container");
    //const container = document.querySelector(".blogpost-container");
    //const container = document.querySelector(".navbar");
    console.log(container);
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        console.log("here");
        var link = document.createElement("a");
        link.href = slug;
        var divPost = document.createElement("div");
        divPost.classList.add("post-preview");
        divPost.innerHTML = "\n      <h2 class=\"post-title\">".concat(title, "</h2>\n      <h3 class=\"post-subtitle\">").concat(date, "</h3>\n      <p class=\"post-description\">").concat(description, "</p>\n    ");
        divPost.appendChild(link);
        if (container) {
            console.log("inside if");
            container.appendChild(divPost);
        }
    });
}
displayBlogPosts();
