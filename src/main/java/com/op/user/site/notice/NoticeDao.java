package com.op.user.site.notice;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeDao {
	
	//공지 리스트
	List<Notice> findNoticeList(Notice notice);
	
	//공지 리스트 갯수
	public int getNoticeCount(Notice avo);
	
	//공지 수정
	public int updateNotice(Notice avo);
	
	//공지 삭제
	public int deleteNotice(Notice avo);
	
	//공지 정보
	public Notice findNoticeView(Notice avo);
	
}
