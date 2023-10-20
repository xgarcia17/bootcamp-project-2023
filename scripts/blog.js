var blogs = [
    {
        title: "Blog Intro",
        date: "10-18-2023",
        description: "This is my intro to my blog on this website.",
        slug: "./blogIntro.html",
    },
    {
        title: "First Blog",
        date: "10-18-2023",
        description: "This is my first blog on this website.",
        slug: "./firstBlog.html",
    },
];
function displayBlogPosts() {
    // Sort the blogs by their preview dates
    blogs.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    var container = document.getElementById("container");
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var link = document.createElement("a");
        link.href = slug;
        var divPost = document.createElement("div");
        divPost.classList.add("post-preview");
        divPost.innerHTML = "\n      <h2 class=\"post-title\">".concat(title, "</h2>\n      <h3 class=\"post-subtitle\">").concat(date, "</h3>\n      <p class=\"post-description\">").concat(description, "</p>\n    ");
        divPost.appendChild(link);
        if (container) {
            container.appendChild(divPost);
        }
    });
}
displayBlogPosts();
