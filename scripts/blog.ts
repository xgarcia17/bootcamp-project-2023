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
  blogs.sort((a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const container = document.getElementById("container");
  blogs.forEach(({ title, date, description, slug }) => {
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
      container.appendChild(divPost);
    }
  });
}

displayBlogPosts();