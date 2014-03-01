This package adds the Parse SDK to your Meteor.js project – www.parse.com.

Currently loads the SDK on the client and server.

## Install the package with [Meteorite](https://atmosphere.meteor.com/wtf/app)

`mrt add parse-sdk`

## Usage (Coffeescript)

You'll have to initialize before you can do anything else. Parse will give you this line when you fire up your account/app.

```coffee
Parse.initialize "your-app-ID", "your-js-id"
```

You can verify Parse is doing what it's supposed to with the test code they provide:

```coffee
Meteor.startup ->
	TestObject = Parse.Object.extend("TestObject")
	testObject = new TestObject()
	testObject.save(foo: "bar").then (object) ->
		alert "yay! it worked"
	return
```

## The future
Being that I'm still very new to Meteor and giving back via contrib, I'm more than open to pull requests, Issues, feature requests etc. via GitHub. Else, feel free to shout at me on Twitter @joe_castelli.

I'll likely insist this repo remain solely a package of the most recent Parse SDK, and will be releasing a separate package consisting of helpers and such that others may likely want to use.

### Links
-  [Parse documentation](https://parse.com/docs)
-  [A good read on security](https://parse.com/questions/javascript-sdk-security)


#### NOTE
*I'm not using this in the wild just yet, but will update this README and/or package as often as necessary.*