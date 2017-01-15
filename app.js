$(function() {

    var sPositions = localStorage.positions || "{}",
        positions = JSON.parse(sPositions);
    $('.savelayouttrigger').on('click', function() {
        $.each(positions, function(id, pos) {
            console.log(pos);
            $("#" + id).css(pos)
        });
    });

    $('.clearlayouttrigger').on('click', function() {
        localStorage.clear();
        location.reload();
    });

    var targets = [$(".rect").children(), $(".rect").children().children()];
    $.each(targets, function(index, value) {
        value.draggable({
            stop: function(event, ui) {
                positions[$(this)[0].id] = ui.position;
                localStorage.positions = JSON.stringify(positions);
            }
        });
        $(value).uniqueId();
        value.on('click', function() {
            $('.tooltip .top').text($(this).position().top);
            $('.tooltip .left').text($(this).position().left);
            $('.tooltip .right').text($(this).position().right);
            $('.tooltip .bottom').text($(this).position().bottom);
        });
    });
});
