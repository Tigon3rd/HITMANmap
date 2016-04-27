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
	}],


	item: [{
		coords: [[-79.572,-157.126]],
		label: $.t("z:item.label.letter"),
		popup: $.t("z:item.desc.letter")
	},{
		coords: [[-78.431,-140.592]],
		label: $.t("z:item.label.golfball"),
		popup: $.t("z:item.desc.golfball")
	}],


  feats: [],

assassinations: [{
	coords: [[-81.210,-158.610]],
	label: $.t("z:assassinations.label.teetime") +$.t("assassinations.label"),
	popup: $.t("z:assassinations.desc.teetime")
},{
	coords: [[-79.513,-159.192]],
	popupTitle: $.t("z:assassinations.label.plage") +$.t("assassinations.label"),
	label: $.t("z:assassinations.desc.plage"),
	popup: $.t("z:assassinations.desc.plage2")
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
		coords: [[-79.537,-175.979]],
		label: $.t("z:challenges.label.safehouse") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.safehouse")
	},{
		coords: [[-79.537,-175.979]],
		label: $.t("z:challenges.label.memory") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.memory")
	}],


	achievements : [{
		coords: [[-79.319,-175.979]],
		label: $.t("z:achievements.label.Kraken"), //hover
		popupTitle: $.t("z:achievements.label.Kraken2"), //title
		popup: $.t("z:achievements.desc.Kraken") + $.t(' <a target="_blank" href="https://www.youtube.com/watch?v=NGLNc3Tq15I">[Video]</a> ')
	}],

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
	}]

//	Shop Keeper - Pick a shop
//	Delivery Man - In the flower shop (un-worn uniform) or by accident
//	Bohemian Man - Top of tower in city Square
//	Street Performer - By the docks
//	Private Investigator - Sleeping on a bench in one of the back alleys, can be recognized by the white dot always above his head
//	Dr. Shrink*Not actual name* - City square
//	Red Plumber - Sewers
//
//	Butler - Mansion Entrance
//	Housekeeping - In Mansion - Uniform in laundry area too
//	Mansion Staff - In Mansion
//	Gardener - Outside Mansion, outside church, in one apartment
//	Mansion Security - Mansion, and near ICA Hideout there is a uniform hidden in another apartment
//	Bodyguard - Mansion/Streets
//	Mansion Chef - Mansion
//	Kitchen Staff - Mansion/Apt next to ICA Hideout
//	Plague Doc - Observatory
//
//	Lab Security - In/around the lab
//	Lab Technician - In/around the lab, in the morgue
//	Hazmat Suit - In Lab Area
//	Golf Coach - Mansion Property
//	Green Plumber - Level 3 of Mansion (Easily accessed via the fountain behind the guards at the front gate)
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
