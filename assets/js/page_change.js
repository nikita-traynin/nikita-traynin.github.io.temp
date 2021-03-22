function loadPage(page_name) {
    if(page_name == "") {
        page_name = "home";
    }
    $.get("/" + page_name + "/", function(data) {
        //remove the previous content
        $("#page-wrapper").remove();

        //add the current content
        $("nav").after(data);
    })
}

function openPage(page_name) {
    loadPage(page_name);

    //add page history
    window.history.pushState({type: "page", page_name: page_name}, '', `/${page_name}`);
}

//backwards function
window.onpopstate = function(ps) {
    if (ps.state.type == "page") {
        loadPage(ps.state.page_name);
    }
    else if (ps.state.type == "post") {
        loadPost(ps.state.post_path);
    }
}

function loadPost(post_path) {
    $.get(post_path, function(data) {
        //remove the previous content
        $("#page-wrapper").remove();

        //add the current content
        $("nav").after(data);
    })
}

function openPost(post_path) {
    loadPost(post_path);

    //add page history
    window.history.pushState({type: "post", post_path: post_path}, '', post_path);
}



