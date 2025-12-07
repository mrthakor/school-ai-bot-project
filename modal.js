$(document).ready(function () {

    // If no language selected before, show modal
  //  if (!localStorage.getItem("selectedLanguage")) {
        $("#languageModal").modal("show");
   // }

    // When user clicks any language button
    $(".lang-btn").click(function () {
        const lang = $(this).data("lang");

        // Save selection
        localStorage.setItem("selectedLanguage", lang);

        // Close modal
        $("#languageModal").modal("hide");

        // Optional: show selected language in console
        console.log("Language Selected:", lang);
    });

});