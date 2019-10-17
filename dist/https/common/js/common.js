(function ($) {
  var installPrompt = null;
  var $button = $('button.a2hs');

  window.addEventListener('offline', function () {
    alert('ネットワークがオフラインになりました。');
  });

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); // ミニインフォバーを非表示にする
    $button.css({ display: '', });
    installPrompt = e;
  });

  $button.on('click', function (e) {
    e.preventDefault();

    installPrompt.prompt();

    installPrompt
      .userChoice
      .then(function (result) {
        if (result.outcome === 'accepted') {
          $button.css({ display: 'none', });
          installPrompt = null;
        }
      });

    return false;
  });
})(jQuery);
