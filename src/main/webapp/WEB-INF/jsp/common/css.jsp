<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<spring:eval expression="@environment.getProperty('server.servlet.contextPath')" var="sPath" />

<!-- Google font-->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
<!-- Required Fremwork -->
<link rel="stylesheet" type="text/css" href="${sPath}/resources/bower_components/bootstrap/css/bootstrap.min.css">
<!-- themify-icons line icon -->
<link rel="stylesheet" type="text/css" href="${sPath}/resources/dark/assets/icon/themify-icons/themify-icons.css">
<!-- ico font -->
<link rel="stylesheet" type="text/css" href="${sPath}/resources/dark/assets/icon/icofont/css/icofont.css">
<!-- Style.css -->
<link rel="stylesheet" type="text/css" href="${sPath}/resources/dark/assets/css/style.css">
<!-- color .css -->
<link rel="stylesheet" type="text/css" href="${sPath}/resources/bower_components/basic.css">