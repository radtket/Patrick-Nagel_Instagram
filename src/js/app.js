import $ from "jquery";
import WOW from "wow.js";
import Instafeed from "instafeed.js";

new WOW().init();

$(() => {
	const userFeed = new Instafeed({
		clientId: "37d05d221b624bccaf6866e1c4428941",
		target: "instafeed",
		get: "user",
		userId: 8715856,
		accessToken: "8c1a27e762b24258b81026bb8ee57c09",
		links: true,
		limit: 8,
		sortBy: "most-recent",
		resolution: "standard_resolution",
		template:
			'<div class="col-sm-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
	});
	userFeed.run();
});
