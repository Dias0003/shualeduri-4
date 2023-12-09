function validateRegistration() {
 
   
}

function showLogin() {
  document.getElementById('registration').style.display = 'none';
  document.getElementById('posts').style.display = 'block';
}

function searchPosts() {
  const searchInput = document.getElementById('searchInput').value;
 
  const posts = [
    { title: 'Post 1', likes: 10, description: 'Lorem ipsum...', category: 'Technology' },
    { title: 'Post 2', likes: 15, description: 'Lorem ipsum...', category: 'Travel' },
    
  ];

  displayPosts(posts);
}

function displayPosts(posts) {
  const postListDiv = document.getElementById('postList');
  postListDiv.innerHTML = '';

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.innerHTML = `
      <h2>${post.title}</h2>
      <p>Likes: ${post.likes}</p>
      <p>${post.description}</p>
      <p>Category: ${post.category}</p>
    `;
    postListDiv.appendChild(postCard);
  });
}

function searchPosts() {
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://dummyjson.com/posts/search?q=${searchInput}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(posts => displayPosts(posts))
      .catch(error => console.error('Error fetching posts:', error));
  }

  function displayPosts(posts) {
    const postListDiv = document.getElementById('postList');
    postListDiv.innerHTML = '';

    posts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
      postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p class="likes">Likes: ${post.likes}</p>
        <p>${post.description}</p>
        <p class="category">Category: ${post.category}</p>
      `;
      postListDiv.appendChild(postCard);
    });
  }