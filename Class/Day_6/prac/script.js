const fetchUserBtn = document.getElementById("fetchUser");
const userCard = document.getElementById("user-card");

const fetchRandomUser = () => {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          reject("Failed to fetch user");
        }
        return response.json();
      })
      .then((data) => resolve(data.results[0]))
      .catch((error) => reject(error));
  });
};

const displayUser = (user) => {
  userCard.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p>Email: ${user.email}</p>
    <p>Location: ${user.location.city}, ${user.location.country}</p>`;
};

fetchUserBtn.addEventListener("click", () => {
  fetchRandomUser()
    .then((user) => displayUser(user))
    .catch(
      (error) => (userCard.innerHTML = `<p style="color:red">${error}</p>`)
    );
});
