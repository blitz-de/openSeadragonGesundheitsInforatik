
  function init() {
        var tileSource = {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: "dzc_output_files/",
                Format: "jpeg",
                Overlap: "2",
                TileSize: "256",
                Size: {
                    Width:  "46000px",
                    Height: "32914px"
                }
            }
        };

        var viewer = OpenSeadragon({
            id: "openseadragonView",
            prefixUrl: "http://127.0.0.1:3000/dzi/openseadragon/images/",
            tileSources: [{
                tileSource: tileSource,
                width: "600px",
                height: "600px",
            }],
            showNavigationControl: true,
            showNavigator:true,
            navigatorPosition: "BOTTOM_RIGHT",
            navigatorAutoFade:  false,
        });

    }
    // ----------
    init();
