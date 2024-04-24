//js script goes here
$(function show() {
    //trigger modal #myModalInfos : when page loaded
    $("#myModalInfosBt").trigger('click');
    $("#myModalInfosBt").css('display', 'none');

    //menu for small device
    $("div.nav-item span.navbar-toggler-icon").click(function (e) {
        console.log($(this));
        console.log($(this).closest("div.nav-item").next());
        // $(this).closest("div.nav-item").addClass('top-0')
        $(this).closest("div.nav-item").next().toggleClass('d-none d-flex flex-column position-absolute top-100 end-0')

    })

})
