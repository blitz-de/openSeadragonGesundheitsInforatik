function init() {
      var tileSource1 = {
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

      var tileSource2 = {
          Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2008",
              Url: "CMU-1/mydz_files/",
              Format: "jpeg",
              Overlap: "2",
              TileSize: "256",
              Size: {
                  Width:  "46000px",
                  Height: "32914px"
              }
          }
      };

      var tileSource3 = {
          Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2008",
              Url: "CMU-1/mydz_files2/",
              Format: "jpeg",
              Overlap: "2",
              TileSize: "256",
              Size: {
                  Width:  "46000px",
                  Height: "32914px"
              }
          }
      };

      var tileSource4 = {
          Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2008",
              Url: "CMU-1/mydz_files3/",
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
              tileSource: tileSource1,
              width: "600px",
              height: "600px",
          }],
          collectionMode: true,
          collectionRows: 2,
          collectionTileSize:  2048,
          collectionTileMargin: 256,
          showNavigator:true,
          navigatorPosition: "BOTTOM_RIGHT",
          navigatorAutoFade:  false,

      });

      viewer.addTiledImage({
          tileSource: tileSource2,
          x: 1,
          y: 4,
          width: 1
      });

      viewer.addTiledImage({
          tileSource: tileSource3,
          x: 3,
          y: 0,
          width: 1
      });
      viewer.addTiledImage({
          tileSource: tileSource4,
          x: 2,
          y: 0,
          width: 1
      });
  }
  // ----------
  init();
