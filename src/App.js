/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/Video/VideoList/VideoList';
import Axios from 'axios';
import VideoDetail from './components/Video/VideoDetail/VideoDetail';
import { apiURL } from './utils';
import youtubeLogo from './assets/YouTube.png';

const mockData = {
  "kind": "youtube#searchListResponse",
  "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/VFpQXtPoRIVftwCSYQFCXOFC9Gc\"",
  "nextPageToken": "CDIQAA",
  "regionCode": "IN",
  "pageInfo": {
    "totalResults": 6767,
    "resultsPerPage": 50
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/65HskJ2-3an9IT2uq-kb0XKuN8Q\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "BWOQl-KkKX0"
      },
      "snippet": {
        "publishedAt": "2011-04-02T23:57:11.000Z",
        "channelId": "UCKF0FKQR-kci6H1Xv0o_lvQ",
        "title": "Surfando na Pororoca - Rios Mearim e Pindaré (Pororoca&#39;s Surffing)",
        "description": "A \"Pororoca\" é um fenômeno de encontro de águas de rios, muito comum na região Norte do Brasil. As de maiores ondas são de dificílimo acesso e muito ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BWOQl-KkKX0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BWOQl-KkKX0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BWOQl-KkKX0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Flávio Assub",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/Ff-sYOhBjHcJch4pkWfWq7Z7IbM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "s82ia7NQdR8"
      },
      "snippet": {
        "publishedAt": "2017-05-09T07:03:37.000Z",
        "channelId": "UCrn9h5BcraCDvR560wmtlcA",
        "title": "surffing",
        "description": "Saya membuat video ini dengan Editor Video YouTube (http://www.youtube.com/editor)",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/s82ia7NQdR8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/s82ia7NQdR8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/s82ia7NQdR8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ericson Kudjinona",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/mwdlxusACQwckHIUOTCeNrv8FbE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "65lUEcmBwBQ"
      },
      "snippet": {
        "publishedAt": "2017-04-25T06:28:02.000Z",
        "channelId": "UCrn9h5BcraCDvR560wmtlcA",
        "title": "surffing",
        "description": "surrfing baby.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/65lUEcmBwBQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/65lUEcmBwBQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/65lUEcmBwBQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ericson Kudjinona",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/E3Mse2XdGAuC-ug9ULMOC2j_Pig\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "DSzJiR-oJno"
      },
      "snippet": {
        "publishedAt": "2006-08-07T11:58:27.000Z",
        "channelId": "UCgDMOy41WON-5C8JDwlmBcg",
        "title": "surffing",
        "description": "surffing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DSzJiR-oJno/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DSzJiR-oJno/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DSzJiR-oJno/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Yusuke Nakayama",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/JV6W6YRwIuej0TLRSdE25Hs-4X4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Gt_IblZfB8w"
      },
      "snippet": {
        "publishedAt": "2010-07-11T23:35:53.000Z",
        "channelId": "UC_LzODdf96fNl32BGGYtL5w",
        "title": "surffing",
        "description": "surff.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Gt_IblZfB8w/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Gt_IblZfB8w/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Gt_IblZfB8w/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Mr Vapocalypse",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/qZNOkBm7msJR_XV_jpWZ2eVZQcA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "wWN9GlSP-c0"
      },
      "snippet": {
        "publishedAt": "2012-10-24T13:37:48.000Z",
        "channelId": "UC-NGpSrY0GQueYYRTkBpRjw",
        "title": "The Best Start of a surffing movie!!! one track mind",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wWN9GlSP-c0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wWN9GlSP-c0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wWN9GlSP-c0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "MrRastabullet",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/EtdRDETiFYQIJ7LJd1HcR1Re9DA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "N7XniWqOgJQ"
      },
      "snippet": {
        "publishedAt": "2019-08-08T07:17:44.000Z",
        "channelId": "UCYU3Nbv4WaA2-N8Pm_aVH8Q",
        "title": "Most beautiful sea  to surffing in the world",
        "description": "In this video featured the most beautiful sea to surffing in the world #mostbeautifulseatosurffingintheword# Subscribe:https://madelraquel.com ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/N7XniWqOgJQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/N7XniWqOgJQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/N7XniWqOgJQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jhundel Channel",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/N5O-QEAkgndpSLxBK1nMe4Gqauw\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "B03zC8LxTs0"
      },
      "snippet": {
        "publishedAt": "2019-12-30T14:15:01.000Z",
        "channelId": "UCHKN2oMyt0yXI9cmDWohdrg",
        "title": "Super surffing",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/B03zC8LxTs0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/B03zC8LxTs0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/B03zC8LxTs0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Aljay Pascua",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/WpTiSNBHqfIyfzzwN9IfsDSZcfI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "EqSTn5F73SQ"
      },
      "snippet": {
        "publishedAt": "2017-04-22T12:50:32.000Z",
        "channelId": "UCP5nvBkoPJpt3UxDjDaysbg",
        "title": "1# Zagrajmy w The Surffing",
        "description": "Witam Dziś zagramy w The surfing myślę że gra jest warta uwagi. Zapraszam do oglądania!!!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/EqSTn5F73SQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/EqSTn5F73SQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/EqSTn5F73SQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Stare ale Jare",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/5DR8WYBgsxUgPiCDfmdkzG-PQBI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "YwoD2l035nw"
      },
      "snippet": {
        "publishedAt": "2011-04-02T20:23:52.000Z",
        "channelId": "UCKF0FKQR-kci6H1Xv0o_lvQ",
        "title": "Surfando na Pororoca - Pororoca&#39;s Surffing",
        "description": "A \"Pororoca\" é um fenômeno de encontro de águas de rios, muito comum na região Norte do Brasil. As de maiores ondas são de dificílimo acesso e muito ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YwoD2l035nw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YwoD2l035nw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YwoD2l035nw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Flávio Assub",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/etjyWSLjBVr7QrMDFxxW8Z0jk28\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "WY8L8yNnDHs"
      },
      "snippet": {
        "publishedAt": "2017-04-25T10:40:47.000Z",
        "channelId": "UCB6EThef8WOxAyu-xhHKD_A",
        "title": "surffing",
        "description": "surffing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WY8L8yNnDHs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WY8L8yNnDHs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WY8L8yNnDHs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Joey Grisafe",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/ukuu2jlm154Yrr7i5FN60aXpObA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "3Qv7f5ZxlVY"
      },
      "snippet": {
        "publishedAt": "2019-09-29T19:28:47.000Z",
        "channelId": "UCaok7vY7NUDx-PSKJHlvyXw",
        "title": "Surffing Weeding Cake",
        "description": "Tarta de boda surfistas.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3Qv7f5ZxlVY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3Qv7f5ZxlVY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3Qv7f5ZxlVY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Daniel's Cake",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/SIb6r-mM54qGt3y_MLBlsXawmPM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "8SM9CQYWGTw"
      },
      "snippet": {
        "publishedAt": "2019-12-17T11:55:09.000Z",
        "channelId": "UC9c6YFLZ1AbGCu1qiiLbadw",
        "title": "surffing hiddenwiki part 3",
        "description": "kali linux.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8SM9CQYWGTw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8SM9CQYWGTw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8SM9CQYWGTw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hacker Hacked",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/pyd2k1DRSWgM6-DhdsqUHweMapM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "ls29hfBqTzc"
      },
      "snippet": {
        "publishedAt": "2017-04-17T09:23:59.000Z",
        "channelId": "UCD1hSBQc99qOA85eQ1vYPjA",
        "title": "Surffing in israel",
        "description": "Kite surfing in Ashqelon music by https://creativecommons.org/licenses/by/4.0/ http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100347 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ls29hfBqTzc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ls29hfBqTzc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ls29hfBqTzc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Amitai Klein",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/OOD6SlB-NumCjkurCLUxN68r25E\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nkhpGC10OVw"
      },
      "snippet": {
        "publishedAt": "2017-04-09T17:18:44.000Z",
        "channelId": "UCHeaHzQFLElUw__yG3SSzMg",
        "title": "World&#39;s best surfing 2017",
        "description": "World's best surfing 2017 — Enjoy the video. Rate, Comment, Share... Thanx Subscribe for new compilations: http://goo.gl/X017T If your Video is in this ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nkhpGC10OVw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nkhpGC10OVw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nkhpGC10OVw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Monthly Winners",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/uhTJxKXCOM8fGF6f-erMBzQZvac\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "8FmeNjsWeMA"
      },
      "snippet": {
        "publishedAt": "2007-02-05T19:22:27.000Z",
        "channelId": "UC8phAjtqDOGhM_RxyFpeqhA",
        "title": "surffing.",
        "description": "well we got bored, and the gym was free.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8FmeNjsWeMA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8FmeNjsWeMA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8FmeNjsWeMA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SamTard",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/cu9dVXWgn2Ax_UAxJ-N8vabg36M\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "u1GqtRH7nfY"
      },
      "snippet": {
        "publishedAt": "2019-02-08T13:15:01.000Z",
        "channelId": "UCa4woKf4J1lnWftSgto9DBg",
        "title": "Inilah &quot;5&quot; l-o-k-a-s-i SURFFING di pangandaran yang sangat indah dan keren ombaknya..",
        "description": "Hanya Sebagian tempat surffing di kab. Pangandaran.. .semoga bermanfaat.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u1GqtRH7nfY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u1GqtRH7nfY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u1GqtRH7nfY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "garuda blb",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/RePZAwlOfw32uJdPerY-6yYOzuc\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "pInstlZxsG4"
      },
      "snippet": {
        "publishedAt": "2019-06-29T01:53:45.000Z",
        "channelId": "UCBRqMG4nHDtrLcOJfPyjFmg",
        "title": "surffing",
        "description": "learn more.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pInstlZxsG4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pInstlZxsG4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pInstlZxsG4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Marlon Lavador",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/bKlCUjor7X9lPd2D8S9aW23fVvY\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "HAtpQWpU3T0"
      },
      "snippet": {
        "publishedAt": "2016-03-11T13:54:58.000Z",
        "channelId": "UC9DcxmSnW81enC6IFcTHjhw",
        "title": "Surffing",
        "description": "Surffing, Dominican republic, macao.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HAtpQWpU3T0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HAtpQWpU3T0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HAtpQWpU3T0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Sergiy Sukharchuk",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/uIL-M_95t6Kw5M3LKYNnXIFlags\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "NLOY9ySwTIQ"
      },
      "snippet": {
        "publishedAt": "2016-07-26T11:11:13.000Z",
        "channelId": "UCrTxj4hzbhl_j5cdBmAdRlA",
        "title": "Surffing in Lola Sayong Gubat Sorsogon mtv",
        "description": "mtv of don & med V. celebration 2016.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NLOY9ySwTIQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NLOY9ySwTIQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NLOY9ySwTIQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Dumbar Morales",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/zY7Q56lg7_64rKw0y8QF56_6BXk\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "S6Jn-2mnPeo"
      },
      "snippet": {
        "publishedAt": "2013-04-11T06:12:46.000Z",
        "channelId": "UC8ZjhWc6Nsml6BBTTXcIpKA",
        "title": "Css Surffing",
        "description": "Css Surffia te varmaan kaiikki ketkä pelaatte Css nii tiiätte mitä tämä surffaus on.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/S6Jn-2mnPeo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/S6Jn-2mnPeo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/S6Jn-2mnPeo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Santtu Korjonen",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/ahBC8NziburtAEUMzReVSq5zUBk\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "7I3-CPbyYDk"
      },
      "snippet": {
        "publishedAt": "2006-10-28T02:35:51.000Z",
        "channelId": "UCAJp1a60dKtZE158VnDwnHQ",
        "title": "surffing",
        "description": "surffing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7I3-CPbyYDk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7I3-CPbyYDk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7I3-CPbyYDk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "aleia123",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/7Hajj8X2LntIWNwYBqZdC1wEd5U\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "vRsP7BsMWpo"
      },
      "snippet": {
        "publishedAt": "2014-04-21T15:50:58.000Z",
        "channelId": "UCtgyFASROxKhEwv-1MbMqig",
        "title": "Panteon Rococo - (Missa Crowd Surffing) -  Ventura, CA - 04.19.2014",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vRsP7BsMWpo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vRsP7BsMWpo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vRsP7BsMWpo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vision Rock",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/gYEQB8ur8N8-uM71jvRTnBJnKTY\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "pwz55tOMOnY"
      },
      "snippet": {
        "publishedAt": "2010-02-19T10:14:06.000Z",
        "channelId": "UCERda92hqXcJuSfLt_30Eag",
        "title": "Satti&#39;s water Surffing video",
        "description": "It was gr8 experiance while doing water surfing......",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pwz55tOMOnY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pwz55tOMOnY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pwz55tOMOnY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Satya Srikakulapu",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/MkzIQHay_JwyeibBTImxZYSKg9s\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "e6OGAr2fXVk"
      },
      "snippet": {
        "publishedAt": "2018-07-01T01:09:04.000Z",
        "channelId": "UCnB1kLSWM5bamBL1s6aPUQw",
        "title": "Game Android Yang Seru Untuk Dimainkan Saat Liburan : Flip Surffing Colors - Indonesia",
        "description": "Hy guys,balik lgi bersama saya Official Xilent,kali ini saya ingin merekomendasikan game yg seru buat kalian yg sedang liburan,ini dia game FLIP SURFFING ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/e6OGAr2fXVk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/e6OGAr2fXVk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/e6OGAr2fXVk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Sendi Prayitno",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/83e7QZ7fdJbbmIS7cfIIrrE60hc\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "xJyADeDPNy0"
      },
      "snippet": {
        "publishedAt": "2011-11-08T18:06:04.000Z",
        "channelId": "UCAAeNuQxQ0Wd2RPAPHMtkAg",
        "title": "Hitallo Surffing",
        "description": "Sua mensagem está pronta para ser enviada com o seguinte arquivo ou link anexo: Hitalo surff alta qld.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xJyADeDPNy0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xJyADeDPNy0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xJyADeDPNy0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Anderson Bezerra",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/xznjgH09LVLZagNSuKa8ae4uHEk\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "DHRdGoocp0g"
      },
      "snippet": {
        "publishedAt": "2013-06-19T10:36:51.000Z",
        "channelId": "UCp1KYK0ST-zUX4LYPHIMqQA",
        "title": "ReflecBeat Colette Summer pastelkun Surffing",
        "description": "ReflecBeat Colette Summer pastelkun Surffing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DHRdGoocp0g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DHRdGoocp0g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DHRdGoocp0g/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "주는이",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/3-ZGVtzxswwyz8y6Syi5rnBEonM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "FSGJ41nWFp0"
      },
      "snippet": {
        "publishedAt": "2017-05-07T21:39:15.000Z",
        "channelId": "UCD81Gfwe1LdXOx5PXSyj3FQ",
        "title": "Anssi Kela jäähalli 2017 crowd surffing",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FSGJ41nWFp0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FSGJ41nWFp0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FSGJ41nWFp0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jerry Hellström",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/Xe9uirzCTURHNvkrROAYLxdhjPg\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "ZW9USUESh-8"
      },
      "snippet": {
        "publishedAt": "2018-09-13T23:00:26.000Z",
        "channelId": "UCt2UipISexd0yg9VoNrxDhQ",
        "title": "Macy&#39;s Parade 1972 Channel Surffing 1 Hr Reel  By Request.",
        "description": "Macy's Parade 1972 Channel Surffing 1 Hr Reel By Request. all tapes are cleaned and baked before transfer. please keep in mind the quality Matters on ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZW9USUESh-8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZW9USUESh-8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZW9USUESh-8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Obsolete Video",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/KMbBCgCujUN8NR1QaBuLmG8g0r8\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "n14gOGliDzg"
      },
      "snippet": {
        "publishedAt": "2011-12-15T06:36:01.000Z",
        "channelId": "UCsRQH95MoX65HFlDXTB_JCA",
        "title": "taitung surffing event press conference in taipei",
        "description": "克拉克國際演藝公司clark entertainment com.0913-757700.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/n14gOGliDzg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/n14gOGliDzg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/n14gOGliDzg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "clarkentertainment1",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/GteEMpHXdbTph5NVaJaLpWXIp5U\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "JJrTYgPdFy4"
      },
      "snippet": {
        "publishedAt": "2017-05-18T18:26:30.000Z",
        "channelId": "UCnW7Hx6_pNKVv0t-8Is8_eQ",
        "title": "Un dia de surffing",
        "description": "En cerro hermoso diving.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JJrTYgPdFy4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JJrTYgPdFy4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JJrTYgPdFy4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Azarel Moron",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/jUqQ46-faOJlWbZtjRhCHqgnfpA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "_RYq_-KYncw"
      },
      "snippet": {
        "publishedAt": "2017-12-02T04:20:55.000Z",
        "channelId": "UC4HpG0R16FtGSzwx_5a2lbQ",
        "title": "Surffing from art LOL TO MUCH BLOOD IN A PART",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_RYq_-KYncw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_RYq_-KYncw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_RYq_-KYncw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Cupcake Fallen",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/nP-R3vgi_m3AI-iJmVXIV0sT_BI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "gkKHEB0otJU"
      },
      "snippet": {
        "publishedAt": "2013-10-28T02:59:46.000Z",
        "channelId": "UC01XKvxHgCe92O4bcdZEi9A",
        "title": "Body surffing Pak Modjo at GENFEST2013",
        "description": "Taken by : mopstarock.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gkKHEB0otJU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gkKHEB0otJU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gkKHEB0otJU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Mariani Purnamasari",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/5mmjKxMWYfAsavaAhkVKVjMvsxI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "lITnM_XG7ms"
      },
      "snippet": {
        "publishedAt": "2012-10-21T22:09:36.000Z",
        "channelId": "UCWm9p8NlTserL72Fyqr6RaA",
        "title": "Surffing on Lake...Justin Rohe.",
        "description": "This video was uploaded from an Android phone.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lITnM_XG7ms/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lITnM_XG7ms/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lITnM_XG7ms/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "A.J. Rohe",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/LaeIOORK7qJnYR6zeLvluSY6DuY\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "ToZvctBeJrw"
      },
      "snippet": {
        "publishedAt": "2012-10-21T22:11:36.000Z",
        "channelId": "UCWm9p8NlTserL72Fyqr6RaA",
        "title": "Surffing on Lake...Justin Rohe.",
        "description": "This video was uploaded from an Android phone.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ToZvctBeJrw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ToZvctBeJrw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ToZvctBeJrw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "A.J. Rohe",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/0PRpEFEtiuoetR_uGTRqrqX3KrA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "niZlieG7JJU"
      },
      "snippet": {
        "publishedAt": "2015-04-12T11:35:08.000Z",
        "channelId": "UC2T1b02stUVu3Yg_pRZ2PKA",
        "title": "sURFfing in wins",
        "description": "This is why we all love urf :D ▻Dont Forget to smash that like button if you enjoyd! Other than that, Thanks For Watching! ---- ♥ Subscribe: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/niZlieG7JJU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/niZlieG7JJU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/niZlieG7JJU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "TheFeli73",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/eKWDfFbOb-ONOR2asj9vm77BRMQ\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "UDfvdi5Tljk"
      },
      "snippet": {
        "publishedAt": "2018-12-22T03:48:17.000Z",
        "channelId": "UCLRNcrHWmdCa4KdXOp5Janw",
        "title": "The Horror Tale..Internet surffing horror  story in hindi.",
        "description": "The Horrer is a suspense stories talling channel.i will try to sarv to best thriller suspense stories. i hope you will injoy. Disclaimer: The Horror Tale channel मै ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UDfvdi5Tljk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UDfvdi5Tljk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UDfvdi5Tljk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Horror Tale",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/MqGyhRZIcvQVxC88vk1xqngtyV0\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "UyBiw0hZQOM"
      },
      "snippet": {
        "publishedAt": "2017-07-13T11:10:25.000Z",
        "channelId": "UCJz7ElDBH5_MfLurX5ko5xQ",
        "title": "This lady gets his pants off during surffing water slide",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UyBiw0hZQOM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UyBiw0hZQOM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UyBiw0hZQOM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "bb ki carry chanchalani vines",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/dHjAWBT10Aw8amhESZr2Ck4dVPI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "fRw4P2cuJEQ"
      },
      "snippet": {
        "publishedAt": "2010-06-21T15:40:31.000Z",
        "channelId": "UCcWPH-D9EI7kaISwGmjCCGw",
        "title": "billy talent this surffing",
        "description": "this is one of my favorit songs from billy talent its a good text and a good song.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fRw4P2cuJEQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fRw4P2cuJEQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fRw4P2cuJEQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FiLLePizzAn98",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/3NP-Mwys7LK-U64o0A5NzFhQEVc\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "subUUrwle_k"
      },
      "snippet": {
        "publishedAt": "2016-09-05T13:15:03.000Z",
        "channelId": "UCVYR6_sPLw806Ra1jFdiziQ",
        "title": "Monkeybeatz - Surffing In Sky",
        "description": "2016.09.04 Free From All - keep going and daily party.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/subUUrwle_k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/subUUrwle_k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/subUUrwle_k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ᄒ ᄒ",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/oAsTyyVRrnXvU2p08mJSFVNBgwE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "m43rGGDPux4"
      },
      "snippet": {
        "publishedAt": "2018-01-25T07:50:43.000Z",
        "channelId": "UC7hHWPq_Uz0abjUH7J5T-Nw",
        "title": "Surfing Long Longs, Nusa Island FINAL",
        "description": "This was out last night on Nusa Island. FINAL EDIT I didn't get the GoPro out much as my board was in for Repairs and my mount for the camera is on that board.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/m43rGGDPux4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/m43rGGDPux4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/m43rGGDPux4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Anthony Crowley",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/su7H4ollLo6Vf4jb7TiPrd4z_Xo\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "R79N9LS6hCc"
      },
      "snippet": {
        "publishedAt": "2019-10-31T22:23:41.000Z",
        "channelId": "UCEogN_EXUITnPdoAY-gwONQ",
        "title": "Audeay-Surffing",
        "description": "Provided to YouTube by DistroKid Audeay-Surffing · Ceo Cuervo Audeay-Surffing ℗ 887949 Records DK Released on: 2019-10-31 Auto-generated by ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/R79N9LS6hCc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/R79N9LS6hCc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/R79N9LS6hCc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ceo Cuervo - Topic",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/FQzxwOcTPFjznihFymdawBJYlx8\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "WpYsSY4WKIY"
      },
      "snippet": {
        "publishedAt": "2006-07-24T18:37:41.000Z",
        "channelId": "UCgDMOy41WON-5C8JDwlmBcg",
        "title": "surffing at ibaragi2",
        "description": "surffing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WpYsSY4WKIY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WpYsSY4WKIY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WpYsSY4WKIY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Yusuke Nakayama",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/NW1iXT5aDE2Fpi4yl_SkJRm-RJY\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Dsx3k8KZ2hw"
      },
      "snippet": {
        "publishedAt": "2018-05-26T18:36:59.000Z",
        "channelId": "UCZTmdQIYxRcs8mFcJH-xnxQ",
        "title": "Surffing in sky",
        "description": "Provided to YouTube by IOKI Surffing in sky · 몽키비츠 · 조하나 Keep Going ℗ TSN Company Released on: 2015-11-03 Auto-generated by YouTube.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Dsx3k8KZ2hw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Dsx3k8KZ2hw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Dsx3k8KZ2hw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "몽키비츠 - Topic",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/nipB3_j02y-k7jgP5s3h7DcPIUI\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "lgHfJz86ucw"
      },
      "snippet": {
        "publishedAt": "2008-07-02T06:11:27.000Z",
        "channelId": "UCcLUvfoBRoabsdJk1aysTiA",
        "title": "surffing at tell aviv",
        "description": "surffing at tel aviv.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lgHfJz86ucw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lgHfJz86ucw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lgHfJz86ucw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "stamm112",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/hRaBTcHnmmQZFXD4gb_6C-V8SIE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "zmdJVx06pZA"
      },
      "snippet": {
        "publishedAt": "2012-11-26T23:51:08.000Z",
        "channelId": "UCiAN24Fr0SMnVF3tjNKCtgw",
        "title": "Surffing the Martial in Ushuaia, Argentina.",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zmdJVx06pZA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zmdJVx06pZA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zmdJVx06pZA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Peleg Katz",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/C7HIGl8zYeTCVgCiswy07LSLrL0\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nVhMOLhNZa8"
      },
      "snippet": {
        "publishedAt": "2016-10-24T05:26:47.000Z",
        "channelId": "UCzbegGtdrSeQ-5o3liyvZ2g",
        "title": "How to surffing the website and earn from that ?",
        "description": "How to surffing the website and earn from that ?",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nVhMOLhNZa8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nVhMOLhNZa8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nVhMOLhNZa8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Kusum Verma",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/CnjwPBCmhmR2rOjm4sg_sPhUpVs\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "DI6KRbKk4Ig"
      },
      "snippet": {
        "publishedAt": "2012-07-25T02:15:57.000Z",
        "channelId": "UCCF5eLEY03PuXj5rkWMMheQ",
        "title": "ayo belajar surffing di pantai kuta sambil melihat sumur ( susu berjemur )",
        "description": "pantai kuta tempat asyk untuk berjemur dan belajar berselancar alias surffing, mata kita di manjakan oleh pemandangan yg indah disini seperti bule yg sedang ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DI6KRbKk4Ig/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DI6KRbKk4Ig/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DI6KRbKk4Ig/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Bali kreative",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/asZwaps8RmNp0_Unux8p5YrPzXM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "MO9uUMaNTmo"
      },
      "snippet": {
        "publishedAt": "2010-01-24T12:44:46.000Z",
        "channelId": "UCihMGIcOoY_zR-sgIV87Ogg",
        "title": "Surffing the clouds",
        "description": "Surffing the clouds out of Paris Beauvais.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MO9uUMaNTmo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MO9uUMaNTmo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MO9uUMaNTmo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "reciomalodavid",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/j7pRCajPnUNwLTFYV-P7MNe5vJE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "hWz5ltE_I4c"
      },
      "snippet": {
        "publishedAt": "2012-04-20T15:39:17.000Z",
        "channelId": "UCmheCYT4HlbFi943lpH009Q",
        "title": "Walking On Air",
        "description": "This video features a series of time lapse sequences photographed by the Expedition 30 crew aboard the International Space Station. Set to the song \"Walking ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hWz5ltE_I4c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hWz5ltE_I4c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hWz5ltE_I4c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "NASA Johnson",
        "liveBroadcastContent": "none"
      }
    }
  ]
};

