var APP_DATA = {
  "scenes": [

    // Pine View Kitchen data
    {
      "id": "Pine View Kitchen",
      "name": "Pine View Kitchen",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.34553221341017704,
        "pitch": -0.3000150467343943,
        "fov": 1.2634123859167636
      },

      // Link hotspts of pine view kitchen
      "linkHotspots": [
        {
          "yaw": 1.5952929679252783,
          "pitch": 0.006963272264323805,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },
        {
          "yaw": 1.8679526252469074,
          "pitch": 0.020725946251111793,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },
        {
          "yaw": 2.10157573133385,
          "pitch": 0.020062516672403774,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },
        {
          "yaw": 2.297741181364036,
          "pitch": 0.024698456907023214,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },
        {
          "yaw": -1.8849773983846418,
          "pitch": 0.0008074282750740736,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },

        // Link hotspot to BoreyA Overview
        {
          "yaw": -0.8180401418057635,
          "pitch": -0.07241030143335259,
          "rotation": 0,
          "target": "BoreyA Overview"
        },
        {
          "yaw": 0.6995901234104114,
          "pitch": -0.06567061164170873,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],
      "infoHotspots": [
        // Information of Pine View Kitchen
        {
          "yaw": 0.27304195677895535,
          "pitch": -0.146228407941571,
          "title": "Pine View Kitchen",
          "text": "We can taste the delicious food and enjoy view around restaurant."
        }
      ]
    },

    // BoreyA Overview data
    {
      "id": "BoreyA Overview",
      "name": "BoreyA Overview",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },

      // Link hotspots of BoreyA Overview
      "linkHotspots": [
        // Link hopspot to Pine View Kitchen
        {
          "yaw": -1.2312700459593842,
          "pitch": -0.040690112811695656,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },
        // Link hotspot to BoreyA View1
        {
          "yaw": -0.021863814880106247,
          "pitch": -0.015470139775704439,
          "rotation": 0,
          "target": "BoreyA View1"
        }
        
      ],
      "infoHotspots": [
        // Information of BoreyA Overview
        {
          "yaw": -0.46950790230161665,
          "pitch": -0.043464123153073686,
          "title": "BoreyA Overview",
          "text": "The place we can relax and enjoy with nature"
        }
      ]
    },


    // BoreyA View1 data
    {
      "id": "BoreyA View1",
      "name": "BoreyA View1",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.852830866782737,
        "pitch": -0.06590329090379399,
        "fov": 1.2634123859167636
      },

      // Link hotspots of BoreyA View1
      "linkHotspots": [
        // Link hotspot to BoreyA Overview
        {
          "yaw": 0.5110012922442948,
          "pitch": -0.02534464164626371,
          "rotation": 0,
          "target": "BoreyA Overview"
        },

        // Link hotspot to BoreyA View2
        {
          "yaw": 2.2472641841207857,
          "pitch": 0.2130322965227318,
          "rotation": 3.141592653589793,
          "target": "BoreyA View2"
        },

        // Link hotspot to BoreyA Upstairs
        {
          "yaw": -3.139871135004899,
          "pitch": -0.4662218119496,
          "rotation": 0,
          "target": "BoreyA Upstairs"
        },

        // Link hotspot to BoreyA Bathroom
        {
          "yaw": -2.999023631081048,
          "pitch": 0.037671971812258676,
          "rotation": 0,
          "target": "BoreyA Bathroom"
        },

        // Link hotspot to BoreyA Room1
        {
          "yaw": -2.4252421833426965,
          "pitch": -0.021120319982427915,
          "rotation": 0,
          "target": "BoreyA Room1"
        },

        // Link hotspot to BoreyA Room2
        {
          "yaw": -1.9578873475596374,
          "pitch": -0.015328267046289312,
          "rotation": 0,
          "target": "BoreyA Room2"
        }
      ],
      "infoHotspots": []
    },


    // BoreyA View2 data
    {
      "id": "BoreyA View2",
      "name": "BoreyA View2",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -3.029188017077816,
        "pitch": 0.07803333134721058,
        "fov": 1.2634123859167636
      },

      // Link hotspots of BoreyA View2
      "linkHotspots": [

        //Link hotspot to BoreyA Upstairs
        {
          "yaw": -2.0071392614899395,
          "pitch": -0.4636363155826082,
          "rotation": 0,
          "target": "BoreyA Upstairs"
        },

        // Link hotspot to BoreyA Room1
        {
          "yaw": -1.3138311500055746,
          "pitch": 0.0280805587265629,
          "rotation": 0,
          "target": "BoreyA Room1"
        },

        // Link hotspot to BoreyA Room2
        {
          "yaw": -0.984304276704119,
          "pitch": 0.026937877006513844,
          "rotation": 0,
          "target": "BoreyA Room2"
        },

        // Link hotspot to BoreyA View1
        {
          "yaw": -0.703505506095718,
          "pitch": 0.18885197271444554,
          "rotation": 3.141592653589793,
          "target": "BoreyA View1"
        }
      ],
      "infoHotspots": []
    },

    // BoreyA Room1 data
    {
      "id": "BoreyA Room1",
      "name": "BoreyA Room1",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.9549071012592698,
        "pitch": 0,
        "fov": 1.2634123859167636
      },

      // Link hotspots of BoreyA Room1
      "linkHotspots": [

        // Link hotspot to BoreyA View1
        {
          "yaw": 1.5666229811389707,
          "pitch": 0.04342229547313359,
          "rotation": 0,
          "target": "BoreyA View1"
        }
      ],
      "infoHotspots": []
    },

    // BoreyA Room2 data
    {
      "id": "BoreyA Room2",
      "name": "BoreyA Room2",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.4543721635886033,
        "pitch": 0,
        "fov": 1.2634123859167636
      },

      // Link hotspot of BoreyA Room2
      "linkHotspots": [

        // Link hotspot to BoreyA View1
        {
          "yaw": -1.6770393492394753,
          "pitch": 0.014543231854645455,
          "rotation": 0,
          "target": "BoreyA View1"
        }
      ],
      "infoHotspots": []
    },

    // BoreyA Upstairs data
    {
      "id": "BoreyA Upstairs",
      "name": "BoreyA Upstairs",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.9386058211410937,
        "pitch": 0.24610402586884916,
        "fov": 1.2634123859167636
      },

      // Link hotspot of BoreyA Upstairs
      "linkHotspots": [

        // Link hotspot to BoreyA View1
        {
          "yaw": -0.36868749690825986,
          "pitch": 0.14055851966688593,
          "rotation": 3.141592653589793,
          "target": "BoreyA View2"
        }
      ],
      "infoHotspots": []
    },

    // BoreyA Bathroom data
    {
      "id": "BoreyA Bathroom",
      "name": "BoreyA Bathroom",
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
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -3.093220267250091,
        "pitch": 0,
        "fov": 1.2634123859167636
      },

      // Link hotspot of BoreyA Bathroom
      "linkHotspots": [

      // Link hotspot to BoreyA View1
        {
          "yaw": 0.5811232082232536,
          "pitch": 0.3210227871897047,
          "rotation": 0,
          "target": "BoreyA View1"
        }
      ],
      "infoHotspots": []
    },

    






















  ],
  "name": "Project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
