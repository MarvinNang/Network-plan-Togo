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
var format_tgo_admin1_em_2 = new ol.format.GeoJSON();
var features_tgo_admin1_em_2 = format_tgo_admin1_em_2.readFeatures(json_tgo_admin1_em_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tgo_admin1_em_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tgo_admin1_em_2.addFeatures(features_tgo_admin1_em_2);
var lyr_tgo_admin1_em_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tgo_admin1_em_2, 
                style: style_tgo_admin1_em_2,
                popuplayertitle: 'tgo_admin1_em',
                interactive: true,
                title: '<img src="styles/legend/tgo_admin1_em_2.png" /> tgo_admin1_em'
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
var format_Planned_sites_NP_16062026_4 = new ol.format.GeoJSON();
var features_Planned_sites_NP_16062026_4 = format_Planned_sites_NP_16062026_4.readFeatures(json_Planned_sites_NP_16062026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planned_sites_NP_16062026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planned_sites_NP_16062026_4.addFeatures(features_Planned_sites_NP_16062026_4);
var lyr_Planned_sites_NP_16062026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planned_sites_NP_16062026_4, 
                style: style_Planned_sites_NP_16062026_4,
                popuplayertitle: 'Planned_sites_NP_16.06.2026',
                interactive: true,
    title: 'Planned_sites_NP_16.06.2026<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_4_0.png" /> GRID<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_4_1.png" /> SOLAR<br />\
    <img src="styles/legend/Planned_sites_NP_16062026_4_2.png" /> INTERMEDIATE<br />' });
var format_Energiumsolarsites_5 = new ol.format.GeoJSON();
var features_Energiumsolarsites_5 = format_Energiumsolarsites_5.readFeatures(json_Energiumsolarsites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energiumsolarsites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Energiumsolarsites_5.addFeatures(features_Energiumsolarsites_5);
var lyr_Energiumsolarsites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Energiumsolarsites_5, 
                style: style_Energiumsolarsites_5,
                popuplayertitle: 'Energium solar sites',
                interactive: true,
                title: '<img src="styles/legend/Energiumsolarsites_5.png" /> Energium solar sites'
            });
var group_Basedata = new ol.layer.Group({
                                layers: [lyr_togo_new_scores_1,],
                                fold: 'open',
                                title: 'Base data'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_togo_new_scores_1.setVisible(true);lyr_tgo_admin1_em_2.setVisible(true);lyr_Active_sites_NP_16062026_3.setVisible(true);lyr_Planned_sites_NP_16062026_4.setVisible(true);lyr_Energiumsolarsites_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Basedata,lyr_tgo_admin1_em_2,lyr_Active_sites_NP_16062026_3,lyr_Planned_sites_NP_16062026_4,lyr_Energiumsolarsites_5];
lyr_togo_new_scores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_tgo_admin1_em_2.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Active_sites_NP_16062026_3.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', });
lyr_Planned_sites_NP_16062026_4.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_Energiumsolarsites_5.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_togo_new_scores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_tgo_admin1_em_2.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Active_sites_NP_16062026_3.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', });
lyr_Planned_sites_NP_16062026_4.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Energiumsolarsites_5.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_togo_new_scores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_tgo_admin1_em_2.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Active_sites_NP_16062026_3.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', });
lyr_Planned_sites_NP_16062026_4.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Energiumsolarsites_5.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Energiumsolarsites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});