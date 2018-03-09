// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//load turbolinks

document.addEventListener('turbolinks:load', function(){
  //assign variables to specific elements

  const openProjectButton = document.getElementById('new-project-button')
  const projectPopover = document.getElementById('new-project-popover')

  //be sure the elements exist before listeners are added
  if(openProjectButton && projectPopover) {
    //attach event listener to the new project button
    openProjectButton.addEventListener('click', function(){
      //if the project popover class has 'is-hidden' class, remove it. otherwise return null

    return projectPopover.classList.contains('is-hidden') ?
    projectPopover.classList.remove('is-hidden') : null
  }, false)

  //attach a click event listener to our cancel button
  const cancelProjectPopover = document.getElementById('cancel-project-popover')
  cancelProjectPopover.addEventListener('click', function() {
    //if the user can see the cancel button then the .is-hidden class is not part of the
    //project pop-over and we can add it.
    return projectPopover.classList.add('is-hidden')
  }, false)
  }
});
