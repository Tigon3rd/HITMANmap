$(document).on("loadShared", function () {
	window.createMarker = function (coord, icon, label, popup, dataKey) {
		var mapKey = 'markers-' + map_path + '-hidden';
		var marker = L.marker(coord, setMarker(icon)).bindLabel(label).bindPopup(popup);

		marker.on('contextmenu', function (e) {
			toggleOpacity(e, mapKey);
			updatePills(e, dataKey);
		});

		if (isMarkerInvisible(mapKey, marker.getLatLng().lat, marker.getLatLng().lng)) {
			marker.setOpacity(invisibleMarkerOpacity);
			if(!markerCount[dataKey]) markerCount[dataKey] = 0;
		} else {
			markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
		}

		return marker;
	};

	window.setMarker = function (icon, tooltip) {
		return {icon : icon, riseOnHover : true};
	};

	window.getLatLngKey = function (lat, lng) {
		return lat + ';' + lng;
	};

	window.isMarkerInvisible = function (mapPath, lat, lng) {
		return invisibleMarkers[mapPath].indexOf(getLatLngKey(lat, lng)) > -1;
	};

	window.toggleOpacity = function (event, mapPath) {
		var key = getLatLngKey(event.latlng.lat, event.latlng.lng);

		if (event.target && event.target.options.opacity === 1.0) {
			event.target.setOpacity(invisibleMarkerOpacity);
			invisibleMarkers[mapPath].push(key);
		} else {
			event.target.setOpacity(1.0);
			invisibleMarkers[mapPath].splice(invisibleMarkers[mapPath].indexOf(key), 1);
		}

		localStorage[mapPath] = JSON.stringify(invisibleMarkers[mapPath]);
	};

	window.updatePills = function(event, dataKey) {
		if (event.target && event.target.options.opacity === 1.0) {
			markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
		} else {
			markerCount[dataKey] = (markerCount[dataKey] - 1) || 0;
		}
		$('ul.key:not(.controls) > li:not(.none) > i.'+dataKey+' ~ :last').text(markerCount[dataKey]);
	};

	window.resetInvisibleMarkers = function() {
		var mapKey = 'markers-' + map_path + '-hidden';
		invisibleMarkers[mapKey] = [];
		localStorage[mapKey] = JSON.stringify(invisibleMarkers[mapKey]);
		location.reload();
	};

	window.icons = {};
	window.markers = {};
	window.invisibleMarkers = {};
	window.markerCount = {};
	window.notes = {};

	var icons = window.icons;
	var markers = window.markers;
	var invisibleMarkerOpacity = 0.25;

	window.processData = function (data) {
		var mapKey = 'markers-' + map_path + '-hidden';

		if(!localStorage[mapKey]) {
			localStorage[mapKey] = JSON.stringify([]);
		}
		invisibleMarkers[mapKey] = JSON.parse(localStorage[mapKey]);

		var notesKey = 'notes'+map_path;
		if(!localStorage[notesKey]) {
			localStorage[notesKey] = JSON.stringify([]);
		}
		notes[map_path] = JSON.parse(localStorage[notesKey]);

		Object.keys(data).forEach(function (dataKey) {
			var items = data[dataKey];
			var groupItems = [];
			items.forEach(function (item) {
				if (item.popupTitle == null) {
					item.popupTitle = item.label;
				}
				item.coords.forEach(function (coord) {
					groupItems.push(createMarker(coord, icons[dataKey], item.label, '<h1>' + item.popupTitle + '</h1>' + item.popup, dataKey));
				});
			});
			markers[dataKey] = L.layerGroup(groupItems);
		});
	};

	icons.note_marker = L.icon({
		iconUrl  : '../files/img/icons/note_marker.png',
		iconSize : [32, 48]
	});

	icons.weapons = L.icon({
		iconUrl  : '../files/img/icons/weapons.png',
		iconSize : [32, 48]
	});
	icons.achievements = L.icon({
		iconUrl  : '../files/img/icons/achievements.png',
		iconSize : [32, 48]
	});

	icons.disguises = L.icon({
		iconUrl  : '../files/img/icons/disguises.png',
		iconSize : [32, 48]
	});

	icons.challenges = L.icon({
		iconUrl  : '../files/img/icons/challenges.png',
		iconSize : [32, 48]
	});

	icons.info = L.icon({
		iconUrl  : '../files/img/icons/info.png',
		iconSize : [32, 48]
	});

	icons.feats = L.icon({
		iconUrl  : '../files/img/icons/feats.png',
		iconSize : [32, 48]
	});

	icons.assassinations = L.icon({
		iconUrl  : '../files/img/icons/assassinations.png',
		iconSize : [32, 48]
	});




	icons.item = L.icon({
		iconUrl  : '../files/img/icons/item.png',
		iconSize : [32, 48]
	});

});
