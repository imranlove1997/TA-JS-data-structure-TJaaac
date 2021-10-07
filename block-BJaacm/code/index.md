```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true and reason both have stored same value they are equal
- `user === newUser;` // true and reason both have stored same value they are equal
- `user.name === newUser.name;` // true and reason both have stored same value they are equal
- `user.name == newUser.name;` // true and reason both have stored same value they are equal
- `user.sibling == newUser.sibling;` // true and reason both have stored same value they are equal
- `user.sibling === newUser.sibling;` // true and reason both have stored same value they are equal
- `user.sibling == allBrothers;` // false and reason both have not stored same value they are not equal
- `user.sibling === allBrothers;` // false and reason both have not stored same value they are not equal
- `brothersCopy === allBrothers;` // false and reason both have not stored same value they are not equal
- `brothersCopy == allBrothers;` // false and reason both have not stored same value they are not equal
- `brothersCopy == user.sibling;` // true and reason both have stored same value they are equal
- `brothersCopy === user.sibling;` // true and reason both have stored same value they are equal
- `brothersCopy[0] === user.sibling[0];` // true and reason both have stored same value they are equal
- `brothersCopy[1] === user.sibling[1];` // true and reason both have stored same value they are equal
- `user.sibling[1] === newUser.sibling[1];` // true and reason both have stored same value they are equal
