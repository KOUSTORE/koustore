angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.kouStore', {
    url: '/anasayfa',
    views: {
      'tab1': {
        templateUrl: 'templates/kouStore.html',
        controller: 'kouStoreCtrl'
      }
    }
  })

  .state('giyim', {
    url: '/giyim',
    templateUrl: 'templates/giyim.html',
    controller: 'giyimCtrl'
  })

  .state('aksesuar', {
    url: '/aksesuar',
    templateUrl: 'templates/aksesuar.html',
    controller: 'aksesuarCtrl'
  })

  .state('eItim', {
    url: '/egitim',
    templateUrl: 'templates/eItim.html',
    controller: 'eItimCtrl'
  })

  .state('hediyelik', {
    url: '/hediyelik',
    templateUrl: 'templates/hediyelik.html',
    controller: 'hediyelikCtrl'
  })

  .state('saLK', {
    url: '/saglik',
    templateUrl: 'templates/saLK.html',
    controller: 'saLKCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.sepetim'
      2) Using $state.go programatically:
        $state.go('tabsController.sepetim');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/sepetim
      /page1/tab2/sepetim
  */
  .state('tabsController.sepetim', {
    url: '/sepetim',
    views: {
      'tab1': {
        templateUrl: 'templates/sepetim.html',
        controller: 'sepetimCtrl'
      },
      'tab2': {
        templateUrl: 'templates/sepetim.html',
        controller: 'sepetimCtrl'
      }
    }
  })

  .state('favoriler', {
    url: '/favoriler',
    templateUrl: 'templates/favoriler.html',
    controller: 'favorilerCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.sepetKaldR'
      2) Using $state.go programatically:
        $state.go('tabsController.sepetKaldR');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/sepetkaldir
      /page1/tab2/sepetkaldir
  */
  .state('tabsController.sepetKaldR', {
    url: '/sepetkaldir',
    views: {
      'tab1': {
        templateUrl: 'templates/sepetKaldR.html',
        controller: 'sepetKaldRCtrl'
      },
      'tab2': {
        templateUrl: 'templates/sepetKaldR.html',
        controller: 'sepetKaldRCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.sepetim2'
      2) Using $state.go programatically:
        $state.go('tabsController.sepetim2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/bossepet
      /page1/tab2/bossepet
  */
  .state('tabsController.sepetim2', {
    url: '/bossepet',
    views: {
      'tab1': {
        templateUrl: 'templates/sepetim2.html',
        controller: 'sepetim2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/sepetim2.html',
        controller: 'sepetim2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.giris'
      2) Using $state.go programatically:
        $state.go('tabsController.giris');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/giris
      /page1/tab2/giris
  */
  .state('tabsController.giris', {
    url: '/giris',
    views: {
      'tab1': {
        templateUrl: 'templates/giris.html',
        controller: 'girisCtrl'
      },
      'tab2': {
        templateUrl: 'templates/giris.html',
        controller: 'girisCtrl'
      }
    }
  })

  .state('tabsController.yNeticiGiris', {
    url: '/yoneticigiris',
    views: {
      'tab3': {
        templateUrl: 'templates/yNeticiGiris.html',
        controller: 'yNeticiGirisCtrl'
      }
    }
  })

  .state('tabsController.giris2', {
    url: '/yorumgiris',
    views: {
      'tab1': {
        templateUrl: 'templates/giris2.html',
        controller: 'giris2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.YeOl'
      2) Using $state.go programatically:
        $state.go('tabsController.YeOl');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/uyeol
      /page1/tab2/uyeol
  */
  .state('tabsController.YeOl', {
    url: '/uyeol',
    views: {
      'tab1': {
        templateUrl: 'templates/YeOl.html',
        controller: 'YeOlCtrl'
      },
      'tab2': {
        templateUrl: 'templates/YeOl.html',
        controller: 'YeOlCtrl'
      }
    }
  })

  .state('tabsController.yNeticiYeOl', {
    url: '/yoneticiuyeol',
    views: {
      'tab3': {
        templateUrl: 'templates/yNeticiYeOl.html',
        controller: 'yNeticiYeOlCtrl'
      }
    }
  })

  .state('tabsController.YeOl2', {
    url: '/yorumuyeol',
    views: {
      'tab1': {
        templateUrl: 'templates/YeOl2.html',
        controller: 'YeOl2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.faturaBilgileri'
      2) Using $state.go programatically:
        $state.go('tabsController.faturaBilgileri');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/fatura
      /page1/tab2/fatura
  */
  .state('tabsController.faturaBilgileri', {
    url: '/fatura',
    views: {
      'tab1': {
        templateUrl: 'templates/faturaBilgileri.html',
        controller: 'faturaBilgileriCtrl'
      },
      'tab2': {
        templateUrl: 'templates/faturaBilgileri.html',
        controller: 'faturaBilgileriCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.YelikBaArL'
      2) Using $state.go programatically:
        $state.go('tabsController.YelikBaArL');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/uyelik
      /page1/tab2/uyelik
  */
  .state('tabsController.YelikBaArL', {
    url: '/uyelik',
    views: {
      'tab1': {
        templateUrl: 'templates/YelikBaArL.html',
        controller: 'YelikBaArLCtrl'
      },
      'tab2': {
        templateUrl: 'templates/YelikBaArL.html',
        controller: 'YelikBaArLCtrl'
      }
    }
  })

  .state('tabsController.yNeticiYelikBaArL', {
    url: '/yoneticiuyelikbasarili',
    views: {
      'tab3': {
        templateUrl: 'templates/yNeticiYelikBaArL.html',
        controller: 'yNeticiYelikBaArLCtrl'
      }
    }
  })

  .state('tabsController.YelikBaArL2', {
    url: '/yorumuyelikbasarili',
    views: {
      'tab1': {
        templateUrl: 'templates/YelikBaArL2.html',
        controller: 'YelikBaArL2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.sipariPtal'
      2) Using $state.go programatically:
        $state.go('tabsController.sipariPtal');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/siparisiptal
      /page1/tab2/siparisiptal
  */
  .state('tabsController.sipariPtal', {
    url: '/siparisiptal',
    views: {
      'tab1': {
        templateUrl: 'templates/sipariPtal.html',
        controller: 'sipariPtalCtrl'
      },
      'tab2': {
        templateUrl: 'templates/sipariPtal.html',
        controller: 'sipariPtalCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.satNAlma'
      2) Using $state.go programatically:
        $state.go('tabsController.satNAlma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/satinalma
      /page1/tab2/satinalma
  */
  .state('tabsController.satNAlma', {
    url: '/satinalma',
    views: {
      'tab1': {
        templateUrl: 'templates/satNAlma.html',
        controller: 'satNAlmaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/satNAlma.html',
        controller: 'satNAlmaCtrl'
      }
    }
  })

  .state('tabsController.RNSayfas', {
    url: '/urunsayfasi',
    views: {
      'tab1': {
        templateUrl: 'templates/RNSayfas.html',
        controller: 'RNSayfasCtrl'
      }
    }
  })

  .state('tabsController.yorum', {
    url: '/yorum',
    views: {
      'tab1': {
        templateUrl: 'templates/yorum.html',
        controller: 'yorumCtrl'
      }
    }
  })

  .state('tabsController.giriYap', {
    url: '/girisyapyoneticikullanici',
    views: {
      'tab3': {
        templateUrl: 'templates/giriYap.html',
        controller: 'giriYapCtrl'
      }
    }
  })

  .state('tabsController.Lemler', {
    url: '/islemler',
    views: {
      'tab3': {
        templateUrl: 'templates/Lemler.html',
        controller: 'LemlerCtrl'
      }
    }
  })

  .state('tabsController.RNEkle', {
    url: '/urunekle',
    views: {
      'tab3': {
        templateUrl: 'templates/RNEkle.html',
        controller: 'RNEkleCtrl'
      }
    }
  })

  .state('tabsController.RNGNcelle', {
    url: '/urunguncelle',
    views: {
      'tab3': {
        templateUrl: 'templates/RNGNcelle.html',
        controller: 'RNGNcelleCtrl'
      }
    }
  })

  .state('tabsController.RNSil', {
    url: '/urunsil',
    views: {
      'tab3': {
        templateUrl: 'templates/RNSil.html',
        controller: 'RNSilCtrl'
      }
    }
  })

  .state('tabsController.RNEklendi', {
    url: '/uruneklendi',
    views: {
      'tab3': {
        templateUrl: 'templates/RNEklendi.html',
        controller: 'RNEklendiCtrl'
      }
    }
  })

  .state('tabsController.RNListesi', {
    url: '/urunlistesi',
    views: {
      'tab3': {
        templateUrl: 'templates/RNListesi.html',
        controller: 'RNListesiCtrl'
      }
    }
  })

  .state('tabsController.RNSilindi', {
    url: '/urunsilindi',
    views: {
      'tab3': {
        templateUrl: 'templates/RNSilindi.html',
        controller: 'RNSilindiCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/anasayfa')


});