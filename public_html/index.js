/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
    var Marzipano = window.Marzipano;
    var bowser = window.bowser;
    var screenfull = window.screenfull;
    var data = window.APP_DATA;
    var videos = window.VIDEO_DATA;
    var logos = window.LOGO_DATA;
    var activeScene = null;

    // Grab elements from DOM.
    var panoElement = document.querySelector('#pano');
    var sceneNameElement = document.querySelector('#titleBar .sceneName');
    var sceneListElement = document.querySelector('#sceneList');
    var sceneElements = document.querySelectorAll('#sceneList .scene .text');
    var sceneListToggleElement = document.querySelector('#sceneListToggle');
    var autorotateToggleElement = document.querySelector('#autorotateToggle');
    var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
    var deviceOrientationToggleElement = document.querySelector('#deviceOrientationToggle');
    var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
    var mapToggleElement = document.querySelector('#mapToggle');
    var mapContainerElements = document.querySelectorAll('.map');

    /***********************************
     * 
     *  Ersetze die Videos durch den Datensatz
     * 
     ***********************************/
//    var titleElement = parent.document.querySelector('.zoo-itempro-grid');

    /*var videos = [];
     
     titleElement.querySelectorAll('.uk-grid').forEach(function (divElem) {
     var name = divElem.querySelector('.element-itemname').innerHTML;
     //var youtubeID = divElem.querySelector('iframe').getAttribute('src').replace('https://www.youtube.com/embed/', '').replace(/\?.*$/g, '');
     var youtubeLink = divElem.querySelector('.element-link').querySelector('a').innerHTML;
     var youtubeID = youtubeLink.substring(youtubeLink.lastIndexOf("=") + 1);
     let video = {
     "name": name,
     "youtubeID": youtubeID
     };
     videos.push(video);
     divElem.remove();
     });*/

    var panoramaAnzahlMitVideo = 5;
    let videosPerScene = Math.floor(videos.length / panoramaAnzahlMitVideo);
    if (videos.length % panoramaAnzahlMitVideo > 0) {
        videosPerScene++;
    }
    var ii = 0;
    data.scenes.forEach(function (scene) {
        if (scene.videos) {
            scene.video_ids = [];
            for (let jj = 0; jj < videosPerScene; jj++) {
                if (ii === videos.length) {
                    break;
                }
                let video = {
                    "text": videos[ii].name,
                    "youtubeID": videos[ii].youtubeID
                };
                ii++;
                scene.video_ids.push(video);
            }
        }
    });

    /***********************************
     * 
     *  Ersetze die Logos durch den Datensatz
     * 
     ***********************************/
    let quadLogos = logos.logos_quad
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    let landscapeLogos = logos.logos_breit
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    let iQuadLogos = 0;
    let iLaScLogos = 0;
    
    data.scenes.forEach(function (scene) {
        scene.perspectiveHotspots.forEach(function (hspot) {
            if (hspot.width === hspot.height) {
                let logo = quadLogos[iQuadLogos++];
                if (iQuadLogos === quadLogos.length){
                    iQuadLogos = 0;
                }
                hspot.image = logo.image;
                hspot.url = logo.url;
            } else if (hspot.width > hspot.height) {
                let logo = landscapeLogos[iLaScLogos++];
                if (iLaScLogos === landscapeLogos.length){
                    iLaScLogos = 0;
                }
                hspot.image = logo.image;
                hspot.url = logo.url;
            }
        });
    });

    // Detect desktop or mobile mode.
    if (window.matchMedia) {
        var setMode = function () {
            if (mql.matches) {
                document.body.classList.remove('desktop');
                document.body.classList.add('mobile');
            } else {
                document.body.classList.remove('mobile');
                document.body.classList.add('desktop');
            }
        };
        var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
        setMode();
        mql.addListener(setMode);
    } else {
        document.body.classList.add('desktop');
    }

    // Detect whether we are on a touch device.
    document.body.classList.add('no-touch');
    window.addEventListener('touchstart', function () {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');
    });

    // Use tooltip fallback mode on IE < 11.
    if (bowser.msie && parseFloat(bowser.version) < 11) {
        document.body.classList.add('tooltip-fallback');
    }

    // Viewer options.
    var viewerOpts = {
        controls: {
            mouseViewMode: data.settings.mouseViewMode
        }
    };

    // Initialize viewer.
    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

    // Create scenes.
    var scenes = data.scenes.map(function (data) {
        var urlPrefix = "tiles";
        var source = Marzipano.ImageUrlSource.fromString(
                urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
                {cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg"});
        var geometry = new Marzipano.CubeGeometry(data.levels);

        var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180);
        var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

        var scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });

        // Create link hotspots.
        data.linkHotspots.forEach(function (hotspot) {
            var element = createLinkHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, {yaw: hotspot.yaw, pitch: hotspot.pitch});
        });

        // Create info hotspots.
        data.infoHotspots.forEach(function (hotspot) {
            var element = createInfoHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, {yaw: hotspot.yaw, pitch: hotspot.pitch});
        });

        // Create perpective hotspots.
        data.perspectiveHotspots.forEach(function (hotspot) {
            var element = createPerspectiveHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, {yaw: hotspot.yaw, pitch: hotspot.pitch}, {perspective: {radius: hotspot.radius, extraTransforms: hotspot.extraTransforms}});
        });

        if (data.videos) {
            scene.hotspotContainer().createHotspot(createVideoHotspotElement(data.id), {yaw: data.iframespot_yaw, pitch: data.iframespot_pitch}, {perspective: {radius: data.iframespot_radius, extraTransforms: data.iframespot_extraTransform}});
            scene.hotspotContainer().createHotspot(createVideoListHotspotElement(data.video_ids, data.id), {yaw: data.iframeselect_yaw, pitch: data.iframeselect_pitch});
        }

        return {
            data: data,
            scene: scene,
            view: view
        };
    });

    // Set up autorotate, if enabled.
    var autorotate = Marzipano.autorotate({
        yawSpeed: 0.03,
        targetPitch: 0,
        targetFov: Math.PI / 2
    });
    if (data.settings.autorotateEnabled) {
        autorotateToggleElement.classList.add('enabled');
    }

    // Set handler for autorotate toggle.
    autorotateToggleElement.addEventListener('click', toggleAutorotate);

    // Set handler for map toggle.
    mapToggleElement.addEventListener('click', toggleMap);
    mapToggleElement.classList.add('enabled');

    // Set up fullscreen mode, if supported.
    if (screenfull.enabled && data.settings.fullscreenButton) {
        document.body.classList.add('fullscreen-enabled');
        fullscreenToggleElement.addEventListener('click', function () {
            screenfull.toggle();
        });
        screenfull.on('change', function () {
            if (screenfull.isFullscreen) {
                fullscreenToggleElement.classList.add('enabled');
            } else {
                fullscreenToggleElement.classList.remove('enabled');
            }
        });
    } else {
        document.body.classList.add('fullscreen-disabled');
    }

    // Set handler for scene list toggle.
    sceneListToggleElement.addEventListener('click', toggleSceneList);

    // Start with the scene list open on desktop.
    if (!document.body.classList.contains('mobile')) {
        showSceneList();
    }

    // Set handler for scene switch.
    scenes.forEach(function (scene) {
        addMapMarker(scene);
        var el = document.querySelector('#sceneList .scene .text[data-id="' + scene.data.id + '"]');
        if (el !== null) {
            el.addEventListener('click', function () {
                switchScene(scene);
                // On mobile, hide scene list after selecting a scene.
                if (document.body.classList.contains('mobile')) {
                    hideSceneList();
                }
            });
        }
    });

    var markerList = document.querySelectorAll(".mark");

    // DOM elements for view controls.
    var viewUpElement = document.querySelector('#viewUp');
    var viewDownElement = document.querySelector('#viewDown');
    var viewLeftElement = document.querySelector('#viewLeft');
    var viewRightElement = document.querySelector('#viewRight');
    var viewInElement = document.querySelector('#viewIn');
    var viewOutElement = document.querySelector('#viewOut');

    // Dynamic parameters for controls.
    var velocity = 0.7;
    var friction = 3;
    // Associate view controls with elements.
    var controls = viewer.controls();
    controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
    controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
    controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
    controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
    controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
    controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

    // Register the custom control method.
    controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

    if (data.settings.deviceOrientationEnabled) {
        deviceOrientationToggleElement.classList.add('enabled');
        enable();
    }
    deviceOrientationToggleElement.addEventListener('click', toggleDeviceOrientation);

    function sanitize(s) {
        return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
    }

    function switchScene(scene) {
        stopVideos();
        stopAutorotate();
        var initialViewParameters = scene.data.initialViewParameters;
        if (activeScene && !scene.data.videos) {
            scene.data.linkHotspots.forEach(function (hotspot) {
                if (hotspot.target === activeScene.data.id){
                    initialViewParameters.yaw = scene.data.linkHotspots[hotspot.next].yaw;
                }
            });
        }
        scene.view.setParameters(initialViewParameters);
        activeScene = scene;
        scene.scene.switchTo();
        startAutorotate();
        updateSceneName(scene);
        updateSceneList(scene);
        updateMapImage(scene);
        updateMarker(scene);
    }

    function updateSceneName(scene) {
        sceneNameElement.innerHTML = sanitize(scene.data.name);
    }

    function updateSceneList(scene) {
        for (var i = 0; i < sceneElements.length; i++) {
            var el = sceneElements[i];
            if (el.getAttribute('data-id') === scene.data.id) {
                el.classList.add('current');
            } else {
                el.classList.remove('current');
            }
        }
    }

    function updateMapImage(scene) {
        //mapElement.setAttribute("src", scene.data.mapimage);
        for (var i = 0; i < mapContainerElements.length; i++) {
            var el = mapContainerElements[i];
            if (el.getAttribute('id') === 'map' + scene.data.mapcontainer) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        }
    }

    function updateMarker(scene) {
        for (var i = 0; i < markerList.length; i++) {
            var el = markerList[i];
            if (el.getAttribute('data-id') === scene.data.id) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    }

    function showSceneList() {
        sceneListElement.classList.add('enabled');
        sceneListToggleElement.classList.add('enabled');
    }

    function hideSceneList() {
        sceneListElement.classList.remove('enabled');
        sceneListToggleElement.classList.remove('enabled');
    }

    function toggleSceneList() {
        sceneListElement.classList.toggle('enabled');
        sceneListToggleElement.classList.toggle('enabled');
    }


    function requestPermissionForIOS() {

        window.DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        enableDeviceOrientation();
                    }
                }).catch((e) => {
            console.error(e);
        });
    }

    function enableDeviceOrientation() {
        deviceOrientationControlMethod.getPitch(function (err, pitch) {
            if (!err) {
                activeScene.view.setPitch(pitch);
            }
        });
        controls.enableMethod('deviceOrientation');
    }

    function enable() {
        if (!deviceOrientationToggleElement.classList.contains('enabled')) {
            return;
        }
        if (window.DeviceOrientationEvent) {
            if (typeof (window.DeviceOrientationEvent.requestPermission) === 'function') {
                requestPermissionForIOS();
            } else {
                enableDeviceOrientation();
            }
        }
    }

    function disable() {
        controls.disableMethod('deviceOrientation');
    }

    function toggleDeviceOrientation() {
        if (deviceOrientationToggleElement.classList.contains('enabled')) {
            deviceOrientationToggleElement.classList.remove('enabled');
            disable();
        } else {
            deviceOrientationToggleElement.classList.add('enabled');
            enable();
        }
    }

    function startAutorotate() {
        if (!autorotateToggleElement.classList.contains('enabled')) {
            return;
        }
        viewer.startMovement(autorotate);
        viewer.setIdleMovement(3000, autorotate);
    }

    function stopAutorotate() {
        viewer.stopMovement();
        viewer.setIdleMovement(Infinity);
    }

    function toggleAutorotate() {
        if (autorotateToggleElement.classList.contains('enabled')) {
            autorotateToggleElement.classList.remove('enabled');
            stopAutorotate();
        } else {
            autorotateToggleElement.classList.add('enabled');
            startAutorotate();
        }
    }

    function showMap() {
        document.getElementById('mapcontainer').style.display = 'block';
    }

    function hideMap() {
        document.getElementById('mapcontainer').style.display = 'none';
    }

    function toggleMap() {
        if (mapToggleElement.classList.contains('enabled')) {
            mapToggleElement.classList.remove('enabled');
            hideMap();
        } else {
            mapToggleElement.classList.add('enabled');
            showMap();
        }
    }

    function createPerspectiveHotspotElement(hotspot) {
        var wrapper = document.createElement('div');
        wrapper.setAttribute("id", "hotspot2");
        wrapper.classList.add('perspectivehotspot');
        wrapper.setAttribute("style", "width:" + hotspot.width + "px; height:" + hotspot.height + "px;");

        var link = document.createElement('a');
        link.setAttribute("href", hotspot.url);
        link.setAttribute("target", "_blank");

        var helperwrapper = document.createElement('div');
        helperwrapper.classList.add('logowrapper');
        //helperwrapper.setAttribute("style", "filter: brightness(" + hotspot.brightness + ");");
        hotspot.addclasses.forEach(function (cl) {
            helperwrapper.classList.add(cl);
        });

        var image = document.createElement("img");
        image.classList.add('logoimage');
        image.setAttribute("src", hotspot.image);

        helperwrapper.appendChild(image);
        link.appendChild(helperwrapper);
        wrapper.appendChild(link);

        return wrapper;
    }

    function createVideoHotspotElement(videowallid) {
        var wrapper = document.createElement('div');
        wrapper.setAttribute("id", "iframespot_" + videowallid);
        wrapper.classList.add('videowall');

        var text = document.createElement("div");
        text.classList.add('message');
        text.innerHTML = "Wähle einen Titel! <br><span style=\"font-size: 0.45em;\">Dabei werden Daten an Youtube weitergeleitet.</span>";
        wrapper.appendChild(text);

        return wrapper;
    }

    function createVideoListHotspotElement(video_ids, videowallid) {
        var ul = document.createElement('ul');
        ul.setAttribute("id", "iframeselect");

        video_ids.forEach(function (id) {
            var li = document.createElement("li");
            li.setAttribute("data-source", id.youtubeID);
            li.innerHTML = id.text;
            addClickEvent(li, videowallid, id.youtubeID);
            ul.appendChild(li);
        });

        return ul;
    }

    function addMapMarker(scene) {
        var spanElem = document.createElement('span');
        spanElem.classList.add('marker-wrapper');
        spanElem.setAttribute("id", scene.data.id);
        spanElem.setAttribute("style", "left: " + scene.data.x + ";top: " + scene.data.y + ";");
        spanElem.innerHTML = '<svg class="mark" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 10 10" version="1.1" fill-rule="evenodd" clip-rule="evenodd" data-id="' + scene.data.id + '"><circle cx="5" cy="5" r="5" /></svg>';
        spanElem.addEventListener('click', function () {
            switchScene(scene);
        });
        document.querySelector('#map' + scene.data.mapcontainer).appendChild(spanElem);
    }

    function createLinkHotspotElement(hotspot) {

        // Create wrapper element to hold icon and tooltip.
        var wrapper = document.createElement('div');
        wrapper.classList.add('hotspot');
        wrapper.classList.add('link-hotspot');

        // Create image element.
        var icon = document.createElement('img');
        icon.src = 'img/link.svg';
        icon.classList.add('link-hotspot-icon');

        // Set rotation transform.
        var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
        for (var i = 0; i < transformProperties.length; i++) {
            var property = transformProperties[i];
            icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
        }

        // Add click event handler.
        wrapper.addEventListener('click', function () {
            const s = findSceneById(hotspot.target);
            switchScene(s);
        });

        // Prevent touch and scroll events from reaching the parent element.
        // This prevents the view control logic from interfering with the hotspot.
        stopTouchAndScrollEventPropagation(wrapper);

        // Create tooltip element.
        var tooltip = document.createElement('div');
        tooltip.classList.add('hotspot-tooltip');
        tooltip.classList.add('link-hotspot-tooltip');
        tooltip.innerHTML = findSceneDataById(hotspot.target).name;

        wrapper.appendChild(icon);
        wrapper.appendChild(tooltip);

        return wrapper;
    }

    function createInfoHotspotElement(hotspot) {

        // Create wrapper element to hold icon and tooltip.
        var wrapper = document.createElement('div');
        wrapper.classList.add('hotspot');
        wrapper.classList.add('info-hotspot');

        // Create hotspot/tooltip header.
        var header = document.createElement('div');
        header.classList.add('info-hotspot-header');

        // Create image element.
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('info-hotspot-icon-wrapper');
        var icon = document.createElement('img');
        icon.src = 'img/note.svg';
        icon.classList.add('info-hotspot-icon');
        iconWrapper.appendChild(icon);

        // Create title element.
        var titleWrapper = document.createElement('div');
        titleWrapper.classList.add('info-hotspot-title-wrapper');
        var title = document.createElement('div');
        title.classList.add('info-hotspot-title');
        title.innerHTML = hotspot.title;
        titleWrapper.appendChild(title);

        // Create close element.
        var closeWrapper = document.createElement('div');
        closeWrapper.classList.add('info-hotspot-close-wrapper');
        var closeIcon = document.createElement('img');
        closeIcon.src = 'img/close.png';
        closeIcon.classList.add('info-hotspot-close-icon');
        closeWrapper.appendChild(closeIcon);

        // Construct header element.
        header.appendChild(iconWrapper);
        header.appendChild(titleWrapper);
        header.appendChild(closeWrapper);

        // Create text element.
        var text = document.createElement('div');
        text.classList.add('info-hotspot-text');
        text.innerHTML = hotspot.text;

        // Place header and text into wrapper element.
        wrapper.appendChild(header);
        wrapper.appendChild(text);

        // Create a modal for the hotspot content to appear on mobile mode.
        var modal = document.createElement('div');
        modal.innerHTML = wrapper.innerHTML;
        modal.classList.add('info-hotspot-modal');
        document.body.appendChild(modal);

        var toggle = function () {
            wrapper.classList.toggle('visible');
            modal.classList.toggle('visible');
        };

        // Show content when hotspot is clicked.
        wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

        // Hide content when close icon is clicked.
        modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

        // Prevent touch and scroll events from reaching the parent element.
        // This prevents the view control logic from interfering with the hotspot.
        stopTouchAndScrollEventPropagation(wrapper);

        return wrapper;
    }

    // Prevent touch and scroll events from reaching the parent element.
    function stopTouchAndScrollEventPropagation(element, eventList) {
        var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
            'wheel', 'mousewheel'];
        for (var i = 0; i < eventList.length; i++) {
            element.addEventListener(eventList[i], function (event) {
                event.stopPropagation();
            });
        }
    }

    function findSceneById(id) {
        for (var i = 0; i < scenes.length; i++) {
            if (scenes[i].data.id === id) {
                return scenes[i];
            }
        }
        return null;
    }

    function findSceneDataById(id) {
        for (var i = 0; i < data.scenes.length; i++) {
            if (data.scenes[i].id === id) {
                return data.scenes[i];
            }
        }
        return null;
    }

    // Switch sources when clicked.
    function switchHotspot(id, videowallid, youtubeID) {
        var wrapper = document.getElementById('iframespot_' + videowallid);
        wrapper.innerHTML = '<iframe id="' + id + '" class="youtube-video" width="560" height="315" allow="autoplay" src="https://www.youtube.com/embed/' + youtubeID + '?enablejsapi=1&amp;autoplay=1&amp;rel=0&amp;controls=1&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>';
    }

    function addClickEvent(element, videowallid, youtubeID) {
        element.addEventListener('click', function () {
            switchHotspot(element.getAttribute('data-source'), videowallid, youtubeID);
        });
    }

    function stopVideos() {
        var elementList = document.querySelectorAll('.youtube-video');
        for (var i = 0; i < elementList.length; i++) {
            elementList[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    }

    // Display the initial scene.
    switchScene(scenes[0]);
})();
