var posts=["2023/11/11/md语法/","2023/11/11/Front-matter 的基本认识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };