package com.op.user.site.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.op.user.site.notice.NoticeDao;

@Service
public class NoticeService { 

	@Autowired
	private NoticeDao nd;
	
	public List<Notice> findNoticeList(Notice notice){
		return nd.findNoticeList(notice);
	}
	
	public int getNoticeCount(Notice avo) {
		return nd.getNoticeCount(avo); 
	}
 
	public int updateNotice(Notice avo) {
		return nd.updateNotice(avo); 
	}
 
	public int deleteNotice(Notice avo) {
		return nd.deleteNotice(avo); 
	}
 
	public Notice findNoticeView(Notice avo) {
		return nd.findNoticeView(avo); 
	}
}
