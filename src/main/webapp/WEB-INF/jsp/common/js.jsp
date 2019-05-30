<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<spring:eval expression="@environment.getProperty('server.servlet.contextPath')" var="sPath" />
 
<!-- Required Jquery -->
<script type="text/javascript" src="${sPath}/resources/bower_components/jquery/js/jquery.min.js"></script>
<script type="text/javascript" src="${sPath}/resources/bower_components/jquery-ui/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="${sPath}/resources/bower_components/popper.js/js/popper.min.js"></script>
<script type="text/javascript" src="${sPath}/resources/bower_components/bootstrap/js/bootstrap.min.js"></script>
<!-- jquery slimscroll js -->
<script type="text/javascript" src="${sPath}/resources/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
<!-- Warning Section Ends -->
<script type="text/javascript" src="${sPath}/resources/dark/assets/js/script.js"></script>
<script src="${sPath}/resources/dark/assets/js/pcoded.min.js"></script>
<script src="${sPath}/resources/dark/assets/js/demo-12.js"></script>
<script src="${sPath}/resources/dark/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="${sPath}/resources/dark/assets/js/jquery.mousewheel.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
<script type="text/javascript" src="${sPath}/resources/bower_components/basic.js"></script>