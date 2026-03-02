function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Commment Data Fetched.");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog Data...");
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    console.log(postData);
    console.log(commentData);
    console.log("Fetch Complete");
  } catch (error) {
    console.error("Error Fetching Blog Data", error);
  }
}

getBlogData();
