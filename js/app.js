new WOW().init();

$(function() {

    //Set up instafeed
    var userFeed = new Instafeed({
        clientId: '37d05d221b624bccaf6866e1c4428941',
        target: 'instafeed',
        get: 'user',
        userId: 8715856,
        accessToken: '8715856.467ede5.4d03cba121bc4b3681c5313a2867165c',
        links: true,
        limit: 8,
        sortBy: 'most-liked',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    userFeed.run();

});

