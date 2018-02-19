jQuery('document').ready(function () {
    time = 60;
    var players;
    var scores;
    function uptime() {
        document.getElementById('time').innerHTML = time;
        time -= 1;
        if (time <= 0) {
            scores=prompt('Game OVer'+'<p>Name</p>')
        }
    }
    $('#ngame').click(function () {
        $('img').remove();

        time = 60;
        setInterval(uptime, 1000);
        $("div.field").append('<img src="1.jpg" id="block1"/>');
        $("div.field").append('<img src="2.jpg" id="block2"/>');
        $("div.field").append('<img src="3.jpg" id="block3"/>');
        score = 0;
        var img = document.querySelectorAll('img'),
        i = 0,
        max = img.length,
        left,
        top;
   
    for (; i < max; i += 1) {
        left = Math.round(Math.random() * ($("div.field").width() - 200)) + 'px';
        top = Math.round(Math.random() *  ($("div.field").height() - 200)) + 'px';
       
        img[i].style.left = left;
        img[i].style.top = top;
    }
    })
    $('div.field').on("click",'#block1',function (block) {
        score +=1;
        document.getElementById('score').innerHTML = score;
        $(this).remove();
        for (i = 0; i < (Math.random() * 3) ; i += 1) {
            switch (Math.floor(Math.random() * 4)) {
                case 1: $("div.field").append('<img src="1.jpg" id="block1"/>');
                    break;
                case 2: $("div.field").append('<img src="2.jpg" id="block2"/>');
                    break;
                case 3: $("div.field").append('<img src="3.jpg" id="block3"/>');
                    break;
            }
        }
        var img = document.querySelectorAll('img'),
       i = 0,
       max = img.length,
       left,
       top;

        for (; i < max; i += 1) {
            left = Math.round(Math.random() * ($("div.field").width() - 200)) + 'px';
            top = Math.round(Math.random() * ($("div.field").height() - 200)) + 'px';

            img[i].style.left = left;
            img[i].style.top = top;
        }
    });

    $('div.field').on("click", '#block2', function (block) {
        score +=2;
        document.getElementById('score').innerHTML = score;
        $(this).remove();
        for (i = 0; i < (Math.random() * 3) ; i += 1) {
            switch (Math.floor(Math.random() * 4)) {
                case 1: $("div.field").append('<img src="1.jpg" id="block1"/>');
                    break;
                case 2: $("div.field").append('<img src="2.jpg" id="block2"/>');
                    break;
                case 3: $("div.field").append('<img src="3.jpg" id="block3"/>');
                    break;
            }
        }
        var img = document.querySelectorAll('img'),
       i = 0,
       max = img.length,
       left,
       top;

        for (; i < max; i += 1) {
            left = Math.round(Math.random() * ($("div.field").width() - 200)) + 'px';
            top = Math.round(Math.random() * ($("div.field").height() - 200)) + 'px';

            img[i].style.left = left;
            img[i].style.top = top;
        }
    });

    $('div.field').on("click", '#block3', function (block) {
        score += 3;
        time -= 3;
        document.getElementById('score').innerHTML = score;
        $(this).remove();
        for (i = 0; i < (Math.random() * 3) ; i += 1) {
            switch (Math.floor(Math.random() * 4)) {
                case 1: $("div.field").append('<img src="1.jpg" id="block1"/>');
                    break;
                case 2: $("div.field").append('<img src="2.jpg" id="block2"/>');
                    break;
                case 3: $("div.field").append('<img src="3.jpg" id="block3"/>');
                    break;
            }
        }
        var img = document.querySelectorAll('img'),
       i = 0,
       max = img.length,
       left,
       top;

        for (; i < max; i += 1) {
            left = Math.round(Math.random() * ($("div.field").width() - 200)) + 'px';
            top = Math.round(Math.random() * ($("div.field").height() - 200)) + 'px';

            img[i].style.left = left;
            img[i].style.top = top;
        }
    });
})