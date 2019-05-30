<%@ pagepageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<spring:eval
	expression="@environment.getProperty('server.servlet.contextPath')"
	var="sPath" />

<div class="page-header">
	<div class="page-header-title">
		<h4>공지사항</h4>
	</div>
	<div class="page-header-breadcrumb">
		<ul class="breadcrumb-title">
			<li class="breadcrumb-item"><a href="index.html"> <i
					class="icofont icofont-home"></i>
			</a></li>
			<li class="breadcrumb-item"><a href="#!">사이트 관리</a></li>
			<li class="breadcrumb-item"><a href="#!">공지사항</a></li>
		</ul>
	</div>
</div>


<div class="page-body">
	<form
		class="m-form m-form--state m-form--fit m-form--label-align-right"
		id="view_form">
		<input type="hidden" name="curPage" value="${avo.nt_idx }" />
		<div class="card">
			<div class="card-block table-border-style">
				<div class="table-responsive">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<th colspan="2">${avo.nt_title }</th>
							</tr>
							<tr>
								<th>내용</th>
								<td>${avo.nt_text }</td>
							</tr>

						</tbody>
					</table>
				</div>
			</div>
		</div>
	</form>
	<div style="text-align: center;">
		<c:if test="${!empty avo}">
			<button type="button" class="btn btn-primary m-b-0" id="deleteBtn">수정</button>
			<button type="button" class="btn btn-primary m-b-0" id="deleteBtn">삭제</button>
		</c:if>
		<button type="button" class="btn btn-primary m-b-0" id="goPage">목록</button>
	</div>
</div>



<!-- ck editor -->
<script src="${sPath}resources/dark/assets/pages/ckeditor/ckeditor.js"></script>

<script type="text/javascript"
	src="${sPath}resources/dark/assets/pages/ckeditor/ckeditor-custom.js"></script>

<script>
	$(function() {

		$("#deleteBtn").click(function() {
			if (confirm("삭제 하면 복원할 수 없습니다. 정말로 삭제 하시겠습니까?")) {

				$.ajax({
					url : "u103dProc.do",
					type : 'post',
					data : $("#user_form").serialize(),
					dataType : 'json',
					success : applyDelete
				});
			}

		});

		$("#goPage").click(function() {
			location.href = "u103.do";
		});
	});

	function applyAfter(res) {
		if (res.chk > 0) {
			alert("저장 되었습니다.");
			location.href = "/cdn/u103.do";
		} else {
			alert("오류가 발생했습니다.");
		}
	}

	function applyDelete(res) {
		if (res.chk > 0) {
			alert("삭제 되었습니다.");
			location.href = "u103.do";
		} else {
			alert("오류가 발생했습니다.");
		}
	}
</script>
