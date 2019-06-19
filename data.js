var APP_DATA = {
  "scenes": [
    /* yaw is rotation value from left to right. 
    we can change the value to change the position of Link hotspot or Info hotspot.*/
    /* pitch is rotation value from top to down. 
    we can change the value to change the position of Link hotspot or Info hotspot.*/

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

    // Link hotspot to Camping
        {
          "yaw": 1.5952929679252783,
          "pitch": 0.006963272264323805,
          "rotation": 0,
          "target": "Camping"
        },

    // Link hotspot to LuxuryTent
        {
          "yaw": 1.8679526252469074,
          "pitch": 0.020725946251111793,
          "rotation": 0,
          "target": "LuxuryTent Overview"
        },

    // Link hotspot to KhmerCottage Overview
        {
          "yaw": 2.10157573133385,
          "pitch": 0.020062516672403774,
          "rotation": 0,
          "target": "KhmerCottage Overview"
        },

    // Link hotspot to Piproom Overview
        {
          "yaw": 2.297741181364036,
          "pitch": 0.024698456907023214,
          "rotation": 0,
          "target": "Piproom Overview"
        },

    // Link hotspot to BoreyR Overview
        {
          "yaw": -1.8849773983846418,
          "pitch": 0.0008074282750740736,
          "rotation": 0,
          "target": "BoreyR Overview"
        },

    // Link hotspot to BoreyA Overview
        {
          "yaw": -0.8180401418057635,
          "pitch": -0.07241030143335259,
          "rotation": 0,
          "target": "BoreyA Overview"
        },
    // Link hotspot to Bungalow Overview
        {
          "yaw": 0.6995901234104114,
          "pitch": -0.06567061164170873,
          "rotation": 0,
          "target": "Bungalow Overview"
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

// Bungalow Overview data
    {
      "id": "Bungalow Overview",
      "name": "Bungalow Overview",
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
        "yaw": -1.5899969407726715,
        "pitch": 0,
        "fov": 1.2634123859167636
      },

  // Link hotspot of Bungalow Overview
      "linkHotspots": [

    // Link hotspot to Bungalow View1
        {
          "yaw": -1.7569490631671947,
          "pitch": -0.22145746027428181,
          "rotation": 0,
          "target": "Bungalow View1"
        },
    //Link hotspot to Pine View Kitchen
        {
          "yaw": 0.6299350675239914,
          "pitch": -0.054956210091056334,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],

// Bungalow Overview information
      "infoHotspots": [
        {
          "yaw": -1.3796379434368369,
          "pitch": -0.21952368284100388,
          "title": "Bungalow",
          "text": "The place we can relax and enjoy with nature"
        }
      ]
    },

// Bungalow View1 data
    {
      "id": "Bungalow View1",
      "name": "Bungalow View1",
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
        "yaw": 0.491310812222979,
        "pitch": 0.10107299087333743,
        "fov": 1.2634123859167636
      },

  // Link hotspot of Bungalow View1
      "linkHotspots": [

    // Link hotspot to Bungalow View2
        {
          "yaw": 1.4978899372955876,
          "pitch": 0.017130334011110193,
          "rotation": 0,
          "target": "Bungalow View2"
        },

    // Link hotspot to Bungalow Overview
        {
          "yaw": -2.517874015967571,
          "pitch": 0.041364324279193454,
          "rotation": 0,
          "target": "Bungalow Overview"
        }
      ],
      "infoHotspots": []
    },

// Bungalow View2 data
    {
      "id": "Bungalow View2",
      "name": "Bungalow View2",
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

  // Link hotspot of Bungalow View2
      "linkHotspots": [

    // Link hotspot of Bungalow Outside
        {
          "yaw": 0.0747348404014101,
          "pitch": 0.056670039815275075,
          "rotation": 0,
          "target": "Bungalow Outside"
        },

    // Link hotspot to Bungalow Toilet
        {
          "yaw": 1.6722627419714868,
          "pitch": 0.17164477648703524,
          "rotation": 0,
          "target": "Bungalow Toilet"
        },
        
    // Link hotspot to Bungalow View1
        {
          "yaw": 2.976748503364367,
          "pitch": 0.21261747271366005,
          "rotation": 3.141592653589793,
          "target": "Bungalow View1"
        }
      ],
      "infoHotspots": []
    },

// Bungalow Toilet data
      {
        "id": "Bungalow Toilet",
        "name": "Bungalow Toilet",
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
          "yaw": 1.1290905910502342,
          "pitch": 0.029765462950502197,
          "fov": 1.1490439151539336
        },

    // Link hotspot of Bungalow Toilet
        "linkHotspots": [

      // Link hotspot to Bungalow View2
          {
            "yaw": -1.8778041520296558,
            "pitch": -0.1389952856172627,
            "rotation": 0,
            "target": "Bungalow View2"
          }
        ],
        "infoHotspots": []
      },

// Bungalow Outside data
    {
      "id": "Bungalow Outside",
      "name": "Bungalow Outside",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.709590407623873,
        "pitch": 0.19265854891501277,
        "fov": 1.2634123859167636
      },

  // Link hotspot of Bungalow Outside
      "linkHotspots": [

    // Link hotspot to Bungalow View2
        {
          "yaw": 0.21635716567901753,
          "pitch": 0.16380558981872895,
          "rotation": 0,
          "target": "Bungalow View2"
        }
      ],
      "infoHotspots": []
    },

