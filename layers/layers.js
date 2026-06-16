var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_togo_new_scores_1 = new ol.format.GeoJSON();
var features_togo_new_scores_1 = format_togo_new_scores_1.readFeatures(json_togo_new_scores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togo_new_scores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togo_new_scores_1.addFeatures(features_togo_new_scores_1);
var lyr_togo_new_scores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togo_new_scores_1, 
                style: style_togo_new_scores_1,
                popuplayertitle: 'togo_new_scores',
                interactive: true,
    title: 'togo_new_scores<br />\
    <img src="styles/legend/togo_new_scores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/togo_new_scores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/togo_new_scores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/togo_new_scores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/togo_new_scores_1_4.png" /> 4 - 5<br />' });
var format_perfecture_boundaries_2 = new ol.format.GeoJSON();
var features_perfecture_boundaries_2 = format_perfecture_boundaries_2.readFeatures(json_perfecture_boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perfecture_boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perfecture_boundaries_2.addFeatures(features_perfecture_boundaries_2);
var lyr_perfecture_boundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perfecture_boundaries_2, 
                style: style_perfecture_boundaries_2,
                popuplayertitle: 'perfecture_boundaries',
                interactive: true,
                title: '<img src="styles/legend/perfecture_boundaries_2.png" /> perfecture_boundaries'
            });
var format_Active_sites_NP_16062026_3 = new ol.format.GeoJSON();
var features_Active_sites_NP_16062026_3 = format_Active_sites_NP_16062026_3.readFeatures(json_Active_sites_NP_16062026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Active_sites_NP_16062026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Active_sites_NP_16062026_3.addFeatures(features_Active_sites_NP_16062026_3);
var lyr_Active_sites_NP_16062026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Active_sites_NP_16062026_3, 
                style: style_Active_sites_NP_16062026_3,
                popuplayertitle: 'Active_sites_NP_16.06.2026',
                interactive: true,
                title: '<img src="styles/legend/Active_sites_NP_16062026_3.png" /> Active_sites_NP_16.06.2026'
            });
var format_Identified_sites_np_16062026_4 = new ol.format.GeoJSON();
var features_Identified_sites_np_16062026_4 = format_Identified_sites_np_16062026_4.readFeatures(json_Identified_sites_np_16062026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identified_sites_np_16062026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identified_sites_np_16062026_4.addFeatures(features_Identified_sites_np_16062026_4);
var lyr_Identified_sites_np_16062026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identified_sites_np_16062026_4, 
                style: style_Identified_sites_np_16062026_4,
                popuplayertitle: 'Identified_sites_np_16.06.2026',
                interactive: true,
    title: 'Identified_sites_np_16.06.2026<br />\
    <img src="styles/legend/Identified_sites_np_16062026_4_0.png" /> GRID<br />\
    <img src="styles/legend/Identified_sites_np_16062026_4_1.png" /> SOLAR<br />' });
var format_Planned_sites_NP_16062026_5 = new ol.format.GeoJSON();
var features_Planned_sites_NP_16062026_5 = format_Planned_sites_NP_16062026_5.readFeatures(json_Planned_sites_NP_16062026_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planned_sites_NP_16062026_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planned_sites_NP_16062026_5.addFeatures(features_Planned_sites_NP_16062026_5);
var lyr_Planned_sites_NP_16062026_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planned_sites_NP_16062026_5, 
                style: style_Planned_sites_NP_16062026_5,
                popuplayertitle: 'Planned_sites_NP_16.06.2026',
                interactive: true,
    title: 'Planned_sites_NP_16.06.2026<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_5_0.png" /> GRID<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_5_1.png" /> SOLAR<br />' });
var format_Energiumsolarsites_6 = new ol.format.GeoJSON();
var features_Energiumsolarsites_6 = format_Energiumsolarsites_6.readFeatures(json_Energiumsolarsites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energiumsolarsites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Energiumsolarsites_6.addFeatures(features_Energiumsolarsites_6);
var lyr_Energiumsolarsites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Energiumsolarsites_6, 
                style: style_Energiumsolarsites_6,
                popuplayertitle: 'Energium solar sites',
                interactive: true,
                title: '<img src="styles/legend/Energiumsolarsites_6.png" /> Energium solar sites'
            });
var group_Basedata = new ol.layer.Group({
                                layers: [lyr_togo_new_scores_1,lyr_perfecture_boundaries_2,],
                                fold: 'open',
                                title: 'Base data'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_togo_new_scores_1.setVisible(true);lyr_perfecture_boundaries_2.setVisible(true);lyr_Active_sites_NP_16062026_3.setVisible(true);lyr_Identified_sites_np_16062026_4.setVisible(true);lyr_Planned_sites_NP_16062026_5.setVisible(true);lyr_Energiumsolarsites_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Basedata,lyr_Active_sites_NP_16062026_3,lyr_Identified_sites_np_16062026_4,lyr_Planned_sites_NP_16062026_5,lyr_Energiumsolarsites_6];
lyr_togo_new_scores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_perfecture_boundaries_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Active_sites_NP_16062026_3.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', });
lyr_Identified_sites_np_16062026_4.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_Planned_sites_NP_16062026_5.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_Energiumsolarsites_6.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_togo_new_scores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_perfecture_boundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Active_sites_NP_16062026_3.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', });
lyr_Identified_sites_np_16062026_4.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Planned_sites_NP_16062026_5.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Energiumsolarsites_6.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_togo_new_scores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_perfecture_boundaries_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'inline label - always visible', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Active_sites_NP_16062026_3.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', });
lyr_Identified_sites_np_16062026_4.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Planned_sites_NP_16062026_5.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Energiumsolarsites_6.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Energiumsolarsites_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});