# Meteor Messages Application

This application is a demonstration of some of the basic principles and components of Meteor.

## Things of Note
### Directory Structure
We ditched the basic 3 files that are created by default on a new Meteor application and created three directories: `/client`, `/lib`, and `/server`.

The `/lib` and `/server` directories are sparse, containing one file each. The `server` directory includes `initialize.js` to generate some dummy data when the collection is empty. The `lib` directory includes one file, `messages.js` that has just a single line where we declare a new Mongo collection.

The `/client` directory has three files, `app.js`, `body.html`, and `head.html`. `head.html` is very basic and could technically be included in `body.html`, but to follow Meteor's recommended practice we make it a separate file.

### The logic
`body.html` and `app.js` are the key components of our application. This application does not use any templates; all of the HTML is written within the HTML `body`. `body.html` includes 2 `input` elements, a button, and then an `h4` and `p` for every message. To make this work, we iterate through the messages like so

    {{ #each messages }}
    	<h4>{{ name }}</h4>
    	<p>{{ message }}</p>
    {{ /each }}

To wire it up we need 1 helper, `messages`

    Template.body.helpers({
      messages: function () {
        return Messages.find();
      }
    });

The reason we don't need template helpers for `name` and `message` is because Blaze picks up those from the named keys of each `Message` object.

Finally to add new messages we wire up an event to get the input values and insert them into the collection

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
 

### Improvements
Obviously this is a super simple app. There's no styling, no accounts, no security about changing message values, etc. Maybe we'll improve upon this in future meetups, or maybe not! Hopefully everyone learned something from building this from scratch.