
    window._currentDevice = 'mobile';
    window.Parameters = window.Parameters || {
        AjaxContainer: 'div.dmBody',
        WrappingContainer: 'div.dmOuter',
        HomeUrl: 'http://app.multiscreensite.com/site/8dd2363d',
        AccountUUID: 'fb4d59bf22df46ab9359034206e6204e',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: '8dd2363d',
        SiteId: '2431680',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Mon Mar 21 10:55:39 UTC 2022',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialDynamicItem: '',
        InitialPageAlias: 'home',
        InitialPageUuid: '6255e55d99644a109f257834f3a06c08',
        InitialEncodedPageAlias: 'aG9tZQ==',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '5285',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/8dd2363d?preview=true&dm_device=mobile&dm_exportSite=true&nossl&dm_exportSite_protected=14510c92_1649443062366_5_a79d95c54968fc80c2f6dcba86da0e25d1cf4298bb07c38d269bf67d50ab9dd1',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        NotificationSubDomain: 'assistencia-jdl02b21bf8',
        HasCustomDomain: true,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'pt',
        NavItems: 'W3sidGl0bGUiOiJQw6FnaW5hIEluaWNpYWwiLCJhbGlhcyI6ImhvbWUiLCJwYXRoIjoiL3NpdGUvOGRkMjM2M2QvP3ByZXZpZXc9dHJ1ZSZkbV9kZXZpY2U9bW9iaWxlIiwiaW5OYXZpZ2F0aW9uIjp0cnVlLCJzdWJOYXYiOltdfV0=',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 5,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/8dd2363d',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        siteCacheKey: '1647860177355_8dd2363d',
        siteInfo: null,
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 22;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if(!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function() {
            },
            getCurrentDeviceType: function() {
                return window._currentDevice;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }

    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }



    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }









(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5S58LSS');
  

  

  

  

  