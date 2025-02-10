const fetchUserBtn = document.getElementById("fetchUser");
const userCard = document.getElementById("user-card");

// Function to fetch user data
const fetchRandomUser = () => {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        if (!response.ok) {
          reject("❌ Failed to fetch user");
        }
        return response.json();
      })
      .then((data) => resolve(data.results[0]))
      .catch((error) => reject(error));
  });
};

// Function to display user data
const displayUser = (user) => {
  userCard.innerHTML = `
    <img src="${user.picture.large}" alt="User Image">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p>Email: ${user.email}</p>
    <p>Location: ${user.location.city}, ${user.location.country}</p>
  `;
};

// Event listener for button
fetchUserBtn.addEventListener("click", () => {
  fetchRandomUser()
    .then((user) => displayUser(user))
    .catch((error) => {
      userCard.innerHTML = `<p style="color:red">${error}</p>`;
    });
});