// Camping data
    {
      "id": "Camping",
      "name": "Camping",
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
        "yaw": -1.4371798679587169,
        "pitch": 0.030246005063713,
        "fov": 1.1490439151539336
      },

  // Link hotspots of Camping
      "linkHotspots": [

    // Link hotspot to Camping inside
        {
          "yaw": -1.664234928285241,
          "pitch": 0.08969856678680799,
          "rotation": 0,
          "target": "Camping Inside"
        },

    // Link hotspot to Pine View Kitchen
        {
          "yaw": 0.550526025245361,
          "pitch": 0.10254096602752938,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3476461965762532,
          "pitch": 0.0513494397726884,
          "title": "Camping",
          "text": "The place we can enjoy and relax with nature."
        }
      ]
    },

// Camping Inside data
    {
      "id": "Camping Inside",
      "name": "Camping Inside",
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

  // Link hotspot of Camping inside
      "linkHotspots": [

    // Link hotspot to Camping
        {
          "yaw": -0.22016490926947263,
          "pitch": -0.00511442385771943,
          "rotation": 0,
          "target": "Camping"
        }
      ],
      "infoHotspots": []
    },

// LuxuryTent Overview data
    {
      "id": "LuxuryTent Overview",
      "name": "LuxuryTent Overview",
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
        "yaw": -1.5006488660908275,
        "pitch": 0,
        "fov": 1.1490439151539336
      },

// Link hotspot of LuxuryTent Overview
      "linkHotspots": [

  // Link hotspot to LuxuryTent Inside
        {
          "yaw": -1.7582188457209043,
          "pitch": -0.10889987337131402,
          "rotation": 0,
          "target": "LuxuryTent Inside"
        },

    // Link hotspot to Pine View Kitchen
        {
          "yaw": 2.657083194569328,
          "pitch": -0.05136529877583129,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.805969729835569,
          "pitch": -0.12838213279834783,
          "title": "Luxury Tent",
          "text": "The place we can enjoy and relax with nature"
        }
      ]
    },

// LuxuryTent Inside data
    {
      "id": "LuxuryTent Inside",
      "name": "LuxuryTent Inside",
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
        "yaw": 0.9268873307901728,
        "pitch": 0,
        "fov": 1.1490439151539336
      },

  // Link hotspot of LuxuryTent Inside
      "linkHotspots": [

    // Link hotspot to LuxuryTent Toilet
        {
          "yaw": 0.9699436089975144,
          "pitch": -0.24335533026740208,
          "rotation": 0,
          "target": "LuxuryTent Toilet"
        },
    // Link hotspot to LuxuryTent Overview
        {
          "yaw": -1.6071127752597132,
          "pitch": -0.20564418645484395,
          "rotation": 0,
          "target": "LuxuryTent Overview"
        }
      ],
      "infoHotspots": []
    },

// LuxuryTent Toilet data
    {
      "id": "LuxuryTent Toilet",
      "name": "LuxuryTent Toilet",
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
        "yaw": 2.9876227242932485,
        "pitch": 0,
        "fov": 1.1490439151539336
      },

  // Link hotspot of Luxury Toilet
      "linkHotspots": [

    // Link hotspot to Luxury Inside
        {
          "yaw": 1.3287355041603135,
          "pitch": -0.002883294896445676,
          "rotation": 0,
          "target": "LuxuryTent Inside"
        }
      ],
      "infoHotspots": []
    },

// KhmerCottage Overview data
    {
      "id": "KhmerCottage Overview",
      "name": "KhmerCottage Overview",
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
        "yaw": -3.0704007277132455,
        "pitch": 0.09043194209745486,
        "fov": 1.2634123859167636
      },

  // Link hotspot of KhmerCottage Overview
      "linkHotspots": [

    // Link hotspot to KhmerCottage Inside
        {
          "yaw": -3.049914211754567,
          "pitch": -0.04643465131071878,
          "rotation": 0,
          "target": "KhmerCottage Inside"
        },

    // Link hotspot to Pine View kitchen
        {
          "yaw": 1.5017733365709436,
          "pitch": -0.004715214926829248,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.678745583334121,
          "pitch": -0.07643465131071878,
          "title": "Khmer Cottage",
          "text": "The place we can enjoy and relax with nature."
        }
      ]
    },

