//your code here
document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image");
  const info = document.getElementById("info");
  const getUser = document.getElementById("getUser");
  const nameEle = document.getElementById("name");
  let userData = {};
  console.log(nameEle, getUser);
  async function handleGetUser() {
    try {
      let res = await fetch("https://randomuser.me/api/");
      let user = await res.json();
      userData = user.results[0];
      console.log(user, userData);
      const { name, phone, dob, email, picture } = userData;
      const fullName = `${name.first} ${name.last}`;
      console.log(name, phone);
      nameEle.textContent = fullName;
      image.src = picture.large;
      const userAge = dob.age;
      const userPhone = phone;
      const userEmail = email;
      info.textContent = "";
      function displayInfo(attr) {
        switch (attr) {
          case "age":
            info.textContent = `Age: ${userAge}`;
            break;
          case "phone":
            info.textContent = `Phone: ${userPhone}`;
            break;
          case "email":
            info.textContent = `Email: ${userEmail}`;
            break;
          default:
            break;
        }
      }
      document.querySelectorAll(".infoButton").forEach((b) => {
        b.addEventListener("click", () => {
          const attribute = b.getAttribute("data-attr");
          displayInfo(attribute);
        });
      });
    } catch (error) {
      console.log(error, "Error getting user");
    }
  }
  getUser.addEventListener("click", handleGetUser);
  handleGetUser();
});
