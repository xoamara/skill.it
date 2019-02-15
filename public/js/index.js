$(() => {
    // Function to close Bulma notifications
    $(document).on("click", ".notification > .delete", function() {
        // callback must be "function()" not "() =>" because we need access to "this"
        $(this).parent().remove();
    });

    $("#searchButton").on("click", (event) => {
        event.preventDefault();

        const searchForm = $("#searchForm");
        const skill = $("#skillSearch").val().trim();

        searchForm.attr("action", "/api/users/skill/" + skill);

        searchForm.submit();
    });
});