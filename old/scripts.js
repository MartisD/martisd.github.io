let allAccordions = document.querySelectorAll(".accordion-button");
allAccordions[0].click();

$('#accordionFlush').on('show.bs.collapse', function () {
    $(this).data('isShowing', true);
});

$('#accordionFlush').on('hide.bs.collapse', function (event) {
    if (!$(this).data('isShowing')) {
        event.preventDefault();
    }

    $(this).data('isShowing', false);
});