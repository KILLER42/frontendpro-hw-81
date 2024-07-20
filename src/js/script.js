(function () {
  const user = {
    name: 'Alex',
  };

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  Object.defineProperty(user, 'age', {
    value: 23,
    enumerable: false,
  });

  for (const key in user) {
    if (key) {
      console.log(user.name = 'Dog');
      console.log(user);
    }
  }
  console.log(Object.keys(user));

  Object.defineProperty(user, 'fullName', {
    get() {
      return this.name;
    },
    set(value) {
      const piece = value.split(' ');
      this.name = piece[0];
      this.surname = piece[1];
    },

  });

  user.fullName = 'Alex Smith';

  console.log('Name: ', user.name);
  console.log('Surname: ', user.surname);
  console.log(user);


  const user2 = {
    name: 'Alex',
    surname: 'Smith',
  };

  Object.freeze(user2);

  user2.name = 'Error';
  Object.defineProperty(user2, 'name', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Fart',
  });

  console.log(user2);
}());
