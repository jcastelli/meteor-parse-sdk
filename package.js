Package.describe({
  summary: "Load the latest Parse.com Javascript SDK into your Meteor project."
});

Package.on_use(function(api) {
  api.add_files('parse.js', ['client', 'server']);
});