function App() {
  const [searchText, setSearchtext] = useState('surffing');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [regionCode, setregionCode] = useState(null);
  
  const searchVideos = (text) => {
    // Axios.get(apiURL + text)
    // .then(({ data, status }) => {
    //   if (status === 200 && data.items.length > 0) {
    //     setVideos(data.items);
    //     setSelectedVideo(data.items[0]);
    //     setregionCode(data.regionCode);
    //   }
    // })
    // .catch(e => {
    //   console.log(e);
    // })

    // TODO: remove this
    setVideos(mockData.items);
    setSelectedVideo(mockData.items[0]);
    setregionCode(mockData.regionCode);
  }

  const videoSelectHandler = selectedVideo => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setSelectedVideo(selectedVideo);
  }

  const onSearchHandler = value => {
    setSearchtext(value);
    searchVideos(value);
  }

  useEffect(() => {
    searchVideos(searchText);
  }, []);

  return (
    // TODO: logic for loading
    <>
      <div className="search-bar-wrapper">
        <div>
          <img className="youtube-logo" src={youtubeLogo} alt="youtube logo"/>{ regionCode && <sup>&nbsp;{regionCode}</sup>}
        </div>
        <SearchBar 
          onSearch={onSearchHandler}
        />
      </div>

      <div className="detail-list-wrapper">
        <div className="detail-wrapper">
          {selectedVideo &&
            <VideoDetail
              video={selectedVideo}
            />
          }
        </div>
        <div className="list-wrapper">
          {videos.length > 0 &&
            <VideoList
              videos={videos}
              onVideoSelect={videoSelectHandler} 
            />
          }
        </div>
      </div>
    </>
  );
}

export default App;
