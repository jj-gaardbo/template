(function ($) {

	$(function () {'use strict';

    initRepeater();

    initPDFGenerator();

	});

  function initRepeater(){
      $("#repeater").createRepeater({
          showFirstItemToDefault: true,
      });
  }

  function initPDFGenerator(){
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#cmd').click(function () {
      var contentContainer = $("#content");
      contentContainer.append("<h3>"+$("#unitDescription").val()+"</h3>");
      contentContainer.append("<p>"+$("#unitAmount").val()+"</p>");
      contentContainer.append("<p>"+$("#unitPrice").val()+"</p>");
        doc.fromHTML(contentContainer.html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });
  }

})(jQuery);
