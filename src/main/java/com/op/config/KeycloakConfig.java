package com.op.config;

import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;

import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.KeycloakConfigResolver;
import org.keycloak.adapters.KeycloakDeployment;
import org.keycloak.adapters.KeycloakDeploymentBuilder;
import org.keycloak.adapters.spi.HttpFacade;
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.AccessToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = KeycloakSecurityComponents.class)
public class KeycloakConfig extends KeycloakWebSecurityConfigurerAdapter {


    //Keycloak Config 로딩
    //@Bean방식 외 Config 파일에 정의해 읽어들이는 방법도있다.
    @Bean
    public KeycloakConfigResolver keycloakConfigResolver() {
        return new KeycloakConfigResolver() {
            private KeycloakDeployment keycloakDeployment;
            public KeycloakDeployment resolve(HttpFacade.Request facade) {
                if (keycloakDeployment != null) {
                    return keycloakDeployment;
                }

                String path = "/keycloak.json";
                InputStream configInputStream = getClass().getResourceAsStream(path);

                if (configInputStream == null) {
                    throw new RuntimeException("Could not load Keycloak deployment info: " + path);
                } else {
                    keycloakDeployment = KeycloakDeploymentBuilder.build(configInputStream);
                }
                return keycloakDeployment;
            }
        };
    }

    /**
     * Registers the KeycloakAuthenticationProvider with the authentication manager.
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(keycloakAuthenticationProvider());
    }

    // 세션관리 방법 설정
    @Bean
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    // 권한별 접근할수있는 URL을 설정한다.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);

        http
            .csrf().disable()//CSRF 처리 해제
            .headers().frameOptions().disable() //X-Frame-Options to DENY 설정 때문에 iframe을 통해 접근할 수 없는 문제 해결
            .and()
            .authorizeRequests()
            .antMatchers("/adm/*").hasRole("ADMIN") // "ADMIN" 권한이 있는 사용자만 엑세스 허용
            .antMatchers("/user/*").hasAnyRole("ADMIN","USER") // "ROLE_ADMIN", "ROLE_USER" 유저권한있는 사용자만 엑세스 하용
            .anyRequest()
            .permitAll();
//cp 사용자
        //동시접속 세션 설정
        http.sessionManagement().maximumSessions(1);
        //accessDenied 리다이렉트시킬 URL
        http.exceptionHandling().accessDeniedPage("/403");

        //invalidSession 리다이렉트시킬 URL
        http.sessionManagement().invalidSessionUrl("/");
    }


    @Bean
    @Scope(scopeName = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
    public AccessToken getAccessToken() {

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) request.getUserPrincipal();
        KeycloakPrincipal principal = (KeycloakPrincipal) token.getPrincipal();
        KeycloakSecurityContext session = principal.getKeycloakSecurityContext();
        return session.getToken();
    }


}