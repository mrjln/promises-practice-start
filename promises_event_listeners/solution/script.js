const getSucceedingPromise = (message, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(message), ms);
  });

const getFailingPromise = (errorMessage, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(errorMessage), ms);
  });

const getRandomPromise = (id) => {
  let promiseShouldSucceed = Math.random() > 0.5;
  let randomMillisecond = Math.round(Math.random() * 5000);
  if (promiseShouldSucceed) {
    return getSucceedingPromise(
      `Promise ${id} succeeded in ${randomMillisecond} ms.`,
      randomMillisecond
    );
  } else {
    return getFailingPromise(
      `Promise ${id} failed in ${randomMillisecond} ms.`,
      randomMillisecond
    );
  }
};

const createPromiseElement = (promise) => {
  const div = document.createElement("div");
  div.classList = promise.state;
  div.innerHTML = `Promise: ${promise.id}`;
  return div;
};

const showPromises = (promises) => {
  const promisesDiv = document.querySelector(".promises");
  promisesDiv.innerHTML = "";
  const promisesElements = promises.map(createPromiseElement);
  promisesElements.forEach((element) => promisesDiv.appendChild(element));
};

let i = 0;
const promises = [];
const add50PromiseHandler = () => {
  while (i <= 50) {
    let id = i;
    promises.push({
      state: "pending",
      id,
    });

    showPromises(promises);

    const promise = getRandomPromise(id);
    promise
      .then((resolved) => {
        console.log(`msg: ${resolved}`);
        promises[id].state = "resolved";
        showPromises(promises);
      })
      .catch((error) => {
        promises[id].state = "errored";
        showPromises(promises);
      });
    i++;
  }
};

const start = () => {
  document
    .querySelector("button")
    .addEventListener("click", add50PromiseHandler);
};

document.addEventListener("DOMContentLoaded", () => {
  start();
});
