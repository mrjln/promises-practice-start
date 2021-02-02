const getSucceedingPromise = (message, ms) => {
  // TODO: return a new Promise here that succeeds in ms
};

const getFailingPromise = (errorMessage, ms) => {
  // TODO: return a new Promise here that fails in ms
};

const getRandomPromise = (id) => {
  // TODO: let promisShoulsSucceed = ...........
  // Maak gebruik van Math.rand()

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
    // TODO: create 50 objects with a "state: pending" and an id, push these objects onto the empty promises array

    const promise = getRandomPromise(id); // Randomly a failing or succeeding promise is assigned to "promise" nr i

    promise
      .then((resolved) => {
        //TODO: make the state of your promise "resolved" instead of "pending"
        //TODO: call the showPromises function again with the updated array of promises as argument (because 1 promise is now resolved)
        console.log(`msg: ${resolved}`);
      })
      .catch((error) => {
        //TODO: make the state of your promise "errored" instead of "pending"
        //TODO: call the showPromises function again with the updated array of promises as argument (because 1 promise is now errored)
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
