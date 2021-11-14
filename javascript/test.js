const a = {
  name: 'abc',
  greet: function () {
    console.log('hi', this.name);
  },
};

// a.greet();

// const referenceFunc = a.greet;

// referenceFunc.bind(a)();

setTimeout(a.greet.bind(a), 1000);
