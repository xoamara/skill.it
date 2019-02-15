$(() => {
    // Function to close Bulma notifications
    $(document).on("click", ".notification > .delete", function() {
        // callback must be "function()" not "() =>" because we need access to "this"
        $(this).parent().remove();
    });
});