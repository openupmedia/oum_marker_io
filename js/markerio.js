"use strict";

(function(window, drupalSettings) {

  // get Marker.io destination
  var destination = drupalSettings.markerio.destination;

  // get e-mail and username of authenticated user, if it's available.
  var user_email = undefined;
  if (drupalSettings.markerio.user_email) {
    var user_email = drupalSettings.markerio.user_email;
  }
  var user_name = undefined;
  if (drupalSettings.markerio.user_name) {
    var user_name = drupalSettings.markerio.user_name;
  }

  // Initialize Marker.io
  window.markerConfig = {
    destination: destination,
    reporter: {
      email: user_email,
      fullName: user_name,
    }
  };

  !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);

})(window, drupalSettings);