// KhmerCottage Inside data
    {
      "id": "KhmerCottage Inside",
      "name": "KhmerCottage Inside",
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
        "yaw": 0.12604668498070914,
        "pitch": 0.11635681614117033,
        "fov": 1.2634123859167636
      },

  // Link hotspot of KhmerCottage Inside
      "linkHotspots": [

    // Link hotspot to KhmerCottage Overview
        {
          "yaw": 0.1044992452034812,
          "pitch": -0.02566869664594229,
          "rotation": 0,
          "target": "KhmerCottage Overview"
        }
      ],
      "infoHotspots": []
    },

// Piproom Overview data
    {
      "id": "Piproom Overview",
      "name": "Piproom Overview",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9060304271012356,
        "pitch": 0,
        "fov": 1.1490439151539336
      },

  // Link hotspot of Piproom Overview
      "linkHotspots": [

    // Link hotspot to Pine View Kitchen
        {
          "yaw": 1.8055652332628247,
          "pitch": -0.0717312209070542,
          "rotation": 0,
          "target": "Pine View Kitchen"
        },

    // Link hotspot to Piproom Inside
        {
          "yaw": -0.6098020733288525,
          "pitch": 0.011649687318323387,
          "rotation": 0,
          "target": "Piproom Inside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3960811934133446,
          "pitch": 0.01032115009677348,
          "title": "Piproom",
          "text": "The place we can enjoy and relax with nature."
        }
      ]
    },

// Piproom Inside data
    {
      "id": "Piproom Inside",
      "name": "Piproom Inside",
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
        "yaw": 0.15998369509303778,
        "pitch": 0,
        "fov": 1.1490439151539336
      },

  // Link hotspot of Piproom Inside
      "linkHotspots": [

    // Link hotspot to Piproom Overview
        {
          "yaw": -2.871423546273734,
          "pitch": 0.1263662682210036,
          "rotation": 0,
          "target": "Piproom Overview"
        }
      ],
      "infoHotspots": []
    },

// BoreyR Overview data
    {
      "id": "BoreyR Overview",
      "name": "BoreyR Overview",
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
        "yaw": 3.0950676217318183,
        "pitch": -0.2705188873374631,
        "fov": 1.2634123859167636
      },

  // Link hotspot of BoreyR Overview
      "linkHotspots": [
    // Link hotspot to BoreyR View1
        {
          "yaw": 3.0024252569710894,
          "pitch": -0.2694142219278106,
          "rotation": 0,
          "target": "BoreyR View1"
        },
    // Link hotspot to Pine View Kitchen
        {
          "yaw": -2.0507496757331865,
          "pitch": -0.15688259332610954,
          "rotation": 0,
          "target": "Pine View Kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.984132826344581,
          "pitch": -0.2994142219278106,
          "title": "BoreyR",
          "text": "The place we can enjoy and relax with nature"
        }
      ]
    },

// BoreyR View1 data
    {
      "id": "BoreyR View1",
      "name": "BoreyR View1",
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
        "yaw": 0.6934625364561597,
        "pitch": 0.2609372852368992,
        "fov": 1.2634123859167636
      },
  // Link hotspot of BoreyR View1
      "linkHotspots": [
    // Link hotspot to BoreyR View2
        {
          "yaw": 0.6354020187690299,
          "pitch": 0.27407488267536806,
          "rotation": 3.141592653589793,
          "target": "BoreyR View2"
        },
        {
          "yaw": -0.6354843626773743,
          "pitch": 0.0656089971146887,
          "rotation": 0,
          "target": "BoreyR Overview"
        }
      ],
      "infoHotspots": []
    },

// BoreyR View2 data
    {
      "id": "BoreyR View2",
      "name": "BoreyR View2",
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
        "yaw": 1.8581956619190159,
        "pitch": 0.4756376041098278,
        "fov": 1.2634123859167636
      },
  // Link hotspot of BoreyR View2
      "linkHotspots": [
    // Link hotspot to BoreyR Toilet
        {
          "yaw": -3.018952626657203,
          "pitch": -0.041219098035075064,
          "rotation": 0,
          "target": "BoreyR Toilet"
        },
    // Link hotspot to BoreyR Overview
        {
          "yaw": -0.8725650544574464,
          "pitch": 0.005741737119794976,
          "rotation": 0,
          "target": "BoreyR Overview"
        },
        {
          "yaw": -1.6551853469456645,
          "pitch": 0.15632327195968188,
          "rotation": 3.141592653589793,
          "target": "BoreyR View1"
        }
      ],
      "infoHotspots": []
    },

// BoreyR Toilet data
    {
      "id": "BoreyR Toilet",
      "name": "BoreyR Toilet",
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
        "yaw": 2.8276473365114114,
        "pitch": 0,
        "fov": 1.2634123859167636
      },
  // Link hotspot of BoreyR Toilet
      "linkHotspots": [
    // Link hotspot to BoreyR View2
        {
          "yaw": 0.22539009979361957,
          "pitch": -0.10054234328832834,
          "rotation": 0,
          "target": "BoreyR View2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
