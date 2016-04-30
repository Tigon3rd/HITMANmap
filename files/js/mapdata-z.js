$(document).on("loadMapdata", function () {
	window.map_path   = 'z';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [-70,-20];
	window.map_mZoom  = 7;

	processData({

	weapons: [{
		coords: [[-79.171,-160.159]],
		label: $.t("z:weapons.label.circum"),
		popup: $.t("z:weapons.desc.circum")
	},{
		coords: [[-81.270,-21.896]],
		label: $.t("z:weapons.label.folding"),
		popup: $.t("z:weapons.desc.ConcealableLethalMeleeThrowable")
	},{
		coords: [[-80.583,-32.410]],
		label: $.t("z:weapons.label.screwdriver"),
		popup: $.t("z:weapons.desc.ConcealableLethalMeleeThrowable")
	}],


	item: [{
		coords: [[-79.572,-157.126]],
		label: $.t("z:item.label.letter"),
		popup: $.t("z:item.desc.letter")
	},{
		coords: [[-78.431,-140.592]],
		label: $.t("z:item.label.golfball"),
		popup: $.t("z:item.desc.golfball")
	},{
		coords: [[-78.923,-82.079]],
		label: $.t("z:item.label.menkeycard"),
		popup: $.t("z:item.desc.menkeycard")
	},{
		coords: [[-79.515,-130.573], [-66.896,22.983], [-80.684,-32.366]],
		label: $.t("z:item.label.ratpos"),
		popup: $.t("z:item.desc.ratpos")
	},{
		coords: [[-79.740,-32.596]],
		label: $.t("z:item.label.safekobi"),
		popup: $.t("z:item.desc.safekobi")
	},{
		coords: [[-80.307,30.476]],
		label: $.t("z:item.label.dna"),
		popup: $.t("z:item.desc.dna")
	},{
		coords: [[-80.403,27.729]],
		label: $.t("z:item.label.toytank"),
		popup: $.t("z:item.desc.toytank")
	},{
		coords: [[-65.206,-146.755]],
		label: $.t("z:item.label.remoteex"),
		popup: $.t("z:item.desc.remoteex")
	},{
		coords: [[-79.711,-89.989]],
		label: $.t("z:item.label.medic"),
		popup: $.t("z:item.desc.medic")
	},{
		coords: [[-79.683,-96.010]],
		label: $.t("z:item.label.masterkey"),
		popup: $.t("z:item.desc.masterkey")
	},{
		coords: [[-50.289,27.004]],
		label: $.t("z:item.label.dongle"),
		popup: $.t("z:item.desc.dongle")
	}],


  feats: [{
		coords: [[-75.952,-106.346]],
		popupTitle: $.t("z:feats.label.fly") +$.t("feat.label"),
		label: $.t("a:feats.label.fly"),
		popup: $.t("a:feats.desc.fly") +$.t("a:feats.desc.tracking")
	}],

assassinations: [{
	coords: [[-81.210,-158.610]],
	label: $.t("z:assassinations.label.teetime") +$.t("assassinations.label"),
	popup: $.t("z:assassinations.desc.teetime")
},{
	coords: [[-79.513,-159.192]],
	popupTitle: $.t("z:assassinations.label.plage") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.plage"),
	popup: $.t("z:assassinations.desc.plage2")
},{
	coords: [[-68.816,8.416]],
	popupTitle: $.t("z:assassinations.label.errorplane") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.errorplane"),
	popup: $.t("z:assassinations.desc.errorplane2")
},{
	coords: [[-39.910,-110]],
	popupTitle: $.t("z:assassinations.label.silent") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.silent"),
	popup: $.t("z:assassinations.desc.silent2")+$.t("z:feats.desc.tracking")
},{
	coords: [[-39.910,-115]],
	popupTitle: $.t("z:assassinations.label.silentsuit") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.silentsuit"),
	popup: $.t("z:assassinations.desc.silentsuit2")+$.t("z:feats.desc.tracking")
},{
	coords: [[-39.910,-120]],
	popupTitle: $.t("z:assassinations.label.suitOnly") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.suitOnly"),
	popup: $.t("z:assassinations.desc.suitOnly2")+$.t("z:feats.desc.tracking")
},{
	coords: [[-39.910,-125]],
	popupTitle: $.t("z:assassinations.label.sniper") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.sniper"),
	popup: $.t("z:assassinations.desc.sniper2") +$.t("z:feats.desc.tracking")
},{
	coords: [[-39.910,-130]],
	popupTitle: $.t("z:assassinations.label.noEvidence") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.noEvidence"),
	popup: $.t("z:assassinations.desc.noEvidence2") +$.t("z:feats.desc.tracking")
},{
	coords: [[-80.961,-32.366]],
	popupTitle: $.t("z:assassinations.label.shocking") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.shocking"),
	popup: $.t("z:assassinations.desc.shocking2") +$.t("z:feats.desc.tracking")
}],


	challenges : [{
		coords: [[-68.318,-19.863]],
		label: $.t("z:challenges.label.delivery") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.delivery")
	},{
		coords: [[-78.447,-141.812]],
		label: $.t("z:challenges.label.forehire") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.forehire")
	},{
		coords: [[-79.537,-175.979]],
		label: $.t("z:achievements.label.Kraken") + $.t("discovery.label"), //hover
		popupTitle: $.t("z:achievements.label.Kraken2"), //title
		popup: $.t("z:achievements.desc.Kraken") + $.t(' <a target="_blank" href="https://www.youtube.com/watch?v=NGLNc3Tq15I">[Video]</a> ')
	},{
		coords: [[-78.460,-141.427]],
		label: $.t("z:challenges.label.safehouse") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.safehouse")
	},{
		coords: [[-79.347,-160.027]],
		label: $.t("z:challenges.label.memory") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.memory")
	},{
		coords: [[-64.225,46.296]],
		label: $.t("z:challenges.desc.dr") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.dr") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.dr2")
	},{
		coords: [[-80.375,30.498]],
		label: $.t("z:challenges.desc.crack") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.crack") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.crack2")
	},{
		coords: [[-66.434,18.864]],
		label: $.t("z:challenges.desc.blend") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.blend") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.blend")
	},{
		coords: [[-80.956,-30.234]],
		label: $.t("z:challenges.desc.lemon") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.lemon") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.lemon")
	},{
		coords: [[-69.014,-173.584]],
		label: $.t("z:challenges.desc.boat") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.boat")
	},{
		coords: [[-80.942,-31.454]],
		label: $.t("z:challenges.desc.momento") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.momento") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.momento2")
	},{
		coords: [[-79.588,-155.292]],
		label: $.t("z:challenges.desc.love") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.love") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.love2")
	},{
		coords: [[-79.841,-155.709]],
		label: $.t("z:challenges.desc.candle") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.candle") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.candle2")
	},{
		coords: [[-80.516,-157.006]],
		label: $.t("z:challenges.desc.anybodythere") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.anybodythere") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.anybodythere2")
	},{
		coords: [[-59.834,-170.728]],
		label: $.t("z:challenges.desc.peculiar") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.peculiar") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.peculiar2")
	},{
		coords: [[-66.887,-43.879]],
		label: $.t("z:challenges.desc.goodson") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.goodson") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.goodson2")
	},{
		coords: [[-79.192,-148.920]],
		label: $.t("z:challenges.desc.kitchenhelp") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.kitchenhelp") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.kitchenhelp2")
	}],


	achievements : [{
		coords: [[-79.319,-175.979]],
		label: $.t("z:achievements.label.Kraken"), //hover
		popupTitle: $.t("z:achievements.label.Kraken2"), //title
		popup: $.t("z:achievements.desc.Kraken") + $.t(' <a target="_blank" href="https://www.youtube.com/watch?v=NGLNc3Tq15I">[Video]</a> ')
	}],

