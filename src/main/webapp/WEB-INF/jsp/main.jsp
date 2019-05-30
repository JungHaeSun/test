<%@ pagepageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<spring:eval expression="@environment.getProperty('server.servlet.contextPath')" var="sPath" />

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
<link rel="icon" href="${sPath}/resources/dark/assets/images/favicon.ico"
	type="image/x-icon">
<!-- Google font-->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
	rel="stylesheet">
<!-- Required Fremwork -->
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/bower_components/bootstrap/css/bootstrap.min.css">
<!-- themify-icons line icon -->
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/dark/assets/icon/themify-icons/themify-icons.css">
<!-- ico font -->
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/dark/assets/icon/icofont/css/icofont.css">
<!-- Style.css -->
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/dark/assets/css/style.css">
<!-- color .css -->
</head>
<body class="fix-menu">
	<section
		class="login p-fixed d-flex text-center bg-primary common-img-bg">
		<!-- Container-fluid starts -->
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12">
					<!-- Authentication card start -->
					<div class="login-card card-block auth-body">

						<div class="text-center">
							<img src="${sPath}/resources/dark/assets/images/auth/logo.png"
								alt="logo.png">
						</div>
						<div class="auth-box">
							<div class="row m-t-30">
								<div class="col-md-12">
									<a type="button" href="${sPath}/user/"
										class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">로그인</a>
								</div>
							</div>
						</div>

						<!-- end of form -->
					</div>
					<!-- Authentication card end -->
				</div>
				<!-- end of col-sm-12 -->
			</div>
			<!-- end of row -->
		</div>
		<!-- end of container-fluid -->
	</section>
	<!-- Required Jquery -->
	<script type="text/javascript"
		src="${sPath}/resources/bower_components/jquery/js/jquery.min.js"></script>
	<script type="text/javascript"
		src="${sPath}/resources/bower_components/jquery-ui/js/jquery-ui.min.js"></script>
	<script type="text/javascript"
		src="${sPath}/resources/bower_components/popper.js/js/popper.min.js"></script>
	<script type="text/javascript"
		src="${sPath}/resources/bower_components/bootstrap/js/bootstrap.min.js"></script>
	<!-- jquery slimscroll js -->
	<script type="text/javascript"
		src="${sPath}/resources/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
	<!-- Warning Section Ends -->
	<script type="text/javascript"
		src="${sPath}/resources/dark/assets/js/script.js"></script>
	<script src="${sPath}/resources/dark/assets/js/pcoded.min.js"></script>
	<script src="${sPath}/resources/dark/assets/js/demo-12.js"></script>
	<script src="${sPath}/resources/dark/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="${sPath}/resources/dark/assets/js/jquery.mousewheel.min.js"></script>

	</div>
	</div>
	</div>
	</div>

	<script type="text/javascript" src="${sPath}/resources/bower_components/basic.js"></script>
</body>
</html>