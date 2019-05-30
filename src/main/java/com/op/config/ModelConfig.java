package com.op.config;

public class ModelConfig {
	int perPage = 10;
	int SizePage = 10;
	int curPage = 1;
	int totalCount = 0;
	
	int startRow = 0;
	int endRow = 10;
	
	String search_type;
	String search_word;
	
	String temp_val1;	
	
	public String getTemp_val1() {
		return temp_val1;
	}

	public void setTemp_val1(String temp_val1) {
		this.temp_val1 = temp_val1;
	}

	public String getSearch_type() {
		return search_type;
	}

	public void setSearch_type(String search_type) {
		this.search_type = search_type;
	}

	public String getSearch_word() {
		return search_word;
	}

	public void setSearch_word(String search_word) {
		this.search_word = search_word;
	}

	public int getPerPage() {
		return perPage;
	}
	
	public int getSizePage() {
		return SizePage;
	}
	
	public int getCurPage() {
		return curPage;
	}
	
	public void setPerPage(int perPage) {
		this.perPage = perPage;
	}
	
	public void setSizePage(int sizePage) {
		SizePage = sizePage;
	}
	
	public void setCurPage(int curPage) {
		
		this.curPage = curPage;
		this.startRow = ((curPage - 1 ) * this.endRow);
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
		
		System.out.println("endRow:"+this.endRow );
	}
	
}
