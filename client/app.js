Template.body.helpers({
  messages: function () {
    return Messages.find();
  }
});

Template.body.events({
  'click button': function (event, template) {
    var name = template.find("#nameInput").value;
    var msg = template.find("#messageInput").value;
    Messages.insert({
      name: name,
      message: msg
    });
  }
});