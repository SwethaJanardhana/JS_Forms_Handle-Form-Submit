console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  console.log(dataObject);
  const ageBadnessSum = 10 + Number(dataObject.age);
  console.log(
    `The age-badness-sum of ${dataObject.firstName} is ${ageBadnessSum}`
  );

  event.target.reset();

  event.target.elements.firstName.focus();
});
