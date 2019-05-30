<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 
<%
String pageName = request.getAttribute("javax.servlet.forward.servlet_path").toString();
%>
 
 
<nav class="pcoded-navbar" pcoded-header-position="relative">
  <div class="sidebar_toggle">
    <a href="#"><i class="icon-close icons"></i></a>
  </div>
  <div class="pcoded-inner-navbar main-menu">
    <div class="">
      <div class="main-menu-header">
        <div class="user-details">
          <span><b>${sessionScope.umem.grp}</b>팀</span>
        </div>
      </div>
    </div>
    <ul class="pcoded-item pcoded-left-item">
 		<li class="pcoded-hasmenu <%if (pageName.contains("site/")) { out.println("active pcoded-trigger"); }%>">
 			  <a href="#"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">공급자관리</span> <span class="pcoded-mcaret"></span></a>
	          <ul class="pcoded-submenu">
	            <li class="<%if (pageName.contains("site/admin")) { out.println("active"); }%>">
					<a href="site/admin"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">관리자</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("site/userLog")) { out.println("active"); }%>">
					<a href="site/userLog"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">사용자로그</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("site/adminLog")) { out.println("active"); }%>">
					<a href="site/adminLog"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">관리자로그</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("site/part")) { out.println("active"); }%>">
					<a href="site/part"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">부서</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("site/notice")) { out.println("active"); }%>">
					<a href="site/notice"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">공지사항</span> <span class="pcoded-mcaret"></span></a>
	            </li>                                                           
	          </ul> 			
 		</li>
 		<li class="pcoded-hasmenu <%if (pageName.contains("customer/")) { out.println("active pcoded-trigger"); }%>">
 			  <a href="#"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">고객사 관리</span> <span class="pcoded-mcaret"></span></a>
	          <ul class="pcoded-submenu">
	            <li class="<%if (pageName.contains("customer/client")) { out.println("active"); }%>">
					<a href="/customer/client"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">고객사</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("customer/class")) { out.println("active"); }%>">
					<a href="/customer/class"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">사용자 분류</span> <span class="pcoded-mcaret"></span></a>
	            </li>                                                          
	          </ul> 			
 		</li> 
 		<li class="pcoded-hasmenu <%if (pageName.contains("domain/")) { out.println("active pcoded-trigger"); }%>">
 			  <a href="#"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">도메인</span> <span class="pcoded-mcaret"></span></a>
	          <ul class="pcoded-submenu">
	            <li class="<%if (pageName.contains("domain/management")) { out.println("active"); }%>">
					<a href="domain/management"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">도메인</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("customer/serviceGrp")) { out.println("active"); }%>">
					<a href="domain/serviceGrp"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">서비스그룹</span> <span class="pcoded-mcaret"></span></a>
	            </li>                                                          
	          </ul> 			
 		</li> 
 		<li class="pcoded-hasmenu <%if (pageName.contains("infra/")) { out.println("active pcoded-trigger"); }%>">
 			  <a href="#"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">인프라지원</span> <span class="pcoded-mcaret"></span></a>
	          <ul class="pcoded-submenu">
	            <li class="<%if (pageName.contains("infra/suppliers")) { out.println("active"); }%>">
					<a href="infra/suppliers"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">공급자관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>
	            <li class="<%if (pageName.contains("infra/idc")) { out.println("active"); }%>">
					<a href="infra/idc"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">IDC관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>                                                          
	            <li class="<%if (pageName.contains("infra/rack")) { out.println("active"); }%>">
					<a href="infra/rack"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">랙관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>                
	            <li class="<%if (pageName.contains("infra/line")) { out.println("active"); }%>">
					<a href="infra/line"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">회선관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>   
	            <li class="<%if (pageName.contains("infra/switch")) { out.println("active"); }%>">
					<a href="infra/switch"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">스위치관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>   
	            <li class="<%if (pageName.contains("infra/ip")) { out.println("active"); }%>">
					<a href="infra/ip"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">IP대역관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>   
	            <li class="<%if (pageName.contains("infra/server")) { out.println("active"); }%>">
					<a href="infra/server"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">서버관리</span> <span class="pcoded-mcaret"></span></a>
	            </li>   	            	            	            	                                                     	            
	          </ul> 			
 		</li> 
 		<li class="pcoded-hasmenu <%if (pageName.contains("config/")) { out.println("active pcoded-trigger"); }%>">
 			  <a href="#"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">환경설정</span> <span class="pcoded-mcaret"></span></a>
	          <ul class="pcoded-submenu">
	            <li class="<%if (pageName.contains("config/code")) { out.println("active"); }%>">
					<a href="config/code"> <span class="pcoded-micon"><i class="ti-angle-right"></i></span> <span class="pcoded-mtext" data-i18n="nav.dash.default">도메인</span> <span class="pcoded-mcaret"></span></a>
	            </li>                                                         
	          </ul> 			
 		</li>  			 			 				
    </ul>
    
    
    
  </div>
</nav>
 
 
 
 