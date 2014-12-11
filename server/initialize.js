Meteor.startup( function() {
  if (Messages.find().count() === 0) {
    var messageOne = {
      name: "Ben Bitdiddle",
      message: "Hello world!"
    };
    var messageTwo = {
      name: "Mary Hacker",
      message: "Grace Hopper rules"
    };
    Messages.insert(messageOne);
    Messages.insert(messageTwo);
  }
});