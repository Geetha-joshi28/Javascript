// currying transforming individual functions parameters

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

add(1, 2, 3);

const add1 = (a) => (b) => (c) => (a = b + c);

add(1)(2)(3);
