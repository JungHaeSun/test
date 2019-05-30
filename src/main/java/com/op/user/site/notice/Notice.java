package com.op.user.site.notice;

import org.apache.ibatis.type.Alias;

import com.op.config.ModelConfig;

@Alias("notice")
public class Notice extends ModelConfig{
	
	private String nt_idx;	
	private String nt_type;
	private String nt_time;
	private String nt_title;
	private String nt_text;
	private Integer nt_hit;	
	private Long adm_idx;	
 
	private String adm_name;
	
    public String getAdm_name() {
		return adm_name;
	}

	public void setAdm_name(String adm_name) {
		this.adm_name = adm_name;
	}

	public Notice() { }

	public String getNt_idx() {
		return nt_idx;
	}

	public void setNt_idx(String string) {
		this.nt_idx = string;
	}

	public String getNt_type() {
		return nt_type;
	}

	public void setNt_type(String nt_type) {
		this.nt_type = nt_type;
	}

	public String getNt_time() {
		return nt_time;
	}

	public void setNt_time(String nt_time) {
		this.nt_time = nt_time;
	}

	public String getNt_title() {
		return nt_title;
	}

	public void setNt_title(String nt_title) {
		this.nt_title = nt_title;
	}

	public String getNt_text() {
		return nt_text;
	}

	public void setNt_text(String nt_text) {
		this.nt_text = nt_text;
	}

	public Integer getNt_hit() {
		return nt_hit;
	}

	public void setNt_hit(Integer nt_hit) {
		this.nt_hit = nt_hit;
	}

	public Long getAdm_idx() {
		return adm_idx;
	}

	public void setAdm_idx(Long adm_idx) {
		this.adm_idx = adm_idx;
	}	
    
}
