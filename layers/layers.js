var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Mantap2023_1 = new ol.format.GeoJSON();
var features_Mantap2023_1 = format_Mantap2023_1.readFeatures(json_Mantap2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantap2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantap2023_1.addFeatures(features_Mantap2023_1);
var lyr_Mantap2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mantap2023_1, 
                style: style_Mantap2023_1,
                popuplayertitle: 'Mantap 2023',
                interactive: true,
    title: 'Mantap 2023<br />\
    <img src="styles/legend/Mantap2023_1_0.png" /> Mantap<br />\
    <img src="styles/legend/Mantap2023_1_1.png" /> Tidak Mantap<br />' });
var format_Mantap2024_2 = new ol.format.GeoJSON();
var features_Mantap2024_2 = format_Mantap2024_2.readFeatures(json_Mantap2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantap2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantap2024_2.addFeatures(features_Mantap2024_2);
var lyr_Mantap2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mantap2024_2, 
                style: style_Mantap2024_2,
                popuplayertitle: 'Mantap 2024',
                interactive: true,
    title: 'Mantap 2024<br />\
    <img src="styles/legend/Mantap2024_2_0.png" /> Mantap<br />\
    <img src="styles/legend/Mantap2024_2_1.png" /> Tidak Mantap<br />' });
var format_Mantap2025_3 = new ol.format.GeoJSON();
var features_Mantap2025_3 = format_Mantap2025_3.readFeatures(json_Mantap2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mantap2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mantap2025_3.addFeatures(features_Mantap2025_3);
var lyr_Mantap2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mantap2025_3, 
                style: style_Mantap2025_3,
                popuplayertitle: 'Mantap 2025',
                interactive: true,
    title: 'Mantap 2025<br />\
    <img src="styles/legend/Mantap2025_3_0.png" /> Mantap<br />\
    <img src="styles/legend/Mantap2025_3_1.png" /> Tidak Mantap<br />' });
var format_PCI2023_4 = new ol.format.GeoJSON();
var features_PCI2023_4 = format_PCI2023_4.readFeatures(json_PCI2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCI2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCI2023_4.addFeatures(features_PCI2023_4);
var lyr_PCI2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCI2023_4, 
                style: style_PCI2023_4,
                popuplayertitle: 'PCI 2023',
                interactive: true,
    title: 'PCI 2023<br />\
    <img src="styles/legend/PCI2023_4_0.png" /> Sangat Baik <br />\
    <img src="styles/legend/PCI2023_4_1.png" /> Baik <br />\
    <img src="styles/legend/PCI2023_4_2.png" /> Sedang<br />\
    <img src="styles/legend/PCI2023_4_3.png" /> Rusak Ringan <br />\
    <img src="styles/legend/PCI2023_4_4.png" /> Rusak Berat<br />' });
var format_PCI2024_5 = new ol.format.GeoJSON();
var features_PCI2024_5 = format_PCI2024_5.readFeatures(json_PCI2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCI2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCI2024_5.addFeatures(features_PCI2024_5);
var lyr_PCI2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCI2024_5, 
                style: style_PCI2024_5,
                popuplayertitle: 'PCI 2024',
                interactive: true,
    title: 'PCI 2024<br />\
    <img src="styles/legend/PCI2024_5_0.png" /> Sangat Baik <br />\
    <img src="styles/legend/PCI2024_5_1.png" /> Baik <br />\
    <img src="styles/legend/PCI2024_5_2.png" /> Sedang<br />\
    <img src="styles/legend/PCI2024_5_3.png" /> Rusak Ringan <br />\
    <img src="styles/legend/PCI2024_5_4.png" /> Rusak Berat<br />' });
var format_IRI2023_6 = new ol.format.GeoJSON();
var features_IRI2023_6 = format_IRI2023_6.readFeatures(json_IRI2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRI2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRI2023_6.addFeatures(features_IRI2023_6);
var lyr_IRI2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRI2023_6, 
                style: style_IRI2023_6,
                popuplayertitle: 'IRI 2023',
                interactive: true,
    title: 'IRI 2023<br />\
    <img src="styles/legend/IRI2023_6_0.png" /> Baik <br />\
    <img src="styles/legend/IRI2023_6_1.png" /> Sedang<br />\
    <img src="styles/legend/IRI2023_6_2.png" /> Rusak Ringan <br />\
    <img src="styles/legend/IRI2023_6_3.png" /> Rusak Berat<br />' });
var format_IRI2024_7 = new ol.format.GeoJSON();
var features_IRI2024_7 = format_IRI2024_7.readFeatures(json_IRI2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRI2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRI2024_7.addFeatures(features_IRI2024_7);
var lyr_IRI2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRI2024_7, 
                style: style_IRI2024_7,
                popuplayertitle: 'IRI 2024',
                interactive: true,
    title: 'IRI 2024<br />\
    <img src="styles/legend/IRI2024_7_0.png" /> Baik <br />\
    <img src="styles/legend/IRI2024_7_1.png" /> Sedang<br />\
    <img src="styles/legend/IRI2024_7_2.png" /> Rusak Ringan <br />\
    <img src="styles/legend/IRI2024_7_3.png" /> Rusak Berat<br />' });
