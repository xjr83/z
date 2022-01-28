if (typeof (atob) == "undefined")
{
	document.write('<script src="lib/stringencoders-v3.10.3/javascript/base64.js"><\/script>');
	var atob = function (x)
	{
		return base64.decode(x);
	}
}

(function ()
{
	var disableMobileAnimations = true;
	var isWin = navigator.appVersion.indexOf("Win") !== -1;
	if (isWin) $('html').addClass('win');
	var ua = navigator.userAgent.toLowerCase();
	var isChrome = ua.indexOf('chrome') > -1;
	if (isChrome) $('html').addClass('chrome');
	var isAndroidBrowser4_3minus = ((ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('android ') > -1 && ua.indexOf('applewebkit') > -1) && !(ua.indexOf('chrome') > -1));
	if (isAndroidBrowser4_3minus) $('html').addClass('android-browser-4_3minus');
	var isSafari = !isChrome && ua.indexOf('safari') !== -1;
	if (isSafari) $('html').addClass('safari');
	var isMobile = Modernizr.touch;
	if (isMobile)
	{
		$('html').addClass('mobile');
		if (disableMobileAnimations) $('html').addClass('poor-browser');
	}
	else
	{
		$('html').addClass('non-mobile');
	}
	if (isWin && isSafari)
	{
		$('html').addClass('flat-animation');
	}

})();

//(function ()
//{
//	$active = $('.navbar .active');
//	if ($active.length > 0)
//	{
//		appInsights.trackEvent($active[0].innerHTML);
//	}
//	setTimeout(arguments.callee, 1000);
//})();

if (Function('/*@cc_on return document.documentMode===9@*/')())
{
	$('html').addClass('ie9');
}
if (Function('/*@cc_on return document.documentMode===10@*/')())
{
	$('html').addClass('ie10');
}
if (!!navigator.userAgent.match(/Trident.*rv\:11\./))
{
	$('html').addClass('ie11');
}