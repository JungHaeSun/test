<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
 
<!DOCTYPE html>
<html lang="ko">
<head>
<title>WiseN</title>
<!-- HTML5 Shim and Respond.js IE9 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
<!-- Meta -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="description" content="Phoenixcoded">
<meta name="keywords"
	content=", Flat ui, Admin , Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app">
<meta name="author" content="Phoenixcoded">

<!-- Favicon icon -->
<link rel="icon" href="/op/dark/assets/images/favicon.ico"
	type="image/x-icon">
<tiles:insertAttribute name="css" />
<tiles:insertAttribute name="js" />
</head>
<body class="dark-layout">
	<!-- Pre-loader start -->
	<div class="theme-loader">
		<div class="ball-scale">
			<div></div>
		</div>
	</div>
	<!-- Pre-loader end -->
	<div id="pcoded" class="pcoded">
		<div class="pcoded-overlay-box"></div>
		<div class="pcoded-container navbar-wrapper">
			<nav class="navbar header-navbar pcoded-header" header-theme="theme4">
				<div class="navbar-wrapper">
					<div class="navbar-logo">
						<a class="mobile-menu" id="mobile-collapse" href="/main"> <i class="ti-menu"></i> </a> <a href="/op/main"> <img class="img-fluid" src="/op/resources/dark/assets/images/auth/logo.png" alt="Logo" />
						</a> 
						<a class="mobile-options"> <i class="ti-more"></i></a>
					</div>
					<div class="navbar-container container-fluid">
						<div>
							<ul class="nav-left">
								<li>
									<div class="sidebar_toggle">
										<a href="javascript:void(0)"><i class="ti-menu"></i></a>
									</div>
								</li>
								<li><a href="#!" onclick="javascript:toggleFullScreen()">
										<i class="ti-fullscreen"></i>
								</a></li>
							</ul>
							<ul class="nav-right">
								<li class="header-notification"><a href="#!"> <i
										class="ti-bell"></i> <span class="badge">5</span>
								</a></li>
								<li class="header-notification"><a
									href="#" class="displayChatbox">
										<i class="ti-comments"></i>
								</a></li>
								<li class="user-profile header-notification"><a
									href="/logout"> <i class="ti-layout-sidebar-left"></i> 로그아웃
								</a></li>
							</ul>
							<span class="morphsearch-close"><i
								class="icofont icofont-search-alt-1"></i></span>
						</div>
						<!-- search end -->
					</div>
				</div>
		</div>
		</nav>
		<!-- Sidebar inner chat end-->
		<div class="pcoded-main-container">
			<div class="pcoded-wrapper">
				<!-- menu -->
				<tiles:insertAttribute name="menu" />
				<!-- /menu -->
				<div class="pcoded-content">
					<div class="pcoded-inner-content">
						<div class="main-body">
							<div class="page-wrapper">
								<!-- content -->
								<tiles:insertAttribute name="content" />
								<!-- /content -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

