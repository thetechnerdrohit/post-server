const object1 = {};

 Object.defineProperties(object1, {
    name: {
      value: 'maze',
      writable: true,
    },
    age: {
      value: 25
    },
  });
  console.log(object1['age'])

  Object.defineProperty(object1, 'name',  {
    value: 'maze',
    writable: false,
  });
  
  
  console.log(object1.name);