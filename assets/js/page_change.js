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
    window.history.pushState({page_name}, '', `/${page_name}`);
}

//backwards function
window.onpopstate = function(ps) {
    loadPage(ps.state.page_name);
}




