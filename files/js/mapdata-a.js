$(document).on("loadMapdata", function () {
	window.map_path   = 'a';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [-70,-20];
	window.map_mZoom  = 6;

	processData({

	weapons: [{
			coords: [[-51.028,-70.005],[-61.898,-61.1285]],
			label: $.t("a:weapons.label.1"),
			popup: $.t("a:weapons.desc.1")
		},{
			coords: [[-70.444,-126.365],[-48.254,-114.653],[-48.254,-113.653],[-82.166,-107.336]],
			label: $.t("a:item.label.ratpoision"),
			popup: $.t("a:item.desc.ratpoision")
			},{
			coords: [[-63.549,-60.908],[-30.902,-54.053],[-81.518,-104.941],[-81.275,-90.923],[-77.206,-150.381],[-65.713,-81.079]],
			label: $.t("a:weapons.label.crowbar"),
			popup: $.t("a:weapons.desc.crowbar")
			},{
			coords: [[-21.821,-102.261]],
			label: $.t("a:weapons.label.PoliceBaton"),
			popup: $.t("a:weapons.desc.PoliceBaton")
			},{
			coords: [[8.798,-109.863]],
			label: $.t("a:weapons.label.GolfClub"),
			popup: $.t("a:weapons.desc.GolfClub")
			},{
			coords: [[-64.511,-70.532]],
				label: $.t("a:weapons.label.sword"),
				popup: $.t("a:weapons.desc.sword")
			},{
				coords: [[-17.120,-94.219]],
				label: $.t("a:weapons.label.firepoker"),
				popup: $.t("a:weapons.desc.firepoker")
			},{
				coords: [[-17.120,-94.219],[-33.138,-56.909],[-82.743,-86.045],[-82.875,-123.047],[-74.044,-71.060],[-70.081,-92.505],[-69.411,-124.937],[-70.671,-108.105],[-63.685,-152.227]],
				label: $.t("a:weapons.label.Wrench"),
				popup: $.t("a:weapons.desc.Wrench")
			},{
				coords: [[-31.429,-111.270],[-67.136,-63.545],[-69.885,-80.859],[-68.657,-92.681],[-73.503,-96.724],[-67.136,-148.887],[-69.427,-123.882]],
				label: $.t("a:weapons.label.Screwdriver"),
				popup: $.t("a:weapons.desc.Screwdriver")
			},{
			coords: [[-44.528,-138.779],[-73.886,-99.536]],
				label: $.t("a:weapons.label.Hammer"),
				popup: $.t("a:weapons.desc.Hammer")
			},{
			coords: [[-82.443,-85.078],[-83.293,-108.193],[-83.048,-117.993],[79.695,-112.544],[-81.979,-101.470],[-43.676,-147.788]],
				label: $.t("a:weapons.label.Extinguisher"),
				popup: $.t("a:weapons.desc.Extinguisher")
			},{
			coords: [[-80.364,-85.869],[-84.315,-112.720],[-69.006,-125.464],[-82.160,-89.429]],
				label: $.t("a:weapons.label.Axe"),
				popup: $.t("a:weapons.desc.Axe")
			},{
			coords: [[-77.118,-151.172]],
				label: $.t("a:weapons.label.Brick"),
				popup: $.t("a:weapons.desc.Brick")
			},{
			coords: [[-82.704,-95.933],[-83.677,-121.729],[-70.215,-115.532]],
				label: $.t("a:weapons.label.Knife"),
				popup: $.t("a:weapons.desc.Knife")
			},{
			coords: [[-83.905,-93.911]],
				label: $.t("a:weapons.label.Bartoli12G"),
				popup: $.t("a:weapons.desc.Bartoli12G")
			},{
			coords: [[-83.905,-93.911]],
				label: $.t("a:weapons.label.Bartoli75R"),
				popup: $.t("a:weapons.desc.Bartoli75R")
			},{
			coords: [[-83.725,-89.648]],
				label: $.t("a:weapons.label.Scissors"),
				popup: $.t("a:weapons.desc.Scissors")
			},{
			coords: [[-83.440,-123.398]],
				label: $.t("a:weapons.label.Cleaver"),
				popup: $.t("a:weapons.desc.Cleaver")
			},{
			coords: [[-39.977,-140.537],[-74.080,-72.905]],
				label: $.t("a:weapons.label.Hatchet"),
				popup: $.t("a:weapons.desc.Hatchet")
			},{
			coords: [[-32.101,-56.997],[-54.137,-35.200],[-82.172,-104.502]],
				label: $.t("a:weapons.label.Pipe"),
				popup: $.t("a:weapons.desc.Pipe")
			}],


		item: [{
			coords: [[-46.920,-64.907]],
				label: $.t("a:item.label.lens"),
				popup: $.t("a:item.desc.lens")
			},{
				coords: [[-39.640,-71.367]],
					label: $.t("a:item.label.viplist"),
					popup: $.t("a:item.desc.viplist")
			},{
				coords: [[28.710,-102.458]],
					label: $.t("a:item.label.dongle"),
					popup: $.t("a:item.desc.dongle")
			},{
				coords: [[11.846,-107.336]],
					label: $.t("a:item.label.bootkey"),
					popup: $.t("a:item.desc.bootkey")
			},{
				coords: [[-82.506,-105.227]],
					label: $.t("a:item.label.masterkey"),
					popup: $.t("a:item.desc.masterkey")
			},{
				coords: [[-82.367,-123.420]],
					label: $.t("a:item.label.barenukcle"),
					popup: $.t("a:item.desc.barenukcle")
			},{
				coords: [[-51.536,-83.870]],
					label: $.t("a:item.label.invite"),
					popup: $.t("a:item.desc.invite") + $.t(' <a href="https://hitmanmap.de/a/#5/-55.304/-107.512/w=-61.898,-61.128&m=-47.813,-119.927">[here]</a> ') +$.t("a:item.desc.invite-2"),
			},{
				coords: [[-56.596,-110.808]],
					label: $.t("a:item.label.stageschedule"),
					popup: $.t("a:item.desc.stageschedule")
			},{
				coords: [[-5.835,-111.094]],
					label: $.t("a:item.label.Fireworksremote"),
					popup: $.t("a:item.desc.Fireworksremote")
			},{
				coords: [[-52.510,-66.401],[-18.146,-65.830],[38.617,-91.582]],
					label: $.t("coins.label"),
					popup: $.t("coins.desc")
			},{
				coords: [[34.796,-112.807]],
					label: $.t("a:item.label.killpoision"),
					popup: $.t("a:item.desc.killpoision")
			},{
			coords: [[30.902,-105.249]],
				label: $.t("a:item.label.remoteexplo"),
				popup: $.t("a:item.desc.remoteexplo")
			},{
			coords: [[-83.844,-89.692]],
				label: $.t("a:item.label.evacplan"),
				popup: $.t("a:item.desc.evacplan")
			},{
			coords: [[-83.844,-89.692]],
				label: $.t("a:item.label.evacplan"),
				popup: $.t("a:item.desc.evacplan")
			},{
			coords: [[-37.020,-130.957]],
				label: $.t("a:item.label.Schedule"),
				popup: $.t("a:item.desc.Schedule")
			},{
			coords: [[-34.053,-57.744],[-82.687,-104.019],[-45.213,-137.725]],
				label: $.t("a:item.label.ExplosiveFlasks"),
				popup: $.t("a:item.desc.ExplosiveFlasks")
			}],

		//	bodydumster: [{
		//		coords: [[-73.690,-45.439],[-30.827,-55.195],[-81.641,-88.242],[-83.210,-96.416],[-83.026,-97.163],[-82.385,-104.414],[-83.495,-109.731],[-82.414,-120.103],[-80.481,-112.676],[-81.755,-91.714],[-82.350,-91.626],[-82.643,-91.626],[-82.864,-118.696],[-30.902,-106.787],[-43.453,-135.352],[-47.547,-157.368],[-66.036,-63.369],[-72.803,-100.898],[-70.348,-128.760],[-70.714,-110.566],[-67.676,-107.534]],
		//		label: $.t("bodydumster.label.")
	//			popup: $.t("bodydumster.desc")
	//		}]
//	Waste Basket / Garbage Can (Conceal Item)
//	- https://hitmanmap.de/a/#5/-82.640/-106.458/w=-83.360,-118.037
//	- https://hitmanmap.de/a/#5/-42.245/-132.253/w=-38.857,-139.746


		feats: [{
			coords: [[36.598,-114.829]],
			label: $.t("a:feats.label.Tasteless") +$.t("feat.label"),
			popup: $.t("a:feats.desc.Tasteless") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-56.377,-113.730]],
			label: $.t("a:feats.label.holdmyhair") +$.t("feat.label"),
			popup: $.t("a:feats.desc.holdmyhair")
		},{
			coords: [[-56.390,-115.576]],
			label: $.t("a:feats.label.HurtThemselves") +$.t("feat.label"),
			popup: $.t("a:feats.desc.HurtThemselves")
		},{
			coords: [[-56.777,-114.071]],
			label: $.t("a:feats.label.Piano") +$.t("feat.label"),
			popup: $.t("a:feats.desc.Piano")
		},{
			coords: [[-75.952,-104.346]],
			label: $.t("a:feats.label.suitonly") +$.t("feat.label"),
			popup: $.t("a:feats.desc.suitonly") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-52.536,-114.214]],
			label: $.t("a:feats.label.personal") +$.t("feat.label"),
			popup: $.t("a:feats.desc.personal")
		},{
			coords: [[-66.32,-105.732]], //Location todo
			label: $.t("a:feats.label.settings") +$.t("feat.label"),
			popup: $.t("a:feats.desc.settings")
		},{
			coords: [[-75.952,-106.346]], //Location todo
			label: $.t("a:feats.label.straight") +$.t("feat.label"),
			popup: $.t("a:feats.desc.straight") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-75.952,-102.346]],
			label: $.t("a:feats.label.escalation") +$.t("feat.label"),
			popup: $.t("a:feats.desc.escalation") + $.t(' <a target="_blank" href="https://hitman.com/en-us/news/hitman-live-component">[more about Escalation Mode]</a>' ) +$.t("a:feats.desc.tracking")
		},{
			coords: [[-75.952,-100.346]],
			label: $.t("a:feats.label.elusive") +$.t("feat.label"),
			popup: $.t("a:feats.desc.elusive") + $.t(' <a target="_blank" href="https://hitman.com/en-us/news/hitman-live-component">[more about Elusive Targets]</a>' ) +$.t("a:feats.desc.tracking")
		}],


		assassination : [{
			coords: [[-56.341,-114.741]],
			label: $.t("a:assassination.label.Drowned") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.Drowned")
		},{
			coords: [[-16.130,-65.500]],
			label: $.t("a:assassination.label.svedanja") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.svedanja")
		},{
			coords: [[25.681,-120.498]],
			label: $.t("a:assassination.label.saferoom1") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.saferoom")
		},{
			coords: [[-83.749,-91.143]], //TODO
			label: $.t("a:assassination.label.saferoom2") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.saferoom")
		},{
			coords: [[36.598,-112.829]],
			label: $.t("a:assassination.label.Barganined") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.Barganined")
		},{
			coords: [[36.598,-111.829]],
			label: $.t("a:assassination.label.posiondalia") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.posiondalia")
		},{
			coords: [[39.741,-99.976]],
			label: $.t("a:assassination.label.Showstopper") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.Showstopper")
		},{
			coords: [[37.927,-130.518]],
			label: $.t("a:assassination.label.velocity") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.velocity")
		},{
			coords: [[50.177,-126.123]],
			label: $.t("a:assassination.label.powdering") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.powdering")
		},{
			coords: [[36.598,-113.862]],
			label: $.t("a:assassination.label.raper") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.raper")  + $.t(' <a target="_blank" href="http://hitmanmap.de/a/#5/-55.814/-83.650/w=-51.781,-82.969&m=-51.536,-83.87">[here]</a> ') + $.t("a:assassination.desc.raper2")
		},{
			coords: [[-35.532,-150.513]],
			label: $.t("a:assassination.label.inplainsight") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.inplainsight")
		},{
			coords: [[-50.036,-107.842]],
			label: $.t("a:assassination.label.knockedoutpunch") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.knockedoutpunch")
		},{
			coords: [[-75.952,-114.346]],
			label: $.t("a:assassination.label.silent") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.silent") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-75.952,-112.346]],
			label: $.t("a:assassination.label.suit") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.suit") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-75.952,-110.346]],
			label: $.t("a:assassination.label.suitonly") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.suitonly") +$.t("a:feats.desc.tracking")
		},{
			coords: [[-75.952,-108.346]],
			label: $.t("a:assassination.label.noevidence") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.noevidence")
		},{
			coords: [[-10.747,-108.281]],
			label: $.t("a:assassination.label.speaker") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.speaker")
		},{
			coords: [[0.967,-100.547]],
			label: $.t("a:assassination.label.speechless") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.speechless")
		},{
			coords: [[38.273,-121.772]],
			label: $.t("a:assassination.label.chandelierdaila") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.chandelierdaila")
		},{
			coords: [[-71.216,-148.140]],
			label: $.t("a:assassination.label.seine") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.seine")
		},{
			coords: [[-58.240,-84.155]],
			label: $.t("a:assassination.label.watchyourstep1") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.watchyourstep1")
		},{
			coords: [[40.614,-112.368]],
			label: $.t("a:assassination.label.touche1") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.touche1")
		},{
			coords: [[-56.777,-115.071]],
			label: $.t("a:assassination.label.touche2") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.touche2")
		},{
			coords: [[25.602,-122.520]],
			label: $.t("a:assassination.label.break") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.break")
		},{
			coords: [[-56.705,-53.328]],
			label: $.t("a:assassination.label.photobomb") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.photobomb")
		},{
			coords: [[-60.021,-86.968]],
			label: $.t("a:assassination.label.sickdrop") +$.t("assassination.label"),
			popup: $.t("a:assassination.desc.sickdrop")
		}],


		challenge : [{
			coords: [[-50.205,-64.512]],
			label: $.t("a:challenge.label.scoop") +$.t("discovery.label") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.scoop")
		},{
			coords: [[-67.876,-153.457]],
			label: $.t("a:challenge.label.secredmeeting") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.secredmeeting")
		},{
			coords: [[-16.257,-72.686]],
			label: $.t("a:challenge.label.vase") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.vase")
		},{
			coords: [[-58.654,-49.395]],
			label: $.t("a:challenge.label.wish") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.wish")
		},{
			coords: [[-58.608,-173.540]],
			label: $.t("a:challenge.label.boat") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.boat") +$.t(' <a target="_blank" href="https://hitmanmap.de/a/#4/-46.83/-94.17/w=-20.221,-107.842&m=-22.675,-107.754">[this]</a> ') +$.t("a:challenge.desc.boat2")
		},{
			coords: [[45.951,-64.4240]],
			label: $.t("a:challenge.label.chamelion") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.chamelion")
		},{
			coords: [[-58.263,-102.832]],
			label: $.t("a:challenge.label.15s") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.15s")
		},{
			coords: [[34.796,-114.807]],
			label: $.t("a:challenge.label.undercover") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.undercover")
		},{
			coords: [[-82.609,-123.398]],
			label: $.t("a:item.label.barenukcle") +$.t("discovery.label"),
			popup: $.t("a:item.desc.barenukcle")
		},{
			coords: [[-49.282,-107.886]],
			label: $.t("a:challenge.label.drinktodiefor") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.drinktodiefor")
		},{
			coords: [[-62.855,-108.04]],
			label: $.t("a:challenge.label.satohelper") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.satohelper")
		},{
			coords: [[-42.553,-87.100]],
			label: $.t("a:challenge.label.meeting") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.meeting")
		},{
			coords: [[-4.784,-111.028]],
			label: $.t("a:challenge.label.fire") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.fire")
		},{
			coords: [[-3.984,-111.028]],
			label: $.t("a:challenge.label.salut") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.salut")
		},{
			coords: [[10.574,-91.274]],
			label: $.t("a:challenge.label.Piano47") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.Piano47")
		},{
			coords: [[28.71,-104.458]],
			label: $.t("a:challenge.label.key") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.key")
		},{
			coords: [[38.273,-124.992]],
			label: $.t("a:challenge.label.iagoatwork") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.iagoatwork")
		},{
			coords: [[35.853,-125.596]],
			label: $.t("a:challenge.label.excellency") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.excellency")
		},{
			coords: [[28.681,-120.498]],
			label: $.t("a:challenge.label.secredmeeting") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.secredmeeting")
		},{
			coords: [[-52.174,-83.826]],
			label: $.t("a:challenge.label.invitediscovery") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.invitediscovery")
		},{
			coords: [[28.681,-122.498]],
			label: $.t("a:challenge.label.quickbreak") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.quickbreak")
		},{
			coords: [[-56.596,-111.808]],
			label: $.t("a:challenge.label.ducksinrow") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.ducksinrow")
		},{
			coords: [[-66.320,-107.732]], //location todo
			label: $.t("a:challenge.label.sebsick") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.sebsick")
		},{
			coords: [[34.796,-113.807]],
			label: $.t("a:challenge.label.undercover2") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.undercover2")
		},{
			coords: [[40.179,-123.64]],
			label: $.t("a:challenge.label.reaper2") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.reaper2")
		},{
			coords: [[39.64,-103.909]],
			label: $.t("a:challenge.label.lightsout") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.lightsout")
		},{
			coords: [[5.222,-78.486]],
			label: $.t("a:challenge.label.gust") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.gust")
		},{
			coords: [[-47.813,-119.927]],
			label: $.t("a:challenge.label.invited") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.invited")
		},{
			coords: [[-67.876,-155.457]],
			label: $.t("a:challenge.label.meeting2") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.meeting2")
		},{
			coords: [[-81.486,-122.915]],
			label: $.t("a:challenge.label.cata") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.cata")
		},{
			coords: [[-82.408,-90.439]],
			label: $.t("a:challenge.label.staffingup") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.staffingup")
		},{
			coords: [[40.179,-121.64]],
			label: $.t("a:challenge.label.reaper3") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.reaper3")
		},{
			coords: [[-58.263,-152.139]],
			label: $.t("a:challenge.label.ride") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.ride")
		},{
			coords: [[-8.835,-111.094]],
			label: $.t("a:challenge.label.techsupport") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.techsupport")
		},{
			coords: [[-35.532,-152.513]],
			label: $.t("a:challenge.label.advantage") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.advantage")
		},{
			coords: [[-58.517,-35.947]],
			label: $.t("a:challenge.label.party") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.party")
		},{
			coords: [[29.382,-65.391]],
			label: $.t("a:challenge.label.attic") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.attic")
		},{
			coords: [[-83.415,-119.531]],
			label: $.t("a:challenge.label.chef") +$.t("discovery.label"),
			popup: $.t("a:challenge.desc.chef")
		}],


		achievement : [{
			coords: [[40.179,-125.640]],
			label: $.t("a:achievement.label.Reaper"),
			popup: $.t("a:achievement.desc.Reaper")
		},{
			coords: [[39.640,-101.909]],
			label: $.t("a:achievement.label.Showstopper"),
			popup: $.t("a:achievement.desc.Showstopper")
		}],

		kleidung: [{
			coords: [[46.073,-65.742]],
			label: $.t("a:kleidung.label.vamp"),
			popup: $.t("a:kleidung.desc.vamp")
		},{
			coords: [[-82.408,-90.439]],
			label: $.t("a:kleidung.label.palace"),
			popup: $.t("a:kleidung.desc.palace")
		},{
			coords: [[-69.657,-76.201]],
			label: $.t("a:kleidung.label.palace"),
			popup: $.t("a:kleidung.desc.palace")
		},{
			coords: [[-62.855,-106.040]],
			label: $.t("a:kleidung.label.style"),
			popup: $.t("a:kleidung.desc.style")
		}]


});
	window.allLayers = [
		markers.weapons,
		markers.feats,
		markers.achievement,
		markers.challenge,
		markers.assassination,
		markers.item,
		markers.kleidung
		];
});
