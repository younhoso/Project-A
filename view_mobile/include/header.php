<html>
	<head>
	    <title>HIPHOPER</title>
		<meta charset="utf-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=2.0, user-scalable=yes'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <!-- 모바일 디바이스 채크 -->
        <script language="JavaScript" type="text/JavaScript">
            var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
            for (var word in mobileKeyWords){
                if (navigator.userAgent.match(mobileKeyWords[word]) != null){
                parent.window.location.href='/mobile/index.html';
                break;
                }
            }
        </script>
        <!--DESIGN CSS-->
        <link rel="stylesheet" href="./fontello/css/fontello.css">
        <link rel="stylesheet" href="./styles/lib/swiper.css">
        <link rel="stylesheet" href="./styles/reset+grids.css">
        <link rel="stylesheet" href="./styles/ui-guides.css">
        <link rel="stylesheet" href="./styles/common.css">
        <link rel="stylesheet" href="./styles/main.css">
    </head>
	<body>