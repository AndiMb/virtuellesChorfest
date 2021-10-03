var APP_DATA = {
    "scenes": [
        {
            "id": "0-step1",
            "name": "Eingang",
            "mapcontainer": "1",
            "x": "49.41%",
            "y": "97.92%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0.037751761081231905,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 0.037751761081231905,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "1-step2",
                    "next": 1
                },
                {
                    "yaw": 3.2,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "10-hauptbuehne-dorf",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [
                {
                    "yaw": -0.249,
                    "pitch": -0.068,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 2000,
                    "extraTransforms": "rotateY(20deg) rotateZ(1deg)",
                    "addclasses": ["bright62"]
                },
                {
                    "yaw": 0.023,
                    "pitch": -0.029,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 4700,
                    "extraTransforms": "rotateY(-20deg)",
                    "addclasses": ["bright61"]
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "1-step2",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "49.02%",
            "y": "92.19%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -0.3,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": -0.3,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "2-step3",
                    "next": 1
                },
                {
                    "yaw": -3.29,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "0-step1",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [
                {
                    "yaw": -0.78,
                    "pitch": -0.175,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1100,
                    "extraTransforms": "rotateY(0deg) rotateZ(0deg)",
                    "addclasses": ["bright59"]
                },
                {
                    "yaw": -0.191,
                    "pitch": -0.0488,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 3800,
                    "extraTransforms": "rotateY(13deg) rotateZ(-1deg)",
                    "addclasses": ["bright64"]
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "2-step3",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "45.90%",
            "y": "83.46%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -0.35,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 2.427113119,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "1-step2",
                    "next": 3
                },
                {
                    "yaw": 4.75,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "3-hauptbuehne",
                    "next": 2
                },
                {
                    "yaw": 1.45,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "4-nebenbuehne",
                    "next": 1
                },
                {
                    "yaw": -0.35,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "5-step4",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [
                {
                    "yaw": -0.72,
                    "pitch": -0.091,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1430,
                    "extraTransforms": "rotateY(0deg) rotateZ(0deg)",
                    "addclasses": ["bright67"]
                },
                {
                    "yaw": -1.827,
                    "pitch": -0.097,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1340,
                    "extraTransforms": "rotateY(5deg) rotateX(4deg) rotateZ(0.9deg)",
                    "addclasses": ["bright97"]
                },
                {
                    "yaw": 1.288,
                    "pitch": -0.057,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 2280,
                    "extraTransforms": "rotateY(3deg) rotateX(3deg) rotateZ(0.3deg)",
                    "addclasses": ["bright66"]
                },
                {
                    "yaw": 2.301,
                    "pitch": -0.0684,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1900,
                    "extraTransforms": "rotateY(-3deg) rotateX(0deg) rotateZ(0deg)",
                    "addclasses": ["bright65"]
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "3-hauptbuehne",
            "name": "Hauptbühne",
            "mapcontainer": "1",
            "x": "35.74%",
            "y": "88.67%",
            "videos": true,
            "iframespot_yaw": -0.53,
            "iframespot_pitch": -0.16,
            "iframespot_radius": 1100,
            "iframespot_extraTransform": "rotateX(0deg)",
            "iframeselect_yaw": -0.775,
            "iframeselect_pitch": -0.3,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": -0.12,
                "yaw": -0.53,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 0.975,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "2-step3",
                    "next": 1
                },
                {
                    "yaw": -2.0,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "6-step5",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [
                {
                    "yaw": -2.404,
                    "pitch": -0.127,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1010,
                    "extraTransforms": "rotateX(5deg) rotateY(3deg) rotateZ(0deg)",
                    "addclasses": ["bright98"]
                },
                {
                    "yaw": 0.772,
                    "pitch": -0.0672,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1900,
                    "extraTransforms": "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
                    "addclasses": ["bright69"]
                }
            ],
            "infoHotspots": [],
            "video_ids": [
                {
                    "youtubeID": "XVLaneDac6U",
                    "text": "When You're Smiling"
                },
                {
                    "youtubeID": "Vf0E0Ypydms",
                    "text": "Komm, lieber Mai"
                }
            ]
        },
        {
            "id": "4-nebenbuehne",
            "name": "Nebenbühne",
            "mapcontainer": "1",
            "x": "54.10%",
            "y": "85.94%",
            "videos": true,
            "iframespot_yaw": 0.005,
            "iframespot_pitch": -0.16,
            "iframespot_radius": 1200,
            "iframespot_extraTransform": "rotateX(0deg)",
            "iframeselect_yaw": -0.23,
            "iframeselect_pitch": -0.29,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": -0.16,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 5.0,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "2-step3",
                    "next": -1
                }
            ],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": [
                {
                    "youtubeID": "4zIPNWFBEDs",
                    "text": "Rothenburger Wellerman"
                },
                {
                    "youtubeID": "Oa_ULKizeU8",
                    "text": "Our Father"
                },
                {
                    "youtubeID": "4qNsrNTrWao",
                    "text": "Auf, du junger Wandersmann & Es wollt ein Jägerlein jagen"
                }
            ]
        },
        {
            "id": "5-step4",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "43.26%",
            "y": "77.47%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -0.8,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 2.34,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "2-step3",
                    "next": 1
                },
                {
                    "yaw": -2.3,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "8-step7",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": []
        },
        {
            "id": "6-step5",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "26.46%",
            "y": "93.23%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -0.5,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 1.4,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "3-hauptbuehne",
                    "next": 1
                },
                {
                    "yaw": -0.5,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "7-step6",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": []
        },
        {
            "id": "7-step6",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "23.14%",
            "y": "86.72%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0.7,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": -2.4,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "6-step5",
                    "next": 1
                },
                {
                    "yaw": 2.2,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "8-step7",
                    "next": 0
                }
            ],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": []
        },
        {
            "id": "8-step7",
            "name": "1. Virtuelles Chorfest",
            "mapcontainer": "1",
            "x": "33.20%",
            "y": "82.94%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -0.25,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": -1.9,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "7-step6",
                    "next": 1
                },
                {
                    "yaw": 1.4,
                    "pitch": 0.2735728426402133,
                    "rotation": 0,
                    "target": "5-step4",
                    "next": 0
                }],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": []
        },
        {
            "id": "9-konzertsaal",
            "name": "Konzertsaal",
            "mapcontainer": "2",
            "x": "50%",
            "y": "50%",
            "videos": true,
            "iframespot_yaw": 3.14,
            "iframespot_pitch": -0.17,
            "iframespot_radius": 800,
            "iframespot_extraTransform": "rotateX(9deg)",
            "iframeselect_yaw": 2.8,
            "iframeselect_pitch": -0.34,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 3.14,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 1.6,
                    "pitch": 0.025,
                    "rotation": 0,
                    "target": "11-position2_dorf",
                    "next": -1
                }],
            "perspectiveHotspots": [
                {
                    "yaw": 1.7955,
                    "pitch": -0.027,
                    "image": "logos/OSCVeV.png",
                    "url": "https://www.oscvev.de",
                    "width": 200,
                    "height": 200,
                    "radius": 2500,
                    "extraTransforms": "rotateX(0deg) rotateY(-15deg) rotateZ(0deg)",
                    "addclasses": ["bright62"]
                },
                {
                    "yaw": 2.0675,
                    "pitch": -0.007,
                    "image": "logos/OSCVeV.png",
                    "url": "https://www.oscvev.de",
                    "width": 200,
                    "height": 200,
                    "radius": 2400,
                    "extraTransforms": "rotateX(0deg) rotateY(-8deg) rotateZ(0deg)",
                    "addclasses": ["bright62"]
                },
                {
                    "yaw": -2.15755,
                    "pitch": 0.069,
                    "image": "logos/OSCVeV.png",
                    "url": "https://www.oscvev.de",
                    "width": 200,
                    "height": 200,
                    "radius": 2400,
                    "extraTransforms": "rotateX(0deg) rotateY(-2deg) rotateZ(0deg)",
                    "addclasses": ["bright62"]
                },
                {
                    "yaw": -1.848,
                    "pitch": -0.060,
                    "image": "logos/OSCVeV_quer.png",
                    "url": "https://www.oscvev.de",
                    "width": 280,
                    "height": 100,
                    "radius": 1230,
                    "extraTransforms": "rotateX(5deg) rotateY(10deg) rotateZ(0deg)",
                    "addclasses": ["bright62"]
                }
            ],
            "infoHotspots": [],
            "video_ids": [
                {
                    "youtubeID": "h0NY6_KPQrA",
                    "text": "Imagine"
                },
                {
                    "youtubeID": "oT8KKG6y7rI",
                    "text": "Roar"
                },
                {
                    "youtubeID": "0Uan1b-FmKM",
                    "text": "Fair Phyllis I saw sitting all alone"
                },
                {
                    "youtubeID": "Ty398uSyBKA",
                    "text": "Rolling in the Deep"
                },
                {
                    "youtubeID": "1Z9mkwWCC-8",
                    "text": "Schöner Frühling, komm doch wieder"
                }
            ]
        },
        {
            "id": "10-hauptbuehne-dorf",
            "name": "Hauptbühne im Dorf",
            "mapcontainer": "3",
            "x": "57.2%",
            "y": "30%",
            "videos": true,
            "iframespot_yaw": 2.163,
            "iframespot_pitch": -0.1,
            "iframespot_radius": 1050,
            "iframespot_extraTransform": "rotateX(5deg) rotateY(5deg)",
            "iframeselect_yaw": 1.9,
            "iframeselect_pitch": -0.25,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 2.163,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 2.7,
                    "pitch": 0.025,
                    "rotation": 0.3,
                    "target": "11-position2_dorf",
                    "next": 1
                },
                {
                    "yaw": -0.4,
                    "pitch": 0.025,
                    "rotation": 0.0,
                    "target": "0-step1",
                    "next": 0
                },
                {
                    "yaw": 0.9,
                    "pitch": 0.025,
                    "rotation": 1.0,
                    "target": "12-nebenbuehne-dorf",
                    "next": 0
                }],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": [
                {
                    "youtubeID": "h0NY6_KPQrA",
                    "text": "Imagine"
                },
                {
                    "youtubeID": "oT8KKG6y7rI",
                    "text": "Roar"
                },
                {
                    "youtubeID": "0Uan1b-FmKM",
                    "text": "Fair Phyllis I saw sitting all alone"
                },
                {
                    "youtubeID": "Ty398uSyBKA",
                    "text": "Rolling in the Deep"
                },
                {
                    "youtubeID": "1Z9mkwWCC-8",
                    "text": "Schöner Frühling, komm doch wieder"
                }
            ]
        },
        {
            "id": "11-position2_dorf",
            "name": "Dorf",
            "mapcontainer": "3",
            "x": "53%",
            "y": "59%",
            "videos": false,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": -1.5707963267948966,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 2.9,
                    "pitch": 0.025,
                    "rotation": 0,
                    "target": "9-konzertsaal",
                    "next": 1
                },
                {
                    "yaw": 1.3,
                    "pitch": 0.025,
                    "rotation": -1.5707963267948966,
                    "target": "10-hauptbuehne-dorf",
                    "next": 0
                },
                {
                    "yaw": 1.85,
                    "pitch": 0.025,
                    "rotation": 1.5707963267948966,
                    "target": "12-nebenbuehne-dorf",
                    "next": 0
                }],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": []
        },
        {
            "id": "12-nebenbuehne-dorf",
            "name": "Nebenbühne im Dorf",
            "mapcontainer": "3",
            "x": "74%",
            "y": "77%",
            "videos": true,
            "iframespot_yaw": 2.030,
            "iframespot_pitch": -0.125,
            "iframespot_radius": 850,
            "iframespot_extraTransform": "rotateX(7deg) rotateY(-2deg)",
            "iframeselect_yaw": 1.72,
            "iframeselect_pitch": -0.29,
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                },
                {
                    "tileSize": 512,
                    "size": 4096
                }
            ],
            "faceSize": 4096,
            "initialViewParameters": {
                "pitch": -0.125,
                "yaw": 2.030,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": -0.75,
                    "pitch": -0.0,
                    "rotation": 0,
                    "target": "11-position2_dorf",
                    "next": 1
                },
                {
                    "yaw": 1.3,
                    "pitch": 0.025,
                    "rotation": -1.5707963267948966,
                    "target": "10-hauptbuehne-dorf",
                    "next": 0
                }],
            "perspectiveHotspots": [],
            "infoHotspots": [],
            "video_ids": [
                {
                    "youtubeID": "h0NY6_KPQrA",
                    "text": "Imagine"
                },
                {
                    "youtubeID": "oT8KKG6y7rI",
                    "text": "Roar"
                },
                {
                    "youtubeID": "0Uan1b-FmKM",
                    "text": "Fair Phyllis I saw sitting all alone"
                },
                {
                    "youtubeID": "Ty398uSyBKA",
                    "text": "Rolling in the Deep"
                },
                {
                    "youtubeID": "1Z9mkwWCC-8",
                    "text": "Schöner Frühling, komm doch wieder"
                }
            ]
        }
    ],
    "name": "Virtuelles Chorfest",
    "settings": {
        "mouseViewMode": "drag",
        "deviceOrientationEnabled": false,
        "autorotateEnabled": false,
        "fullscreenButton": true,
        "viewControlButtons": false
    }
};
