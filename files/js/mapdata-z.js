$(document).on("loadMapdata", function () {
	window.map_path   = 'z';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [-70,-20];
	window.map_mZoom  = 7;

	processData({

	weapons: [],


	item: [],

  feats: [],

assassinations : [],


	challenges : [{
		coords: [[-50.205,-64.512]],
		label: $.t("z:challenges.label.delivery") +$.t("discovery.label"),
		popup: $.t("z:challenges.desc.delivery")
	}],


	achievements : [],

	disguises: []


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
