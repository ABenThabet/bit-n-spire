<!DOCTYPE html> <html lang="en"><head>
	<link rel="shortcut icon" href="/favicon.ico" type="images/x-icon" />  
	<meta charset="utf-8">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="transparent">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> Bit-n-Spire - 3D Scanner</title>
	
	
		
			<link rel="stylesheet" type="text/css" href="http://<?=$_SERVER['SERVER_NAME']?>/static/css/gen/login.css?2f945970" />
		
	
	
		<link rel="stylesheet" type="text/css" href="http://<?=$_SERVER['SERVER_NAME']?>/static/css/gen/app.css?f04877eb" />
<script>
    document.addEventListener('click', function(event) {
      var target = event.target;
      if (target.tagName.toLowerCase() == 'a')
      {
	  var port = target.getAttribute('href').match(/^:(\d+)(.*)/);
          if (port)
          {
             target.port = port[1];
	     target.href = window.location.protocol + '//' + window.location.hostname ;
          }
      }
    }, false);
</script>

<script>
<?php
$command="/sbin/ifconfig wlan0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'";
$ip = exec ($command);
?>
function call(){
    $.get("/start_scan.php");
    $("#test5").html('<div style="top:110px" align="center"><iframe src="http://<?php echo $ip; ?>:3000" frameBorder="0" height="800" width="100%"  allowfullscreen></iframe></div>');
    $('#myLink').click(function(){ stop(); });
};
function stop(){
     $.get("/stop_scan.php");
}
</script>
	
</head> <body onload="call();">
	
	<div id="app"
		class=
		   "online no-user
			off-canvas-wrap" data-offcanvas>
		<div class="inner-wrap">
			<nav class="tab-bar">
				<section class="left-small">
					<a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
				</section>
				<section class="middle tab-bar-section">
					<span class="top-logo-small show-for-small"><a href="#"><i class="icon-rocket"></i></a></span>
					<h1 class="title hide-for-small"><a href="#"><img src="http://<?=$_SERVER['SERVER_NAME']?>/img/astrobox_logo_medium.png"/></a></h1>
				</section>
			</nav>
			<aside class="left-off-canvas-menu">
				<ul class="off-canvas-list" id="main-menu">
					<li><label>bit'n'spire</label></li>
					<li><a href=":80" id="myLink"><i class="icon-th"></i> 3D Printer</a></li>
					<li><a href="#"><i class="icon-th"></i> 3D Scanner</a></li>
				<div class="copy" align="center">Powered by <a href="https://www.8bit-design.net/">8Bit-Design</a><br/>Aym@Nem - v0.1(19)</div>
			</aside>
			<div id="main">
				<div class="row">
					<div id="view-container" class="small-12 columns">
						<div id="home-view" class="app-view" style="margin-left:auto;margin-right: auto;">
							<div class="row heading" style="max-width:62.5rem;margin-left:auto;margin-right: auto;">
								<div class="small-12 title-heading"><h1 class="bold"><b>bit-n-spire</b></h1>
								</div> 
							</div> 
							<div id="app-container" class="" style="margin-left:0;margin-right: auto;">
							<div id="test5"> </div>
						</div>
					</div>
						
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> <script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
                        	</div>
			</div>
				</div>
			</div>
		</div>
	</div>
	
		<div id="login-modal" class="reveal-modal radius" data-reveal>
	<div class="modal-content row">
		<div class="small-12 columns">
			<div class="login-container">
				<form data-abide="ajax">
					<center>
						<img class="logo" src="http://<?=$_SERVER['SERVER_NAME']?>/img/astroprint_logo.png"/>
					</center>
					<div data-alert class="alert-box alert radius" style="display:none"></div>
					<div class="input-wrapper">
						<label><i class="icon-user"></i> <b>Email</b> (<a href="https://www.astroprint.com/account/signup">no account?</a>)
							<input type="email" name="email" class="radius" required pattern="email"/>
						</label>
						<small class="error">A valid email address is needed.</small>
					</div>
					<div class="input-wrapper">
						<label><i class="icon-lock"></i> <b>Password</b> (<a href="https://www.astroprint.com/account/forgot">forgot?</a>)
							<input type="password" name="password" class="radius" required/>
						</label>
						<small class="error">Please provide a password.</small>
					</div>
					<center>
						<div class="loading-button signin">
							<button class="success radius">Sign in</button>
							<span class="loading button disabled success radius"><i class="icon-rocket-spinner animate-spin"></i> Signing in...</span>
						</div>
					</center>
				</form>
			</div>
		</div>
	</div>
	<a class="close-reveal-modal">&#215;</a> </div>
	
	<div id="turnoff-view" class="app-view hide" data-fullscreen="1">
		<div class="row">
	<div class="small-12 columns" align="center">
		<i class="icon-off blink-animation"></i>
		<h1 class="bold loading">Going to sleep...</h1>
		<h2 class="bold done">It's now safe to unplug your AstroBox</h2>
	</div> </div> <div id="turnoff-modal" class="reveal-modal medium radius" data-reveal align="center">
	<h2>Turn AstroBox off.</h2>
	<p>The Box will go into suspend mode. Any active print job will be stopped.</p>
	<p>Are you sure?</p>
	<button class="secondary radius">Cancel</button>
	<button class="alert radius">Yes, turn it off</button>
	<a class="close-reveal-modal">&#215;</a> </div>
	</div>
	
	<script type="text/javascript">
		var UI_API_KEY = "AF9CD14E4CC942A69DEB466FE80F7F05";
		var BASEURL = "index.html";
		var API_BASEURL = BASEURL + "api/";
		var SOCKJS_URI = window.location.protocol.slice(0, -1) + "://" + (window.document ? window.document.domain : window.location.hostname) + "/sockjs";
		var SOCKJS_DEBUG = false;
		var LOGGED_USER = null;
		var app = null;
		var ASTROBOX_NAME = "bit-n-spire";
		var PRODUCT_NAME = "AstroBox";
		var initial_states = {
			printing: false,
			paused: false,
			print_capture: null,
			online: true
		};
		var initial_printer_profile = {"driver": "marlin", "extruder_count": 1, "heated_bed": true, "max_bed_temp": 140, "max_nozzle_temp": 280};
	</script>
	<script type="text/javascript" src="http://<?=$_SERVER['SERVER_NAME']?>/static/js/gen/app.js?9303f233"></script>
	
		<script type="text/javascript" src="http://<?=$_SERVER['SERVER_NAME']?>/static/js/gen/login.js?215670d2"></script>
	
	<script type="text/javascript">
		$(document).foundation({
			offcanvas: { close_on_click: true }
		});
	</script> </body> <!-- Mirrored from 192.168.1.11/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 25 May 2016 10:38:59 GMT --> </html>
