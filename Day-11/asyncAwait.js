function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Arshan",
        url: "https://arshan18-portfolio.vercel.app/",
      });
    }, 3000);
  });
}

async function getUserInfo() {
  try {
    console.log("Fetching user data...");
    const userInfo = await fetchUserInfo();
    console.log("UserInfo: ", userInfo);
    console.log("User data fetch successfully.");
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserInfo();

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second. Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user);
  console.log(posts);
}
fetchAllData();
