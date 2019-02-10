/* eslint-disable prefer-arrow-callback */
$(function () {

    $.ajax({
        method: "GET",
        url: "/"
    }).then((res) => {
        console.log(res);
    });


    $(".searchDiv").on("click", ".button", (event) => {
        event.preventDefault();

        console.log("I've been clicked!");

        const skill = $("#skillSearch").val().trim();

        console.log(skill);

        $.ajax({
            method: "GET",
            url: "/api/skills/" + skill,
        }).then((res) => {
            console.log(res);
        });

    });

    $("#signupSubmit").on("click", (event) => {
        event.preventDefault();
        if ($(".checkbox")) {
            const username = $("#usernameInput").val().trim();
            const email = $("#emailInput").val().trim();
            const password = $("#passwordInput").val().trim();
            const description = $("#aboutMe").val();

            console.log(username, email, password, description);

            $.post("/register", {
                username: username,
                email: email,
                password: password,
                description: description
            }).then((res) => {
                console.log(res);
            });
        }
    });

    $("#loginSubmit").on("click", (event) => {
        event.preventDefault();
        const username = $("usernameInput").val().trim();
        const password = $("passwordInput").val().trim();

        console.log(username, password);

        $.post("/login", {
            username: username,
            password: password
        }).then((res) => {
            console.log(res);
            window.location.replace("/");
        });
    });

    $(".cancelButton").on("click", (event) => {
        event.preventDefault;
        if ($(".cancelButton")) {
            window.location.replace("/");
        }
    });

});