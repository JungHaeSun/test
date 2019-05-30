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
<form class="m-form m-form--state m-form--fit m-form--label-align-right"
	id="user_form">
	<input type="hidden" name="ds_idx" value="${avo.ds_idx }" />
	<div class="page-body">
		<div class="card">
			<div class="card-block table-border-style">
				<div class="table-responsive">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<th style="width: 120px;">설정</th>
								<td>
									<div class="form-check form-check-inline">
										<label class="form-check-label"> <input
											class="form-check-input" type="radio" name="ds_show"
											id="gender-1" value="Y"
											<c:if test = "${avo.ds_show eq 'Y'}">checked</c:if>>
											노출
										</label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label"> <input
											class="form-check-input" type="radio" name="ds_show"
											id="gender-2" value="N"
											<c:if test = "${avo.ds_show eq 'N'}">checked</c:if>>
											비노출
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th>제목</th>
								<td><input type="text" class="form-control m-input"
									name="nt_title" placeholder="제목" value="${avo.ctm_type }"
									maxlength="15" required></td>
							</tr>
							<tr>
								<th>내용</th>
								<td><textarea id="editor1" name="nt_text" placeholder="내용">
                              	ㅇㅇㅇ
                          </textarea></td>
							</tr>

						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div style="text-align: center;">
			<button type="button" class="btn btn-primary m-b-0" id="insertBtn">저장</button>
			<c:if test="${!empty avo}">
				<button type="button" class="btn btn-primary m-b-0" id="deleteBtn">삭제</button>
			</c:if>
			<button type="button" class="btn btn-primary m-b-0" id="goPage">목록</button>
		</div>
	</div>
</form>


<!-- ck editor -->
<script src="${sPath}resources/dark/assets/pages/ckeditor/ckeditor.js"></script>

<script type="text/javascript"
	src="${sPath}resources/dark/assets/pages/ckeditor/ckeditor-custom.js"></script>

<script
	src="${sPath}resources/bower_components/jquery-validation/js/jquery.validate.js"></script>
<script>
	$(function() {
	    $("#insertBtn").click(function() {

	        $("#user_form").validate({
	          debug : true,
	          rules : {
	        	  ds_sort : {
	              required : true
	            } 
	          },
	          messages : {
	        	  ds_sort : {
	              required : "노출순서를 입력해 주십시오."
	            } 
	          },
	          submitHandler : function(form) {
 
	            $.ajax({
	                type:'post',
                    <c:if test ="${empty avo.ds_idx}">
                    url : "/cdn/u103wProc.do",
                    </c:if>
                    <c:if test ="${!empty avo.ds_idx}">
                    url : "/cdn/u103uProc.do",
                    </c:if>
	                data : $("#user_form").serialize(),
	                dataType : 'json',
	                success : applyAfter
	              });
	            
	            return false;
	          }

	        });
	        
	        $("#user_form").submit();

	   });
		
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
	
    function applyAfter(res){
        if(res.chk > 0){
          alert("저장 되었습니다.");
          location.href = "/cdn/u103.do";
        }else{
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
