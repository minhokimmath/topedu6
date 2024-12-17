self.__BUILD_MANIFEST=function(e,i,t,a,n,s,r,o,c,u,p,g,d,l,h,k,m,v,y,b,f,x,w,B){return{__rewrites:{afterFiles:[],beforeFiles:[{has:t,source:"/embed/:docId*",destination:"/public/:docId*"},{has:t,source:"/templates/([\\w-]*-|):id(\\w+)",destination:"/templates/:id"},{has:t,source:"/folders/:channelSlug*",destination:"/"},{has:t,source:"/settings/(members|defaults)",destination:"/settings"},{has:t,source:"/sites/:siteId/pages/:pageId/preview",destination:"/sites/:siteId/pages/:pageId"},{has:t,source:"/docs/:docId/preview",destination:"/docs/:docId"},{has:[{type:"header",key:"user-agent",value:"(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|Google-Certificates-Bridge|Iframely|Bluesky Cardyb|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot)(.*)"}],source:"/(docs|example|public)/:slug",destination:"/docs-robot/:slug"},{has:t,source:"/acceptable-use-policy",destination:"/marketing/acceptable-use-policy"},{has:t,source:"/cookie-notice",destination:"/marketing/cookie-notice"},{has:t,source:"/privacy",destination:"/marketing/privacy"},{has:t,source:"/terms",destination:"/marketing/terms"},{has:[{type:e,value:i}],source:"/en/pricing",destination:a},{has:[{type:e,value:i}],source:"/af/pricing",destination:"/marketing/af/pricing"},{has:[{type:e,value:i}],source:"/ar/pricing",destination:"/marketing/ar/pricing"},{has:[{type:e,value:i}],source:"/bg/pricing",destination:"/marketing/bg/pricing"},{has:[{type:e,value:i}],source:"/bn/pricing",destination:"/marketing/bn/pricing"},{has:[{type:e,value:i}],source:"/bs/pricing",destination:"/marketing/bs/pricing"},{has:[{type:e,value:i}],source:"/ca/pricing",destination:"/marketing/ca/pricing"},{has:[{type:e,value:i}],source:"/cs/pricing",destination:"/marketing/cs/pricing"},{has:[{type:e,value:i}],source:"/cy/pricing",destination:"/marketing/cy/pricing"},{has:[{type:e,value:i}],source:"/da/pricing",destination:"/marketing/da/pricing"},{has:[{type:e,value:i}],source:"/de/pricing",destination:"/marketing/de/pricing"},{has:[{type:e,value:i}],source:"/el/pricing",destination:"/marketing/el/pricing"},{has:[{type:e,value:i}],source:"/es/pricing",destination:"/marketing/es/pricing"},{has:[{type:e,value:i}],source:"/et/pricing",destination:"/marketing/et/pricing"},{has:[{type:e,value:i}],source:"/fa/pricing",destination:"/marketing/fa/pricing"},{has:[{type:e,value:i}],source:"/fi/pricing",destination:"/marketing/fi/pricing"},{has:[{type:e,value:i}],source:"/fr/pricing",destination:"/marketing/fr/pricing"},{has:[{type:e,value:i}],source:"/gu/pricing",destination:"/marketing/gu/pricing"},{has:[{type:e,value:i}],source:"/ha/pricing",destination:"/marketing/ha/pricing"},{has:[{type:e,value:i}],source:"/he/pricing",destination:"/marketing/he/pricing"},{has:[{type:e,value:i}],source:"/hi/pricing",destination:"/marketing/hi/pricing"},{has:[{type:e,value:i}],source:"/hr/pricing",destination:"/marketing/hr/pricing"},{has:[{type:e,value:i}],source:"/hu/pricing",destination:"/marketing/hu/pricing"},{has:[{type:e,value:i}],source:"/id/pricing",destination:"/marketing/id/pricing"},{has:[{type:e,value:i}],source:"/is/pricing",destination:"/marketing/is/pricing"},{has:[{type:e,value:i}],source:"/it/pricing",destination:"/marketing/it/pricing"},{has:[{type:e,value:i}],source:"/ja/pricing",destination:"/marketing/ja/pricing"},{has:[{type:e,value:i}],source:"/kk/pricing",destination:"/marketing/kk/pricing"},{has:[{type:e,value:i}],source:"/kn/pricing",destination:"/marketing/kn/pricing"},{has:[{type:e,value:i}],source:"/ko/pricing",destination:"/marketing/ko/pricing"},{has:[{type:e,value:i}],source:"/lt/pricing",destination:"/marketing/lt/pricing"},{has:[{type:e,value:i}],source:"/lv/pricing",destination:"/marketing/lv/pricing"},{has:[{type:e,value:i}],source:"/mk/pricing",destination:"/marketing/mk/pricing"},{has:[{type:e,value:i}],source:"/ml/pricing",destination:"/marketing/ml/pricing"},{has:[{type:e,value:i}],source:"/mr/pricing",destination:"/marketing/mr/pricing"},{has:[{type:e,value:i}],source:"/ms/pricing",destination:"/marketing/ms/pricing"},{has:[{type:e,value:i}],source:"/nl/pricing",destination:"/marketing/nl/pricing"},{has:[{type:e,value:i}],source:"/no/pricing",destination:"/marketing/no/pricing"},{has:[{type:e,value:i}],source:"/pl/pricing",destination:"/marketing/pl/pricing"},{has:[{type:e,value:i}],source:"/pt-br/pricing",destination:"/marketing/pt-br/pricing"},{has:[{type:e,value:i}],source:"/ro/pricing",destination:"/marketing/ro/pricing"},{has:[{type:e,value:i}],source:"/ru/pricing",destination:"/marketing/ru/pricing"},{has:[{type:e,value:i}],source:"/sl/pricing",destination:"/marketing/sl/pricing"},{has:[{type:e,value:i}],source:"/sq/pricing",destination:"/marketing/sq/pricing"},{has:[{type:e,value:i}],source:"/sr/pricing",destination:"/marketing/sr/pricing"},{has:[{type:e,value:i}],source:"/sv/pricing",destination:"/marketing/sv/pricing"},{has:[{type:e,value:i}],source:"/sw/pricing",destination:"/marketing/sw/pricing"},{has:[{type:e,value:i}],source:"/ta/pricing",destination:"/marketing/ta/pricing"},{has:[{type:e,value:i}],source:"/te/pricing",destination:"/marketing/te/pricing"},{has:[{type:e,value:i}],source:"/th/pricing",destination:"/marketing/th/pricing"},{has:[{type:e,value:i}],source:"/tl/pricing",destination:"/marketing/tl/pricing"},{has:[{type:e,value:i}],source:"/tr/pricing",destination:"/marketing/tr/pricing"},{has:[{type:e,value:i}],source:"/ur/pricing",destination:"/marketing/ur/pricing"},{has:[{type:e,value:i}],source:"/uk/pricing",destination:"/marketing/uk/pricing"},{has:[{type:e,value:i}],source:"/uz/pricing",destination:"/marketing/uz/pricing"},{has:[{type:e,value:i}],source:"/vi/pricing",destination:"/marketing/vi/pricing"},{has:[{type:e,value:i}],source:"/yo/pricing",destination:"/marketing/yo/pricing"},{has:[{type:e,value:i}],source:"/zh-cn/pricing",destination:"/marketing/zh-cn/pricing"},{has:[{type:e,value:i}],source:"/zh-tw/pricing",destination:"/marketing/zh-tw/pricing"},{has:[{type:e,value:i}],source:"/en",destination:"/marketing/en"},{has:[{type:e,value:i}],source:"/af",destination:"/marketing/af"},{has:[{type:e,value:i}],source:"/ar",destination:"/marketing/ar"},{has:[{type:e,value:i}],source:"/bg",destination:"/marketing/bg"},{has:[{type:e,value:i}],source:"/bn",destination:"/marketing/bn"},{has:[{type:e,value:i}],source:"/bs",destination:"/marketing/bs"},{has:[{type:e,value:i}],source:"/ca",destination:"/marketing/ca"},{has:[{type:e,value:i}],source:"/cs",destination:"/marketing/cs"},{has:[{type:e,value:i}],source:"/cy",destination:"/marketing/cy"},{has:[{type:e,value:i}],source:"/da",destination:"/marketing/da"},{has:[{type:e,value:i}],source:"/de",destination:"/marketing/de"},{has:[{type:e,value:i}],source:"/el",destination:"/marketing/el"},{has:[{type:e,value:i}],source:"/es",destination:"/marketing/es"},{has:[{type:e,value:i}],source:"/et",destination:"/marketing/et"},{has:[{type:e,value:i}],source:"/fa",destination:"/marketing/fa"},{has:[{type:e,value:i}],source:"/fi",destination:"/marketing/fi"},{has:[{type:e,value:i}],source:"/fr",destination:"/marketing/fr"},{has:[{type:e,value:i}],source:"/gu",destination:"/marketing/gu"},{has:[{type:e,value:i}],source:"/ha",destination:"/marketing/ha"},{has:[{type:e,value:i}],source:"/he",destination:"/marketing/he"},{has:[{type:e,value:i}],source:"/hi",destination:"/marketing/hi"},{has:[{type:e,value:i}],source:"/hr",destination:"/marketing/hr"},{has:[{type:e,value:i}],source:"/hu",destination:"/marketing/hu"},{has:[{type:e,value:i}],source:"/id",destination:"/marketing/id"},{has:[{type:e,value:i}],source:"/is",destination:"/marketing/is"},{has:[{type:e,value:i}],source:"/it",destination:"/marketing/it"},{has:[{type:e,value:i}],source:"/ja",destination:"/marketing/ja"},{has:[{type:e,value:i}],source:"/kk",destination:"/marketing/kk"},{has:[{type:e,value:i}],source:"/kn",destination:"/marketing/kn"},{has:[{type:e,value:i}],source:"/ko",destination:"/marketing/ko"},{has:[{type:e,value:i}],source:"/lt",destination:"/marketing/lt"},{has:[{type:e,value:i}],source:"/lv",destination:"/marketing/lv"},{has:[{type:e,value:i}],source:"/mk",destination:"/marketing/mk"},{has:[{type:e,value:i}],source:"/ml",destination:"/marketing/ml"},{has:[{type:e,value:i}],source:"/mr",destination:"/marketing/mr"},{has:[{type:e,value:i}],source:"/ms",destination:"/marketing/ms"},{has:[{type:e,value:i}],source:"/nl",destination:"/marketing/nl"},{has:[{type:e,value:i}],source:"/no",destination:"/marketing/no"},{has:[{type:e,value:i}],source:"/pl",destination:"/marketing/pl"},{has:[{type:e,value:i}],source:"/pt-br",destination:"/marketing/pt-br"},{has:[{type:e,value:i}],source:"/ro",destination:"/marketing/ro"},{has:[{type:e,value:i}],source:"/ru",destination:"/marketing/ru"},{has:[{type:e,value:i}],source:"/sl",destination:"/marketing/sl"},{has:[{type:e,value:i}],source:"/sq",destination:"/marketing/sq"},{has:[{type:e,value:i}],source:"/sr",destination:"/marketing/sr"},{has:[{type:e,value:i}],source:"/sv",destination:"/marketing/sv"},{has:[{type:e,value:i}],source:"/sw",destination:"/marketing/sw"},{has:[{type:e,value:i}],source:"/ta",destination:"/marketing/ta"},{has:[{type:e,value:i}],source:"/te",destination:"/marketing/te"},{has:[{type:e,value:i}],source:"/th",destination:"/marketing/th"},{has:[{type:e,value:i}],source:"/tl",destination:"/marketing/tl"},{has:[{type:e,value:i}],source:"/tr",destination:"/marketing/tr"},{has:[{type:e,value:i}],source:"/ur",destination:"/marketing/ur"},{has:[{type:e,value:i}],source:"/uk",destination:"/marketing/uk"},{has:[{type:e,value:i}],source:"/uz",destination:"/marketing/uz"},{has:[{type:e,value:i}],source:"/vi",destination:"/marketing/vi"},{has:[{type:e,value:i}],source:"/yo",destination:"/marketing/yo"},{has:[{type:e,value:i}],source:"/zh-cn",destination:"/marketing/zh-cn"},{has:[{type:e,value:i}],source:"/zh-tw",destination:"/marketing/zh-tw"},{has:[{type:e,value:i}],source:"/pricing",destination:a},{has:t,source:"/:path*.map",destination:"/404"}],fallback:[]},"/_error":["static/chunks/pages/_error-b43021fcf80fd84b.js"],"/published/[docId]":[n,s,r,o,c,u,p,g,d,l,h,k,m,v,y,b,f,x,w,B,"static/chunks/pages/published/[docId]-8bf731410a5e1211.js"],"/published_mobile/[docId]":[n,s,r,o,c,u,p,g,d,l,h,k,m,v,y,b,f,x,w,B,"static/chunks/pages/published_mobile/[docId]-1c855a2b63b7b79a.js"],sortedPages:["/_app","/_error","/published/[docId]","/published_mobile/[docId]"]}}("host","(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app)",void 0,"/marketing/en/pricing","static/chunks/5adc83ef-8e07286a1a4aed9b.js","static/chunks/93656207-41d28716ca784979.js","static/chunks/69bd6bf3-583fd1786d6463f8.js","static/chunks/b4d7d80c-da42a3086aafde9e.js","static/chunks/ad54e6ef-485bff6418c8824b.js","static/chunks/8c469d57-15109969c63e1543.js","static/chunks/2edb282b-a83f7ffd007bccf0.js","static/chunks/998ccc15-ad35dfdb33c695e6.js","static/chunks/b13ba9de-11ef9f2e07c3e310.js","static/chunks/91bbf309-384c42be65e3e52b.js","static/chunks/b155a556-fcae5884b6180690.js","static/chunks/d08a6a05-d92448afdf309bb8.js","static/chunks/9b583bcd-f8f16bc96d67efb2.js","static/chunks/1035ef44-e4d66d81a61710cd.js","static/chunks/b779bb5e-28b0d806a81f2318.js","static/chunks/a29ae703-de9ed4e81359daba.js","static/css/7f1bf32feb6a8541.css","static/chunks/1012-8f546bc453a6c844.js","static/chunks/9317-3ea02921034103e8.js","static/css/c5909dc245a8df8d.css"),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();