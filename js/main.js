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
    $('#cmd').click(function () {
      var contentContainer = $("#content");
      contentContainer.append("<h3>"+$("#unitDescription").val()+"</h3>");
      contentContainer.append("<p>"+$("#unitAmount").val()+"</p>");
      contentContainer.append("<p>"+$("#unitPrice").val()+"</p>");
			var pdf = new jsPDF("p", "pt", "a4");
			pdf.addHTML(contentContainer, function () {
		     pdf.save('sample-file.pdf');
		 	});
    });
  }

})(jQuery);