var format_IRI2025_8 = new ol.format.GeoJSON();
var features_IRI2025_8 = format_IRI2025_8.readFeatures(json_IRI2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRI2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRI2025_8.addFeatures(features_IRI2025_8);
var lyr_IRI2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRI2025_8, 
                style: style_IRI2025_8,
                popuplayertitle: 'IRI 2025',
                interactive: true,
    title: 'IRI 2025<br />\
    <img src="styles/legend/IRI2025_8_0.png" /> Baik <br />\
    <img src="styles/legend/IRI2025_8_1.png" /> Sedang<br />\
    <img src="styles/legend/IRI2025_8_2.png" /> Rusak Ringan <br />\
    <img src="styles/legend/IRI2025_8_3.png" /> Rusak Berat<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Mantap2023_1.setVisible(true);lyr_Mantap2024_2.setVisible(true);lyr_Mantap2025_3.setVisible(true);lyr_PCI2023_4.setVisible(true);lyr_PCI2024_5.setVisible(true);lyr_IRI2023_6.setVisible(true);lyr_IRI2024_7.setVisible(true);lyr_IRI2025_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Mantap2023_1,lyr_Mantap2024_2,lyr_Mantap2025_3,lyr_PCI2023_4,lyr_PCI2024_5,lyr_IRI2023_6,lyr_IRI2024_7,lyr_IRI2025_8];
lyr_Mantap2023_1.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_Mantap2024_2.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_Mantap2025_3.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_PCI2023_4.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_PCI2024_5.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_IRI2023_6.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_IRI2024_7.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_IRI2025_8.set('fieldAliases', {'NO_RUAS': 'NO_RUAS', 'Linkid': 'Linkid', 'Nama_Ruas': 'Nama_Ruas', 'Ref_Awal': 'Ref_Awal', 'Ref_Akhir': 'Ref_Akhir', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kabupaten': 'Kabupaten', 'Kd_Satker': 'Kd_Satker', 'Satker': 'Satker', 'PPK': 'PPK', 'MNTP 2023': 'MNTP 2023', 'MNTP 2024': 'MNTP 2024', 'MNTP 2025': 'MNTP 2025', 'PCI 2023': 'PCI 2023', 'PCI 2024': 'PCI 2024', 'IRI 2023': 'IRI 2023', 'IRI 2024': 'IRI 2024', 'IRI 2025': 'IRI 2025', });
lyr_Mantap2023_1.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_Mantap2024_2.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_Mantap2025_3.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_PCI2023_4.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_PCI2024_5.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_IRI2023_6.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_IRI2024_7.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_IRI2025_8.set('fieldImages', {'NO_RUAS': 'TextEdit', 'Linkid': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Ref_Awal': 'TextEdit', 'Ref_Akhir': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kd_Satker': 'TextEdit', 'Satker': 'TextEdit', 'PPK': 'TextEdit', 'MNTP 2023': 'TextEdit', 'MNTP 2024': 'TextEdit', 'MNTP 2025': 'TextEdit', 'PCI 2023': 'TextEdit', 'PCI 2024': 'TextEdit', 'IRI 2023': 'TextEdit', 'IRI 2024': 'TextEdit', 'IRI 2025': 'TextEdit', });
lyr_Mantap2023_1.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'inline label - always visible', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_Mantap2024_2.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'inline label - always visible', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_Mantap2025_3.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'inline label - always visible', 'PCI 2023': 'inline label - always visible', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_PCI2023_4.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'inline label - always visible', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_PCI2024_5.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'inline label - always visible', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_IRI2023_6.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'hidden field', 'IRI 2023': 'inline label - always visible', 'IRI 2024': 'hidden field', 'IRI 2025': 'hidden field', });
lyr_IRI2024_7.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'inline label - always visible', 'IRI 2025': 'hidden field', });
lyr_IRI2025_8.set('fieldLabels', {'NO_RUAS': 'hidden field', 'Linkid': 'inline label - always visible', 'Nama_Ruas': 'inline label - always visible', 'Ref_Awal': 'hidden field', 'Ref_Akhir': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kabupaten': 'hidden field', 'Kd_Satker': 'hidden field', 'Satker': 'hidden field', 'PPK': 'hidden field', 'MNTP 2023': 'hidden field', 'MNTP 2024': 'hidden field', 'MNTP 2025': 'hidden field', 'PCI 2023': 'hidden field', 'PCI 2024': 'hidden field', 'IRI 2023': 'hidden field', 'IRI 2024': 'hidden field', 'IRI 2025': 'inline label - always visible', });
lyr_IRI2025_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});