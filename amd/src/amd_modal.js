define(['jquery', 'core/modal_factory'], function($, ModalFactory) {
  var trigger = $('#tool_simpletool_about');
  ModalFactory.create({
    title: 'About simpletool',
    body: '<p>An example from the MoodleBites Developers level 2 course.</p>',
    footer: 'Thank you for your interest',
  }, trigger)
  .done(function(modal) {
    // Do what you want with your new modal.
    modal.close();
  });
});