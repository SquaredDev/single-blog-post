const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};


// <article>
//   <h2>The Amazing Sloth</h2>
//   <div class="meta">
//     <span class="date">Written on May 2, 2017</span>
//   </div>
//   <div class="post">
//     Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae.*
//   </div>
  // <div class="site">
  //   Part of this content was pulled from <a href="https://en.wikipedia.org/wiki/Sloth">Wikipedia</a>
  // </div>
// </article>

// Start Editing Here
let container = document.querySelector('.container')
let htmlString = '<article>' //start article
  htmlString += `<h2>${blogPost.title}</h2>` //insert H2
  htmlString += `<div class="meta"><span class="date">${blogPost.meta.date}</span></div>` //inserts date
  htmlString += `<img src="${blogPost.post.image}">`
  htmlString += `<div class="post">${blogPost.post.content}</div>` //inserts blogPost content
  htmlString += `<div class="site">Part of this content was pulled from <a href="${blogPost.site.url}">${blogPost.site.name}</a></div>`

  htmlString = htmlString + '</article>'

container.innerHTML = htmlString
