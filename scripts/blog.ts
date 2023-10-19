type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
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
  const container = document.getElementById("container");
  //console.log("we're starting!");
  for (let i=0; i<blogs.length; i++) {
    //console.log("here we are" + i);
    const p = document.createElement("div");
    //p.classList.add("blogpost");
    //const blogpost = p.getElementsByClassName("blogpost")[0];

    p.title = blogs[i].title;
    p.textContent = blogs[i].date;
    p.innerText = blogs[i].description;
    p.innerHTML = blogs[i].slug;
    //console.log(p);
    container?.appendChild(p);
  }
}

iterateOverBlogs();