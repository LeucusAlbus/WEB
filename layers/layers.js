var wms_layers = [];


        var lyr_GITHUBTILES_0 = new ol.layer.Tile({
            'title': 'GITHUBTILES',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://leucusalbus.github.io/WEBTILE/{z}/{x}/{y}.png'
            })
        });

lyr_GITHUBTILES_0.setVisible(true);
var layersList = [lyr_GITHUBTILES_0];
