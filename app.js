setInterval(function() {
    var rand1 = Math.floor(Math.random() * 450);
    var rand2 = Math.floor(Math.random() * 450);
    $('.child').animate({ top: rand1, left: rand2 }, 1000);
}, 1000);