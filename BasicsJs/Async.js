// Javascript is synchronous, single thread

// Async- sto(setTimeout),si(setInterval),promise, async, await
function first() {
  console.log(1);
}
function second(cfn) {
  setTimeout(() => {
    console.log(2);
    cfn(fn);
  }, 0);
}
function third(fourth) {
  console.log(3);
}
function fourth() {
  console.log(4);
}
function fifth() {
  console.log(4);
}
function sixth() {
  console.log(4);
}

first();
second(third);

// callback is not usable for project...

function callbackHell() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
          setTimeout(() => {
            setTimeout(() => {
              setTimeout(() => {
                setTimeout(() => {
                  setTimeout(() => {
                    setTimeout(() => {
                      setTimeout(() => {
                        setTimeout(() => {
                          setTimeout(() => {
                            setTimeout(() => {
                              setTimeout(() => {
                                setTimeout(() => {}, 1000);
                              });
                            }, 1000);
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 100);
  }, 0);
}
callbackHell();

// prommise we use to ovvercome callback hell
// Promises is an object
// it has three state pending,resolve,reject

// executor

const addPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i will hate you");
  }, 5000);
});
console.log(addPromise);

// every promise method return promise itself

// consume promise
addPromise
  .then((result) => {
    console.log(result);
    return "love you";
  })
  .then((first) => {
    console.log(first);
    return [1, 2, 3];
  })
  .then((second) => {
    console.log(second);
  });

/* promise examples-------- */

function found(isSuccess) {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve("done");
    } else {
      reject("error");
    }
  });
}

found(false)
  .then((result) => {
    console.log(result);
  })
  .catch((fail) => {
    console.log(fail);
  });

found(true).then((result) => {
  console.log(result);
});

found(false).then((result) => {
  console.log(result);
});

/* ------------ expect below output based on async and sync flow ---------------------- */

const add = () => {
  return { name: "geetha" };
};

console.log("hi there"); // 1

setTimeout(() => {
  console.log("first"); //8
}, 1000);

setTimeout(() => {
  console.log("something"); //7
}, 500);

function found(isSuccess) {
  console.log("start"); // 2
  return new Promise((resolve, reject) => {
    console.log("second"); // 3
    if (isSuccess) {
      resolve("done");
    } else {
      reject("error");
    }
  });
}

found(false)
  .then((result) => {
    console.log(result); //6
  })
  .catch((fail) => {
    console.log(fail);
  });

console.log("hero john"); //4
console.log(add()); //5

/* ------------ real promises  -------------- */

/* --------------------------------------------------- */
function data() {
  return new Promise((resolve) => {
    resolve(fetch("https://jsonplaceholder.typicode.com/posts/"));
  });
}

data()
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    console.log("promise", res);
  });
/*  =====================================  */
// crud Operations

// create - post
// read - get
// update - patch, post
// delete - delete
// promises we use f0o sidEffects, api calls
function show() {
  return fetch("https://jsonplaceholder.typicode.com/posts/");
}

show()
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  });

/*----------- Async await ----------------*/

async function show() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await result.json();
  return data;
}

show().then((response) => {
  const modified = response.slice(0, 3).map((item) => {
    return item.title;
  });

  console.log(modified);
  // console.log('async response', response);
});