//Only one to keep track of what you need chamelion Challenge?
	disguises: [{
		coords: [[-68.923,-17.611]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.cyclist") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.cyclist") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-68.318,-19.863]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.Priest") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.Priest") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.258,-160.620]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.doc") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.doc") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-78.838,-83.079]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.kitchen") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.kitchen") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-80.259,-130.583]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.waiter") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.waiter") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-80.244,-131.814]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.dr") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.dr") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-63.534,32.113]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.green") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.green") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-63.229,31.827]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.garden") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.garden") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.777,-156.357]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.golf") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.golf") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.513,-159.192]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.sec") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.sec") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.513,-159.192]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.clerk") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.clerk") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.513,-159.192]],
		label: $.t("z:disguises.label.outfit"),
		popupTitle: $.t("z:disguises.label.red") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.red") + $.t(" ") + $.t("z:disguises.label.needed"),
	}]

//	Shop Keeper - Pick a shop
//	Bohemian Man - Top of tower in city Square
//	Street Performer - By the docks
//	Private Investigator - Sleeping on a bench in one of the back alleys, can be recognized by the white dot always above his head
//
//	Butler - Mansion Entrance
//	Housekeeping - In Mansion - Uniform in laundry area too
//	Mansion Staff - In Mansion
//	Bodyguard - Mansion/Streets
//	Mansion Chef - Mansion
//
//	Lab Security - In/around the lab
//	Lab Technician - In/around the lab, in the morgue
//	Hazmat Suit - In Lab Area
//	Waiter - City Square
//
});
	window.allLayers = [
		markers.weapons,
		markers.feats,
		markers.achievements,
		markers.challenges,
		markers.assassinations,
		markers.item,
		markers.disguises
		];
});
