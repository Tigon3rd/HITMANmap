$(document).on("loadMapdata", function () {
	window.map_path   = 'a';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [-70,-20];
	window.map_mZoom  = 6;

	processData({

	weapons: [{
	    coords: [[-51.028,-70.005],[-61.898,-61.1285]],
	    label: $.t("a:weapons.label.battleaxe"),
	    popup: $.t("a:weapons.desc.battleaxe")
	},{
		coords: [[-63.549,-60.908],[-30.902,-54.053],[-81.518,-104.941],[-81.275,-90.923],[-77.206,-150.381],[-65.713,-81.079]],
		label: $.t("a:weapons.label.crowbar"),
		popup: $.t("a:weapons.desc.crowbar")
	},{
	    coords: [[-19.994, -101.096]],
		label: $.t("a:weapons.label.policeBaton"),
		popup: $.t("a:weapons.desc.policeBaton")
	},{
		coords: [[8.798,-109.863]],
		label: $.t("a:weapons.label.gulfClub"),
		popup: $.t("a:weapons.desc.gulfClub")
	},{
		coords: [[-64.511,-70.532]],
		label: $.t("a:weapons.label.sword"),
		popup: $.t("a:weapons.desc.sword")
	},{
		coords: [[-17.120,-94.219]],
		label: $.t("a:weapons.label.firePoker"),
		popup: $.t("a:weapons.desc.firePoker")
	},{
		coords: [[-17.120,-94.219],[-33.138,-56.909],[-82.743,-86.045],[-82.875,-123.047],[-74.044,-71.060],[-70.081,-92.505],[-69.411,-124.937],[-70.671,-108.105],[-63.685,-152.227]],
		label: $.t("a:weapons.label.wrench"),
		popup: $.t("a:weapons.desc.wrench")
	},{
		coords: [[-31.429,-111.270],[-67.136,-63.545],[-69.885,-80.859],[-68.657,-92.681],[-73.503,-96.724],[-67.136,-148.887],[-69.427,-123.882]],
		label: $.t("a:weapons.label.screwdriver"),
		popup: $.t("a:weapons.desc.screwdriver")
	},{
		coords: [[-44.528,-138.779],[-73.886,-99.536]],
		label: $.t("a:weapons.label.hammer"),
		popup: $.t("a:weapons.desc.hammer")
	},{
	    coords: [[-82.443,-85.078],[-83.293,-108.193],[-83.048,-117.993],[-79.695,-112.544],[-81.979,-101.470],[-43.676,-147.788]],
		label: $.t("a:weapons.label.fireExtinguisher"),
		popup: $.t("a:weapons.desc.fireExtinguisher")
	},{
		coords: [[-80.364,-85.869],[-84.315,-112.720],[-69.006,-125.464],[-82.160,-89.429]],
		label: $.t("a:weapons.label.fireAxe"),
		popup: $.t("a:weapons.desc.fireAxe")
	},{
		coords: [[-77.118,-151.172]],
		label: $.t("a:weapons.label.brick"),
		popup: $.t("a:weapons.desc.brick")
	},{
		coords: [[-82.704,-95.933],[-83.677,-121.729],[-70.215,-115.532]],
		label: $.t("a:weapons.label.kitchenKnife"),
		popup: $.t("a:weapons.desc.kitchenKnife")
	},{
		coords: [[-83.855,-93.911]],
		label: $.t("a:weapons.label.bartoli12G"),
		popup: $.t("a:weapons.desc.bartoli12G")
	},{
	    coords: [[-83.905, -93.911], [3.996, -63.984]],
		label: $.t("a:weapons.label.bartoli75R"),
		popup: $.t("a:weapons.desc.bartoli75R")
	},{
		coords: [[-83.725,-89.648]],
		label: $.t("a:weapons.label.scissors"),
		popup: $.t("a:weapons.desc.scissors")
	},{
		coords: [[-83.440,-123.398]],
		label: $.t("a:weapons.label.cleaver"),
		popup: $.t("a:weapons.desc.cleaver")
	},{
		coords: [[-39.977,-140.537],[-74.080,-72.905]],
		label: $.t("a:weapons.label.hatchet"),
		popup: $.t("a:weapons.desc.hatchet")
	},{
	    coords: [[-32.101,-56.997],[-54.137,-35.200],[-82.172,-104.502]],
	    label: $.t("a:weapons.label.leadPipe"),
	    popup: $.t("a:weapons.desc.leadPipe")
	},{
	    coords: [[5.069, -98.262]],
	    label: $.t("a:weapons.label.letterOpener"),
        popup: $.t("a:weapons.desc.letterOpener")
	}],


	item: [{
	    coords: [[-52.510, -66.401], [-18.146, -65.830], [38.617, -91.582], [-64.671, -114.368]],
	    label: $.t("coins.label"),
	    popup: $.t("coins.desc")
	},{
		coords: [[-46.920,-64.907]],
		label: $.t("a:item.label.lens"),
		popup: $.t("a:item.desc.lens")
	},{
		coords: [[-39.640,-71.367]],
		label: $.t("a:item.label.vipList"),
		popup: $.t("a:item.desc.vipList")
	},{
	    coords: [[-70.444,-126.365], [-48.254,-114.653], [-48.254,-113.653], [-82.166,-107.336]],
	    label: $.t("a:item.label.ratPoison"),
	    popup: $.t("a:item.desc.ratPoison")
	},{
		coords: [[28.710,-102.458]],
		label: $.t("a:item.label.dongle"),
		popup: $.t("a:item.desc.dongle")
	},{
		coords: [[11.846,-107.336]],
		label: $.t("a:item.label.boatKey"),
		popup: $.t("a:item.desc.boatKey")
	},{
		coords: [[-82.506,-105.227]],
		label: $.t("a:item.label.masterKey"),
		popup: $.t("a:item.desc.masterKey")
	},{
		coords: [[-82.367,-123.420]],
		label: $.t("a:item.label.bareKnuckle"),
		popup: $.t("a:item.desc.bareKnuckle")
	},{
		coords: [[-51.536,-83.870]],
		label: $.t("a:item.label.iagoInvite"),
		popup: $.t("a:item.desc.iagoInvite") + $.t(' <a href="https://hitmanmap.de/a/#5/-55.304/-107.512/w=-61.898,-61.128&m=-47.813,-119.927">[here]</a> ') +$.t("a:item.desc.iagoInvite-2"),
	},{
		coords: [[-56.596,-110.808]],
		label: $.t("a:item.label.stageSchedule"),
		popup: $.t("a:item.desc.stageSchedule")
	},{
		coords: [[-5.835,-111.094]],
		label: $.t("a:item.label.fireworksRemote"),
		popup: $.t("a:item.desc.fireworksRemote")
	},{
		coords: [[34.796,-112.807]],
		label: $.t("a:item.label.killPoison"),
		popup: $.t("a:item.desc.killPoison")
	},{
		coords: [[30.902,-105.249]],
		label: $.t("a:item.label.remoteExplosive"),
		popup: $.t("a:item.desc.remoteExplosive")
	},{
		coords: [[-83.844,-89.692]],
		label: $.t("a:item.label.evacPlan"),
		popup: $.t("a:item.desc.evacPlan")
	},{
		coords: [[-37.020,-130.957]],
		label: $.t("a:item.label.fireworksSchedule"),
		popup: $.t("a:item.desc.fireworksSchedule")
	},{
		coords: [[-34.053,-57.744],[-82.687,-104.019],[-45.213,-137.725]],
		label: $.t("a:item.label.explosiveFlasks"),
		popup: $.t("a:item.desc.explosiveFlasks")
	}],

//	bodydumster: [{
//		coords: [[-73.690,-45.439],[-30.827,-55.195],[-81.641,-88.242],[-83.210,-96.416],[-83.026,-97.163],[-82.385,-104.414],[-83.495,-109.731],[-82.414,-120.103],[-80.481,-112.676],[-81.755,-91.714],[-82.350,-91.626],[-82.643,-91.626],[-82.864,-118.696],[-30.902,-106.787],[-43.453,-135.352],[-47.547,-157.368],[-66.036,-63.369],[-72.803,-100.898],[-70.348,-128.760],[-70.714,-110.566],[-67.676,-107.534]],
//		label: $.t("bodydumster.label.")
//		popup: $.t("bodydumster.desc")
//	}]
//	Waste Basket / Garbage Can (Conceal Item)
//	- https://hitmanmap.de/a/#5/-82.640/-106.458/w=-83.360,-118.037
//	- https://hitmanmap.de/a/#5/-42.245/-132.253/w=-38.857,-139.746


    feats: [{
		coords: [[36.598,-114.829]],
		label: $.t("a:feats.label.tasteless") +$.t("feat.label"),
		popup: $.t("a:feats.desc.tasteless") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-56.377,-113.730]],
		label: $.t("a:feats.label.holdMyHair") +$.t("feat.label"),
		popup: $.t("a:feats.desc.holdMyHair")
	},{
		coords: [[-56.390,-115.576]],
		label: $.t("a:feats.label.hurtThemselves") +$.t("feat.label"),
		popup: $.t("a:feats.desc.hurtThemselves")
	},{
		coords: [[-56.777,-114.071]],
		label: $.t("a:feats.label.pianoMan") +$.t("feat.label"),
		popup: $.t("a:feats.desc.pianoMan")
	},{
		coords: [[-75.952,-104.346]],
		label: $.t("a:feats.label.suitOnly") +$.t("feat.label"),
		popup: $.t("a:feats.desc.suitOnly") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-52.536,-114.214]],
		label: $.t("a:feats.label.personal") +$.t("feat.label"),
		popup: $.t("a:feats.desc.personal")
	},{
		coords: [[-66.32,-105.732]], //Location todo
		label: $.t("a:feats.label.settingStage") +$.t("feat.label"),
		popup: $.t("a:feats.desc.settingStage")
	},{
		coords: [[-75.952,-106.346]], //Location todo
		label: $.t("a:feats.label.straightShot") +$.t("feat.label"),
		popup: $.t("a:feats.desc.straightShot") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-75.952,-102.346]],
		label: $.t("a:feats.label.escalation") +$.t("feat.label"),
		popup: $.t("a:feats.desc.escalation") + $.t(' <a target="_blank" href="https://hitman.com/en-us/news/hitman-live-component">[more about Escalation Mode]</a>' ) +$.t("a:feats.desc.tracking")
	},{
		coords: [[-75.952,-100.346]],
		label: $.t("a:feats.label.elusive") +$.t("feat.label"),
		popup: $.t("a:feats.desc.elusive") + $.t(' <a target="_blank" href="https://hitman.com/en-us/news/hitman-live-component">[more about Elusive Targets]</a>' ) +$.t("a:feats.desc.tracking")
	}],


	assassinations : [{
		coords: [[-56.341,-114.741]],
		label: $.t("a:assassinations.label.drowned") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.drowned")
	},{
		coords: [[-16.130,-65.500]],
		label: $.t("a:assassinations.label.svedanja") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.svedanja")
	},{
		coords: [[25.681,-120.498]],
		label: $.t("a:assassinations.label.saferoom1") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.saferoom")
	},{
		coords: [[-83.749,-91.143]], //TODO
		label: $.t("a:assassinations.label.saferoom2") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.saferoom")
	},{
		coords: [[36.598,-112.829]],
		label: $.t("a:assassinations.label.bargained") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.bargained")
	},{
		coords: [[36.598,-111.829]],
		label: $.t("a:assassinations.label.posionDalia") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.posionDalia")
	},{
		coords: [[39.741,-99.976]],
		label: $.t("a:assassinations.label.showstopper") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.showstopper")
	},{
		coords: [[37.927,-130.518]],
		label: $.t("a:assassinations.label.velocity") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.velocity")
	},{
		coords: [[50.177,-126.123]],
		label: $.t("a:assassinations.label.powdering") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.powdering")
	},{
		coords: [[36.598,-113.862]],
		label: $.t("a:assassinations.label.reaper4") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.reaper4")  + $.t(' <a target="_blank" href="http://hitmanmap.de/a/#5/-55.814/-83.650/w=-51.781,-82.969&m=-51.536,-83.87">[here]</a> ') + $.t("a:assassinations.desc.reaper4-2")
	},{
		coords: [[-35.532,-150.513]],
		label: $.t("a:assassinations.label.inPlainSight") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.inPlainSight")
	},{
		coords: [[-50.036,-107.842]],
		label: $.t("a:assassinations.label.knockoutPunch") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.knockoutPunch")
	},{
		coords: [[-75.952,-114.346]],
		label: $.t("a:assassinations.label.silent") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.silent") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-75.952,-112.346]],
		label: $.t("a:assassinations.label.suit") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.suit") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-75.952,-110.346]],
		label: $.t("a:assassinations.label.suitOnly") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.suitOnly") +$.t("a:feats.desc.tracking")
	},{
		coords: [[-75.952,-108.346]],
		label: $.t("a:assassinations.label.noEvidence") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.noEvidence")
	},{
		coords: [[-10.747,-108.281]],
		label: $.t("a:assassinations.label.speaker") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.speaker")
	},{
		coords: [[0.967,-100.547]],
		label: $.t("a:assassinations.label.speechless") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.speechless")
	},{
		coords: [[38.273,-121.772]],
		label: $.t("a:assassinations.label.chandelierDaila") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.chandelierDaila")
	},{
		coords: [[-71.216,-148.140]],
		label: $.t("a:assassinations.label.seine") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.seine")
	},{
		coords: [[-58.240,-84.155]],
		label: $.t("a:assassinations.label.watchYourStep") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.watchYourStep")
	},{
		coords: [[40.614,-112.368]],
		label: $.t("a:assassinations.label.touch1") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.touch1")
	},{
		coords: [[-56.777,-115.071]],
		label: $.t("a:assassinations.label.touch2") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.touch2")
	},{
		coords: [[25.602,-122.520]],
		label: $.t("a:assassinations.label.break") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.break")
	},{
		coords: [[-56.705,-53.328]],
		label: $.t("a:assassinations.label.photobomb") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.photobomb")
	},{
		coords: [[-60.021,-86.968]],
		label: $.t("a:assassinations.label.sickDrop") +$.t("assassinations.label"),
		popup: $.t("a:assassinations.desc.sickDrop")
	}],


	challenges : [{
		coords: [[-50.205,-64.512]],
		label: $.t("a:challenges.label.scoop") +$.t("discovery.label") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.scoop")
	},{
		coords: [[-67.876,-153.457]],
		label: $.t("a:challenges.label.secretMeeting") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.secretMeeting")
	},{
		coords: [[-16.257,-72.686]],
		label: $.t("a:challenges.label.vase") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.vase")
	},{
		coords: [[-58.654,-49.395]],
		label: $.t("a:challenges.label.wish") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.wish")
	},{
		coords: [[-58.608,-173.540]],
		label: $.t("a:challenges.label.boat") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.boat") +$.t(' <a target="_blank" href="https://hitmanmap.de/a/#4/-46.83/-94.17/w=-20.221,-107.842&m=-22.675,-107.754">[this]</a> ') +$.t("a:challenges.desc.boat2")
	},{
		coords: [[45.951,-64.4240]],
		label: $.t("a:challenges.label.chamelion") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.chamelion")
	},{
		coords: [[-58.263,-102.832]],
		label: $.t("a:challenges.label.15s") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.15s")
	},{
		coords: [[34.796,-114.807]],
		label: $.t("a:challenges.label.undercover") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.undercover")
	},{
		coords: [[-82.609,-123.398]],
		label: $.t("a:item.label.bareKnuckle") +$.t("discovery.label"),
		popup: $.t("a:item.desc.bareKnuckle")
	},{
		coords: [[-49.282,-107.886]],
		label: $.t("a:challenges.label.drinkToDieFor") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.drinkToDieFor")
	},{
		coords: [[-62.855,-108.04]],
		label: $.t("a:challenges.label.satoHelper") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.satoHelper")
	},{
		coords: [[-42.553,-87.100]],
		label: $.t("a:challenges.label.meeting") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.meeting")
	},{
		coords: [[-4.784,-111.028]],
		label: $.t("a:challenges.label.fire") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.fire")
	},{
		coords: [[-3.984,-111.028]],
		label: $.t("a:challenges.label.salut") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.salut")
	},{
		coords: [[10.574,-91.274]],
		label: $.t("a:challenges.label.piano47") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.piano47")
	},{
		coords: [[28.71,-104.458]],
		label: $.t("a:challenges.label.keyToAuction") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.keyToAuction")
	},{
		coords: [[38.273,-124.992]],
		label: $.t("a:challenges.label.iagoAtWork") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.iagoAtWork")
	},{
		coords: [[35.853,-125.596]],
		label: $.t("a:challenges.label.excellency") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.excellency")
	},{
		coords: [[-52.174,-83.826]],
		label: $.t("a:challenges.label.inviteDiscovery") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.inviteDiscovery")
	},{
		coords: [[28.681,-122.498]],
		label: $.t("a:challenges.label.quickBreak") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.quickBreak")
	},{
		coords: [[-56.596,-111.808]],
		label: $.t("a:challenges.label.ducksInRow") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.ducksInRow")
	},{
		coords: [[-66.320,-107.732]], //location todo
		label: $.t("a:challenges.label.satoSick") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.satoSick")
	},{
		coords: [[34.796,-113.807]],
		label: $.t("a:challenges.label.undercover2") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.undercover2")
	},{
		coords: [[40.179,-123.64]],
		label: $.t("a:challenges.label.reaper2") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.reaper2")
	},{
		coords: [[39.64,-103.909]],
		label: $.t("a:challenges.label.lightsOut") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.lightsOut")
	},{
		coords: [[5.222,-78.486]],
		label: $.t("a:challenges.label.guest") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.guest")
	},{
		coords: [[-47.813,-119.927]],
		label: $.t("a:challenges.label.invited") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.invited")
	},{
		coords: [[-67.876,-155.457]],
		label: $.t("a:challenges.label.meeting2") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.meeting2")
	},{
		coords: [[-81.486,-122.915]],
		label: $.t("a:challenges.label.cata") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.cata")
	},{
	    coords: [[-81.691, -90.396]],
		label: $.t("a:challenges.label.staffingUp") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.staffingUp")
	},{
		coords: [[40.179,-121.64]],
		label: $.t("a:challenges.label.reaper3") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.reaper3")
	},{
		coords: [[-58.263,-152.139]],
		label: $.t("a:challenges.label.ride") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.ride")
	},{
		coords: [[-8.835,-111.094]],
		label: $.t("a:challenges.label.techSupport") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.techSupport")
	},{
		coords: [[-35.532,-152.513]],
		label: $.t("a:challenges.label.advantage") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.advantage")
	},{
	    coords: [[-31.691,-99.360]],
		label: $.t("a:challenges.label.party") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.party")
	},{
		coords: [[29.382,-65.391]],
		label: $.t("a:challenges.label.attic") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.attic")
	},{
	    coords: [[-83.560, -121.772]],
		label: $.t("a:challenges.label.chef") +$.t("discovery.label"),
		popup: $.t("a:challenges.desc.chef")
	}],


	achievements : [{
		coords: [[40.179,-125.640]],
		label: $.t("a:achievements.label.reaper"),
		popup: $.t("a:achievements.desc.reaper")
	},{
		coords: [[39.640,-101.909]],
		label: $.t("a:achievements.label.showstopper"),
		popup: $.t("a:achievements.desc.showstopper")
	}],

	disguises: [{
		coords: [[46.073,-65.742]],
		label: $.t("a:disguises.label.vampire"),
		popup: $.t("a:disguises.desc.vampire")
	},{
	    coords: [[-82.408,-90.439],[-69.657,-76.201]],
		label: $.t("a:disguises.label.palaceStaff"),
		popup: $.t("a:disguises.desc.palaceStaff")
	},{
	    coords: [[-62.855,-106.040],[-69.779,-101.030]],
		label: $.t("a:disguises.label.stylist"),
		popup: $.t("a:disguises.desc.stylist")
	}]


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
