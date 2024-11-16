
document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts-container");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");

    const posts = await response.json();

    // Postlarni chiqarish
    posts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className =
        "bg-white shadow rounded-lg p-4 transition-transform";

      postCard.innerHTML = `
        <h2 class="text-xl font-semibold text-gray-800 mb-2">${post.title}</h2>
        <p class="text-gray-600">${post.body}</p>
      `;

      postsContainer.appendChild(postCard);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    postsContainer.innerHTML = `
      <div class="text-center text-red-500">
        <p>Something went wrong while fetching posts.</p>
      </div>`;
  }
});

  