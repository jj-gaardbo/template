(function ($) {

	$(function () {'use strict';

    initRepeater();

	});

  function initRepeater(){
      $("#repeater").createRepeater({
          showFirstItemToDefault: false,
      });
  }

})(jQuery);
