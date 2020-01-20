(function ($) {
    "use strict";

    $(document).ready(function () {

        // default values
        var lat = 24.64512;
        var lng = 46.733904;

        navigator.geolocation.getCurrentPosition(navGeoSuccess, navGeoError);

        function navGeoSuccess(position) {
            // if user has geolocation enabled - get his current position
            lat = position.coords.latitude;
            lng = position.coords.longitude;

            locateMap();
        }

        function navGeoError(error) {
            locateMap();
            console.warn(error.message);
        }

        function locateMap() {
            $(".fifthExample").ShopLocator({
                map: {
                    center: [lat, lng],
                    zoom: 17,
                    allMarkersInViewport: false
                },
                infoBubble: {
                    visible: true
                },
                marker: {
                    latlng: [24.64512, 46.733904]
                }
            });
        }

        //Style

        $(".sixthStyle").ShopLocator({
            pluginStyle: "dark",
            paginationStyle: 1,
            infoBubble: {
                visible: true,
                backgroundColor: 'transparent',
                arrowPosition: 50,
                minHeight: 185,
                maxHeight: 250,
                minWidth: 185,
                maxWidth: 185,
                hideCloseButton: false,
                closeSrc: "src/style/dark/images/closeButton.png",
                offsetTop: 7,
                offsetRight: 20
            },
            map: {
                mapStyle: [{ "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }]
            },
            markersIcon: "src/style/dark/images/marker.png",
            cluster: {
                enable: true,
                gridSize: 60,
                style: {
                    textColor: '#b9b9b9',
                    textSize: 18,
                    heightSM: 57,
                    widthSM: 57,
                    heightMD: 66,
                    widthMD: 66,
                    heightBIG: 74,
                    widthBIG: 74,
                    iconSmall: "src/style/dark/images/clusterSmall.png",
                    iconMedium: "src/style/dark/images/clusterMedium.png",
                    iconBig: "src/style/dark/images/clusterBig.png"
                }
            },
            sidebar: {
                visible: true,
                selectSection: {
                    visible: true,
                    difFiles: [["Dealers", "Dealers"], ["Branches", "showrooms"]],
                },
                searchBox: {
                    visible: true,
                    search: true
                },
                results: {
                    pageSize: 8,
                    paginationItems: 5
                }
            }
        });


    });



}(jQuery));
