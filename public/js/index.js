/* eslint-disable prefer-arrow-callback */
$(function () {

    $(".searchDiv").on("click", ".button", function (event) {
        event.preventDefault();

        console.log("I've been clicked!");

        const skill = $("#skillSearch").val().trim();

        console.log(skill);

        $.ajax({
            method: "GET",
            url: "/api/skills/" + skill,
        }).then(function (res) {
            console.log(res);
        });

    });

});