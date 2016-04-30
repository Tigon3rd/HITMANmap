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
    coords: [[-79.565, -158.950]],
	popupTitle: $.t("z:assassinations.label.plague") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.plague"),
	popup: $.t("z:assassinations.desc.plague2")
},{
    coords: [[-69.279, 7.943]],
	popupTitle: $.t("z:assassinations.label.errorPlane") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.errorPlane"),
	popup: $.t("z:assassinations.desc.errorPlane2")
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
    coords: [[-75.312, -37.914]/*Church*/, [-79.266, 46.318]/*Main Square Tower*/, [-82.344, 10.767]/*Sapienza Ruins*/],
	popupTitle: $.t("z:assassinations.label.sniper") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.sniper"),
	popup: $.t("z:assassinations.desc.sniper2") +$.t("z:feats.desc.tracking")
},{
    coords: [[-50.409, -154.841]/*Church*/, [-80.572, -32.542]/*Mansion*/, [-63.981, -157.874]/*Biolab*/, [-79.358, -11.525]/*Main Square Tower*/],
	popupTitle: $.t("z:assassinations.label.noEvidence") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.noEvidence"),
	popup: $.t("z:assassinations.desc.noEvidence2") + $.t("z:feats.desc.tracking")
},{
    coords: [[-39.910, -125]],
    popupTitle: $.t("z:assassinations.label.eyeForEye") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.eyeForEye"),
    popup: $.t("z:assassinations.desc.eyeForEye2")// + $.t("z:feats.desc.tracking")
},{
    coords: [[-80.920, -30.927]],
    popupTitle: $.t("z:assassinations.label.shocking") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.shocking"),
    popup: $.t("z:assassinations.desc.shocking2") + $.t("z:feats.desc.tracking")
},{
    coords: [[-79.475, -155.171]],
    popupTitle: $.t("z:assassinations.label.myNameIsHurl") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.myNameIsHurl"),
    popup: $.t("z:assassinations.desc.myNameIsHurl2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-66.801, 15.414]],
    popupTitle: $.t("z:assassinations.label.cliffDiving") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.cliffDiving"),
    popup: $.t("z:assassinations.desc.cliffDiving2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-68.962, 14.172]],
    popupTitle: $.t("z:assassinations.label.bogey") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.bogey"),
    popup: $.t("z:assassinations.desc.bogey2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-68.962, 14.172]],
    popupTitle: $.t("z:assassinations.label.bogey") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.bogey"),
    popup: $.t("z:assassinations.desc.bogey2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-79.726, -156.313]],
    popupTitle: $.t("z:assassinations.label.poisonVintage") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.poisonVintage"),
    popup: $.t("z:assassinations.desc.poisonVintage2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-68.286, 10.547]],
    popupTitle: $.t("z:assassinations.label.walkPlank") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.walkPlank"),
    popup: $.t("z:assassinations.desc.walkPlank2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-67.365, 17.743]],
    popupTitle: $.t("z:assassinations.label.weedingGarden") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.weedingGarden"),
    popup: $.t("z:assassinations.desc.weedingGarden2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-80.536, -35.793]],
    popupTitle: $.t("z:assassinations.label.45Therapy") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.45Therapy"),
    popup: $.t("z:assassinations.desc.45Therapy2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-80.501, -36.024]],
    popupTitle: $.t("z:assassinations.label.silenceMan") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.silenceMan"),
    popup: $.t("z:assassinations.desc.silenceMan2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-80.307, -30.937]],
    popupTitle: $.t("z:assassinations.label.imOnFire") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.imOnFire"),
    popup: $.t("z:assassinations.desc.imOnFire2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-80.438, -156.116]],
    popupTitle: $.t("z:assassinations.label.phantomMansion") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.phantomMansion"),
    popup: $.t("z:assassinations.desc.phantomMansion2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-65.234, -150.370]],
    popupTitle: $.t("z:assassinations.label.fatalReaction") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.fatalReaction"),
    popup: $.t("z:assassinations.desc.fatalReaction2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-64.406, -152.864]],
    popupTitle: $.t("z:assassinations.label.cavingIn") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.cavingIn"),
    popup: $.t("z:assassinations.desc.cavingIn2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-80.333, 28.575]],
    popupTitle: $.t("z:assassinations.label.proPain") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.proPain"),
    popup: $.t("z:assassinations.desc.proPain2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-79.797, -40.342]],
    popupTitle: $.t("z:assassinations.label.bbqSeason") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.bbqSeason"),
    popup: $.t("z:assassinations.desc.bbqSeason2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-62.006, -160.071]],
    popupTitle: $.t("z:assassinations.label.handsDirty") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.handsDirty"),
    popup: $.t("z:assassinations.desc.handsDirty2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-79.475, -158.840]],
    popupTitle: $.t("z:assassinations.label.bringDownSky") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.bringDownSky"),
    popup: $.t("z:assassinations.desc.bringDownSky2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-79.095, -148.821]],
    popupTitle: $.t("z:assassinations.label.whatPoison") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.whatPoison"),
    popup: $.t("z:assassinations.desc.whatPoison2")// + $.t("z:feats.desc.tracking")
}, {
    coords: [[-81.267, -158.533]],
    popupTitle: $.t("z:assassinations.label.teeTime") + $.t("assassinations.label"),
    label: $.t("z:assassinations.desc.teeTime"),
    popup: $.t("z:assassinations.desc.teeTime2")
}],

        //What's up with the label and desc thing. Shouldn't it show the label when you hover your mouse cursor over the icon and then show the desc in the bottom box when you click it. 
	challenges : [{
		coords: [[-68.318,-19.863]],
		label: $.t("z:challenges.label.delivery") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.delivery")
	},{
	    coords: [[-78.488, -140.317]],
		label: $.t("z:challenges.label.forHire") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.forHire")
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
	    coords: [[-79.319, -160.367]],
		label: $.t("z:challenges.label.memory") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.memory")
	},{
		coords: [[-64.225,46.296]],
		label: $.t("z:challenges.label.dr") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.dr") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.dr2")
	},{
		coords: [[-80.375,30.498]],
		label: $.t("z:challenges.label.crack") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.crack") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.crack2")
	},{
		coords: [[-66.434,18.864]],
		label: $.t("z:challenges.label.blend") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.blend") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.blend")
	},{
		coords: [[-80.956,-30.234]],
		label: $.t("z:challenges.label.lemon") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.lemon") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.lemon")
	},{
	    coords: [[-70.407, -171.595]],
		label: $.t("z:challenges.label.speedBoat") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.speedBoat")
	},{
	    coords: [[-79.890, -31.245]],
		label: $.t("z:challenges.label.memento") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.memento") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.memento2")
	},{
		coords: [[-79.588,-155.292]],
		label: $.t("z:challenges.label.love") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.love") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.love2")
	},{
		coords: [[-79.841,-155.709]],
		label: $.t("z:challenges.label.candle") +$.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.candle") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.candle2")
	},{
	    coords: [[-80.556, -156.896]],
		label: $.t("z:challenges.label.anybodyThere") + $.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.anybodyThere") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.anybodyThere2")
	},{
		coords: [[-59.834,-170.728]],
		label: $.t("z:challenges.label.peculiar") + $.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.peculiar") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.peculiar2")
	},{
		coords: [[-66.887,-43.879]],
		label: $.t("z:challenges.label.goodSon") + $.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.goodSon") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.goodSon2")
	},{
		coords: [[-79.192,-148.920]],
		label: $.t("z:challenges.label.kitchenHelp") + $.t("discovery.label"),
		popupTitle: $.t("z:challenges.label.kitchenHelp") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.kitchenHelp2")
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
		label: $.t("z:disguises.label.cyclist"),
		popupTitle: $.t("z:disguises.label.cyclist") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.cyclist") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-68.318,-19.863]],
		label: $.t("z:disguises.label.priest"),
		popupTitle: $.t("z:disguises.label.priest") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.priest") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.258,-160.620]],
		label: $.t("z:disguises.label.doc"),
		popupTitle: $.t("z:disguises.label.doc") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.doc") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-78.838,-83.079]],
		label: $.t("z:disguises.label.kitchen"),
		popupTitle: $.t("z:disguises.label.kitchen") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.kitchen") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-80.259,-130.583]],
		label: $.t("z:disguises.label.waiter"),
		popupTitle: $.t("z:disguises.label.waiter") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.waiter") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-80.244,-131.814]],
		label: $.t("z:disguises.label.dr"),
		popupTitle: $.t("z:disguises.label.dr") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.dr") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-63.534,32.113]],
		label: $.t("z:disguises.label.green"),
		popupTitle: $.t("z:disguises.label.green") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.green") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-63.229,31.827]],
		label: $.t("z:disguises.label.garden"),
		popupTitle: $.t("z:disguises.label.garden") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.garden") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.777,-156.357]],
		label: $.t("z:disguises.label.golf"),
		popupTitle: $.t("z:disguises.label.golf") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.golf") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.513,-159.192]],
		label: $.t("z:disguises.label.sec"),
		popupTitle: $.t("z:disguises.label.sec") + $.t(" ") + $.t("z:disguises.label.outfit"),
		popup: $.t("z:disguises.desc.sec") + $.t(" ") + $.t("z:disguises.label.needed"),
	},{
		coords: [[-79.513,-159.192]],
		label: $.t("z:disguises.label.clerk"),
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
