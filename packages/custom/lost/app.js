'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Lost = new Module('lost');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Lost.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Lost.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Lost.menus.add({
    title: 'Lost & Found',
    link: 'lost',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Lost.aggregateAsset('css', 'lost.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Lost.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Lost.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Lost.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Lost;
});
