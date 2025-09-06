const modalButtons = document.querySelectorAll(".button-modal");
const modalCloseButtons = document.querySelectorAll(".close-modal");
const tableItemTemplate = document.querySelector(".table__item-template");
const tableContainer = document.querySelector(".table__container");
const formFirstName = document.querySelector(".form__firstName");
const formLastName = document.querySelector(".form__lastName");
const formEmail = document.querySelector(".form__email");
const formSubscription = document.querySelector(".form__subscription");
const formOccupation = document.querySelector(".form__occupation");
const formObjective = document.querySelector(".form__objective");
const formUserBtn = document.querySelector(".user__btn");

const users = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@gmail.com",
    occupation: "Freelancer",
    objective: "Mastery",
    language: "English",
    subscription: "Free Trial",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Doe",
    email: "jhon@gmail.com",
    occupation: "Freelancer",
    objective: "Mastery",
    language: "English",
    subscription: "Monthly",
  },
  {
    id: 3,
    firstName: "Stive",
    lastName: "Doe",
    email: "jhon@gmail.com",
    occupation: "Freelancer",
    objective: "Mastery",
    language: "English",
    subscription: "Weekly",
  },
];

modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    const modal = document.querySelector(`#${modalId}`);
    modal.classList.add("modal-open");
  });
});

modalCloseButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("modal-open");
  });
});

function renderUsers(data) {
  tableContainer.innerHTML = null;

  data.forEach((user) => {
    const clone = tableItemTemplate.content.cloneNode(true);
    const userName = clone.querySelector(".user__name");
    const userEmail = clone.querySelector(".user__email");
    const userLanguage = clone.querySelector(".user__language");
    const userOccupation = clone.querySelector(".user__occupation");
    const userObjective = clone.querySelector(".user__objective");
    const userSubscription = clone.querySelector(".user__subscription");

    userName.textContent = `${user.firstName} ${user.lastName}`;
    userEmail.textContent = user.email;
    userLanguage.textContent = user.language;
    userOccupation.textContent = user.occupation;
    userObjective.textContent = user.objective;
    userSubscription.textContent = user.subscription;

    tableContainer.append(clone);
  });
}

formUserBtn.addEventListener("click", () => {
  users.push({
    id: 1,
    firstName: formFirstName.value,
    lastName: formLastName.value,
    email: formEmail.value,
    occupation: formOccupation.value,
    objective: formObjective.value,
    language: "English",
    subscription: formSubscription.value,
  });
  renderUsers(users);
});

renderUsers(users);
