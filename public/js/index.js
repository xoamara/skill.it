$(() => {
    // Function to close Bulma notifications
    $(document).on("click", ".notification > .delete", function() {
        // callback must be "function()" not "() =>" because we need access to "this"
        $(this).parent().remove();
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

    $(".cancelButton").on("click", (event) => {
        event.preventDefault;
        if ($(".cancelButton")) {
            window.location.replace("/");
        }
    });


    /* Render users to the page */
    function showUsers() {
        $.ajax({
            method: "GET",
            url: "/api/users"
        }).then((res) => {
            const tmplt = res.reverse().map(user => {
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
                                    <strong class="userName">
                                        ${user.username}</strong>
                                    <medium>
                                        <a href="/email"">
                                            <span class="icon is-small">
                                                <i class="fas fa-envelope emailContact name="${user.email}" ></i>
                                            </span>
                                        </a>
                                        <a href="#" data-id="${user.id}>
                                            <span class="icon is-small">
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

                user.skillsLearning.forEach(skill => {
                    $.ajax({
                        method: "GET",
                        url: `/api/skills/${skill.skillId}`,
                        async: false
                    }).done(res => {
                        str += `<a class="button" data-skillId="${res.id}">${res.name}</a>`;
                    });
                });

                str += `
                        </div>
                    </div>
                    <br>
                    <div class="learning">
                        <h6 class="is-size-6">Learning</h6>
                        <div class="buttons are-small">
                `;

                user.skillsTeaching.forEach(skill => {
                    $.ajax({
                        method: "GET",
                        url: `/api/skills/${skill.skillId}`,
                        async: false
                    }).done(res => {
                        str += `<a class="button" data-skillId="${res.id}">${res.name}</a>`;
                    });
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
});