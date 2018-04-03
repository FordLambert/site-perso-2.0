// custom  jquery code //
$(function () {

    // alert popup if submit on the contact or movies page//
    if ($(".contact-page" ).length || $(".prog-page" ).length) {
        document.addEventListener("submit", function() {
            alert("Message envoyé avec succès !");
        });
    }

    // Better looking checkbox, credit to travislaynewilson //
    if ($(".prog-page" ).length) {
        $('.button-checkbox').each(function () {
            // Settings
            var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

            // Event Handlers
            $button.on('click', function () {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });

            // Actions
            function updateDisplay() {
                var isChecked = $checkbox.is(':checked');
                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");
                // Set the button's icon
                $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);
                // Update the button's color
                if (isChecked) {
                    $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
                }
                else {
                    $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
                }
            }
            
            // Initialization
            function init() {
                updateDisplay();
                // Inject the icon if applicable
                if ($button.find('.state-icon').length == 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
                }
            }
            init();
        });
    }

    // Progress bar on article page only //
    if ($(".article-page" ).length) {

        function updateProgress(num1, num2){
          var percent = Math.ceil( num1 / num2 * 100 ) + '%';
          document.getElementById('progress-bar').style.width = percent;
        }

        window.addEventListener('scroll', function(){
          var top = window.scrollY;
          var height = document.body.getBoundingClientRect().height - window.innerHeight;
          updateProgress(top, height);
        });
    }

    //checking on movie page if we have a "day" parameter and open the right tab//
    if ($(".prog-page" ).length) {
        if(window.location.href.indexOf("#day") > -1) {
            $("#day1").prop("checked", "false");
        }
        if(window.location.href.indexOf("#day2") > -1) {
            $("#day2").prop("checked", "true");
        } else if (window.location.href.indexOf("#day3") > -1) {
            $("#day3").prop("checked", "true");
        } else if (window.location.href.indexOf("#day4") > -1) {
            $("#day4").prop("checked", "true");
        }
    }
});