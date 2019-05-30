package com.op.user.main;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.keycloak.KeycloakPrincipal;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableWebSecurity
//어노테이션 기반 보안 적용
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class UserMainController {
	
	@RequestMapping("/user/")
    public String main(Model model, HttpSession session){
		
        //로그인 정보 session에 담기
        Object amemck = session.getAttribute("umem");
        if (amemck == null ) {
            //TODO
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            KeycloakPrincipal keycloakPrincipal = (KeycloakPrincipal) authentication.getPrincipal();
          
            //UserID
            String userId = authentication.getName();
            System.out.println("UserID"+userId);        
            
            String name = authentication.getName();        
            System.out.println("name"+name);        
            
            String userName = keycloakPrincipal.getKeycloakSecurityContext().getToken().getEmail();        
            System.out.println("userName:"+userName);
     
            //Attributes 읽어오기
            Map<String, Object> Attr = keycloakPrincipal.getKeycloakSecurityContext().getToken().getOtherClaims();
            System.out.println("Attr"+Attr);   
            //이메일
            Attr.put("email",userName);
            
            //소속
            String org = (String)Attr.get("org");
            System.out.println("소속"+org);

            //팀정보
            String grp = (String)Attr.get("grp");
            System.out.println("팀정보"+grp);
 
        	session.setAttribute("umem", Attr);
        }
        
    	return "user/main";
    }
}
