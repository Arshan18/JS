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
  } catch (error) {
    console.log("Error fetching data");
  }
}
getUserInfo();
