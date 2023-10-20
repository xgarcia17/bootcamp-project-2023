type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
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
  blogs.sort((a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  console.log(document.documentElement.childNodes);
  const container = document.getElementById("blogpost-container");
  //const container = document.querySelector(".blogpost-container");
  //const container = document.querySelector(".navbar");
  console.log(container);
  blogs.forEach(({ title, date, description, slug }) => {
    console.log("here");
    const link = document.createElement("a");
    link.href = slug;
    const divPost = document.createElement("div");
    divPost.classList.add("post-preview");
    divPost.innerHTML = `
      <h2 class="post-title">${title}</h2>
      <h3 class="post-subtitle">${date}</h3>
      <p class="post-description">${description}</p>
    `;
    divPost.appendChild(link);
    if (container) {
      console.log("inside if");
      container.appendChild(divPost);
    }
  });
}

displayBlogPosts();