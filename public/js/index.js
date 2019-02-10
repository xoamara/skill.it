/* eslint-disable prefer-arrow-callback */
$(function () {

    function showUsers() {
        $.ajax({
            method: "GET",
            url: "/api/users"
        }).then((res) => {
            console.log(res);

            const tmplt = res.map(user => {
                let str = `
                <div class="box is-shadow">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content userHeader">
                                <p>
                                    <strong class="userName" id="${user.id}">
                                        ${user.username}</strong>
                                    <medium>
                                        <a>
                                            <span class="icon is-small">
                                                <i class="fas fa-envelope emailContact"></i>
                                            </span> &nbsp;
                                            <span class="icon is-small" data-id="${user.id}">
                                                <i class="fas fa-comments chatContact"></i>
                                            </span>
                                        </a>
                                    </medium>
                                    <br>
                                    ${user.description}
                                    <br>
                                    <br>
                                    <br>
                                </p>
                            </div>
                        </div>
                    </article>

                    <!-- Teaching/Learning -->
                    <div class="teaching">
                        <h6 class="is-size-6">Teaching</h6>
                        <div class="buttons are-small">
                    `;
                user.SkillToLearns.forEach(skill => {
                    str += `<a class="button">${skill.skillId}</a>`;
                });

                str += `
                        </div>
                    </div>
                    <br>

                    <div class="learning">
                        <h6 class="is-size-6">Learning:</h6>
                        <div class="buttons are-small">
                `;
                user.SkillToTeaches.forEach(skill => {
                    str += `<a class="button">${skill.skillId}</a>`;
                });
                str += `
                        </div>
                    </div>
                </div>
                `;

                return str;
            }).join("");

            $("#users").append($(tmplt));
        });
    }

    showUsers();

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