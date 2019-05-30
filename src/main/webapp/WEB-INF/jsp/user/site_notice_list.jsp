<%@ pagepageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<spring:eval
	expression="@environment.getProperty('server.servlet.contextPath')"
	var="sPath" />


<!-- Data Table Css -->
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/bower_components/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/dark/assets/pages/data-table/css/buttons.dataTables.min.css">
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/bower_components/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css">
<link rel="stylesheet" type="text/css"
	href="${sPath}/resources/dark/assets/css/style.css">

<!-- Page-body  -->
<div class="page-header">
	<div class="page-header-title">
		<h4>공지사항</h4>
	</div>
	<div class="page-header-breadcrumb">
		<ul class="breadcrumb-title">
			<li class="breadcrumb-item"><a href="index.html"> <i
					class="icofont icofont-home"></i></a></li>
			<li class="breadcrumb-item"><a href="#!">사이트 관리</a></li>
			<li class="breadcrumb-item"><a href="#!">공지사항</a></li>
		</ul>
	</div>
</div>
<!-- Page-body start -->
<div class="page-body">
	<div class="card">
		<div class="card-header">
			&nbsp;
			<div class="card-header-right"
				style="padding-top: 5px; padding-right: 20px; background: none;">
				<a href="/cdn/ad041">
					<button class="btn btn-primary">공지사항작성</button>
				</a>
			</div>
		</div>
		<div class="card-block">
			<div class="dt-responsive table-responsive">
				<div id="simpletable_wrapper"
					class="dataTables_wrapper dt-bootstrap4">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-sm-12 col-md-6">
							<div class="dataTables_length" id="simpletable_length">
								<label>Show <select id="cookie_endRow"
									aria-controls="simpletable" class="form-control input-sm"><option
											value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option></select> entries
								</label>
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-6  ">
							<form
								class="m-form m-form--state m-form--fit m-form--label-align-right"
								id="list_form" action="/cdn/ad040" method="GET">
								<input type="hidden" name="curPage" id="curPage" value="0" /> <input
									type="hidden" name="nt_idx" id="nt_idx" value="" />
								<table style="margin-right: 0px; margin-left: auto;">
									<Tr>
										<td><select name="search_type"
											class="alpaca-control form-control">
												<option
													<c:if test = "${param.search_type eq 'a.nt_title'}">selected</c:if>
													value="a.nt_title">제목</option>
												<option
													<c:if test = "${param.search_type eq 'a.nt_text'}">selected</c:if>
													value="a.nt_text">내용</option>
										</select></td>
										<td>
											<div class="input-group" style="margin-bottom: 0">
												<input type="text" class="form-control" placeholder="검색 키워드"
													name="search_word" value="${param.search_word}"
													style="max-width: 250px;"> <span
													class="input-group-addon" id="searchBtn"><i
													class="ti-search"></i></span>
											</div>
										</td>
									</Tr>
								</table>
							</form>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<table id="simpletable"
								class="table table-striped table-bordered nowrap dataTable"
								role="grid" aria-describedby="simpletable_info">
								<thead>
									<tr role="row">
										<th class=" " rowspan="1" colspan="1" style="width: 10px;">순서</th>
										<th class=" " rowspan="1" colspan="1">제목</th>
										<th class=" " rowspan="1" colspan="1" style="width: 174px;">작성자</th>
										<th class=" " rowspan="1" colspan="1" style="width: 174px;">작성일</th>
										<th class=" " rowspan="1" colspan="1" style="width: 140px;">조회수</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="list" items="${admList }" varStatus="status">
										<c:set var="tmpNum"
											value="${avo.totalCount - (avo.perPage*(avo.curPage-1))}" />
										<c:set var="num" value="${tmpNum - status.index}" />
										<tr role="row" class="even">
											<td class="sorting_1 text-center"><c:choose>
													<c:when test="${list.nt_type eq 'N'}">
														<span class="m-badge m-badge--danger m-badge--wide"
															style="font-size: 11px;">공지</span>
													</c:when>
													<c:otherwise>
                                    ${num }
                                  </c:otherwise>
												</c:choose></td>
											<td><a
												href="javascript:goView('${list.nt_idx }', '/cdn/ad042')">${list.nt_title }</a></td>
											<td class="text-center">${list.adm_name }</td>
											<td class="text-center">${list.nt_time }</td>
											<td class="text-center">${list.nt_hit }</td>
										</tr>
									</c:forEach>
									<c:if test="${avo.totalCount == 0}">
										<tr>
											<td colspan="5" class="text-center">등록된 데이터가 없습니다.</td>
										</tr>
									</c:if>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-5">
							<div class="dataTables_info" id="simpletable_info" role="status"
								aria-live="polite">total : ${avo.totalCount}</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-7">${pageSplit }</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Page-body end -->


<script>
	jQuery(document).ready(function() {
		$("#searchBtn").click(function() {
			goPage(1);
		});
	});
	function goPage(page) {
		$("#curPage").val(page);
		$("#list_form").submit();
	}
	function goView(idx, url) {
		$("#nt_idx").val(idx);
		$("#list_form").attr("action", url);
		$("#list_form").submit();
	}
</script>
