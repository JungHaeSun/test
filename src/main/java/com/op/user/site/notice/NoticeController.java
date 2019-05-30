package com.op.user.site.notice;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.util.Paging;

 

@Controller
@EnableWebSecurity
//어노테이션 기반 보안 적용
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class NoticeController {

	private String pagepath = "user/site_notice_";
	
	@Autowired
	private HttpSession session;
	
	@Autowired
	private NoticeService ns;
	
	//공지사항
	@RequestMapping("/user/site/notice")
	public String ad040(Model mo, Notice avo) {
		List<Notice> nl = ns.findNoticeList(avo);
		
		if(nl != null) {
			int totalCount = ns.getNoticeCount(avo);
			
			avo.setTotalCount(totalCount);
			
			int perPage = avo.getPerPage(); // 페이지당 리스트수
			int sizePage = avo.getSizePage(); // 페이지 스케일
			int curPage = avo.getCurPage(); // 현재 페이지위치
			String jsName = "goPage"; // 페이지 이동 JS 함수구분자			
			
			String pageSplit = Paging.getPageStr(totalCount, perPage, curPage, jsName);
			
			mo.addAttribute("admList", nl);
			mo.addAttribute("avo", avo);
			mo.addAttribute("pageSplit", pageSplit);
		}
 
		return pagepath+"list";
	}	
	
	//공지사항 작성
	@RequestMapping("site/notice/write")
	public String ad041(Model mo) {
 
		return pagepath+"write";
	}	
	
	//공지사항 view
	@RequestMapping("site/notice/view")
	public String ad042(Model mo, Notice avo, HttpServletRequest request) {
		//System.out.println("ddddd"+request.getParameter("idx"));
		
		if(request.getParameter("nt_idx") != null){	
			avo.setNt_idx(request.getParameter("nt_idx"));
		}
		
		Notice result = ns.findNoticeView(avo);
		mo.addAttribute("avo", result);
 
		return pagepath+"view";
	}	
}
