$(document).ready(function () {
    var content_width = $(window).width() - 200;
    var content_width_full = $(window).width();
    var time_interval = 5000; // 5s

    setInterval(function () {

        $.ajax({
            //dataType: 'json',
            type: "post",
            url: "assets/php/alarms.php",

            success: function (data) {


            },
            error: function (){
                alert('Could not load data');
            }
        });
    }, time_interval);

    $('.content-wrapper').load('assets/php/xml_function_dashboard.php');
    var set_interval = setInterval(function () {
        $('.content-wrapper').load('assets/php/xml_function_dashboard.php');
    },time_interval);



    $('.content-wrapper').css({width:content_width});

    $('#btn-toggle-nav').click(function () {

        $('.verticalNav').toggle(600);

        $('.content-wrapper ').toggleClass('zoom-content-wrapper');

        $('#btn-toggle-nav').toggleClass('btn-position');
        $('#btn-toggle-nav').toggleClass('zoom-button');

        //$('#table-wrapper').toggleClass('container-fluid');
        $('#table-wrapper').toggleClass('tableAlert-wrapper');
        //$('#table-wrapper').toggleClass('container');
        //$('#table-wrapper').css({transition: all 0.5s ease-in-out;});
    });

    function button_click(id, wrapperId, file, event)
        {
            event.preventDefault();
            $('.activeNav').removeClass('activeNav');
            $(id).addClass('activeNav');
            $(wrapperId).load(file);
           
        }

    function button_click_refresh(id, wrapperId, file,set_interval,interval, event)
    {
        event.preventDefault();
        $('.activeNav').removeClass('activeNav');
        $(id).addClass('activeNav');
        $(wrapperId).load(file);

        clearInterval(set_interval);
        set_interval = setInterval(function () {
            $('.content-wrapper').load(file);
        },interval);
        return set_interval;
    }


    //button_click('#dashboard', '.content-wrapper', 'assets/php/xml_function_dashboard.php');


    $('#dasboard').click(function (event)
    {
        set_interval = button_click_refresh('#dasboard', '.content-wrapper', 'assets/php/xml_function_dashboard.php',set_interval, time_interval, event);
    });

    $('#alerts').click(function (event)
    {
        set_interval = button_click_refresh('#alerts', '.content-wrapper', 'assets/php/alert_table_template.php',set_interval, time_interval, event);

    });

    $('#display_trends').click(function (event)
    {
        clearInterval(set_interval);
        button_click('#display_trends', '.content-wrapper', 'assets/php/graph.php', event);
    });

    $('#mutundwe').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/mutundwe.php',set_interval, time_interval, event);
       // button_click('#category', '.content-wrapper', 'assets/php/mutundwe.php', event);
    });

    $('#uganda').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/uganda.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/uganda.php', event);
    });

    $('#zambia, #zambiaDC').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/zambia.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/zambia.php', event);
    });

    $('#swaziland, #swazilandDC').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/swaziland.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/swaziland.php', event);
    });

    $('#plot77').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/plot77.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/plot77.php', event);
    });

    $('#mbuyaGround').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/mbuya_ground_floor.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/mbuya_ground_floor.php', event);
    });

    $('#mbuyaSecond').click(function (event)
    {
        set_interval = button_click_refresh('#category', '.content-wrapper', 'assets/php/mbuya_second_floor.php',set_interval, time_interval, event);
        //button_click('#category', '.content-wrapper', 'assets/php/mbuya_second_floor.php', event);
    });



});
