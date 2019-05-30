package com.op.main;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *<pre>
 *com.op.main
 *MainController.java
 *</pre>
 *
 * @author :NFLINT
 * @Date   :2019. 5. 30.
 * @Version:
 *
 *  
 */
@Controller
public class MainController {
	
    @Autowired
    private HttpServletRequest request;	
    
    @RequestMapping("/")
    public String login(){
 
    	return "main";
    }
    
    //로그아웃
    @RequestMapping(value = "/logout")
    public String logout() throws ServletException {
        request.logout();
        return "redirect:/";
    }   
}
