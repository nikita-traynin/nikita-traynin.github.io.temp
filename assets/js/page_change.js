

function openPage(page_name) {
    $.get("/" + page_name + "/", function(data) {
        $("#page-wrapper").remove();
        $("nav").after(data);
    })
}




