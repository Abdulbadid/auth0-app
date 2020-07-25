/* eslint no-restricted-globals:0*/
import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode';

const SUCCESS="/gizli";
const FAIL="/main";

export default class Auth{
    auth0=new auth0.WebAuth({
        domain:"authaby.us.auth0.com",
        clientID:"l9mR9P0QIwXuwCcPMXVAEB5KHakSMwIA",
        redirectUri:"http://localhost:3000/callback",
        audience:"https://authaby.us.auth0.com/userinfo",
        responseType:"token id_token",
        scope:"openid profile"
    });

    constructor(){
        this.login=this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthendication(){
        this.auth0.parseHash((err,authReults)=>{
            if(authReults && authReults.accessToken && authReults.idToken){
                let expiresAt=JSON.stringify((authReults.expiresIn)*1000+new Date().getTime());
                localStorage.setItem("acces_token",authReults.accessToken);
                localStorage.setItem("id_token",authReults.idToken);
                localStorage.setItem("expires_at",expiresAt);

                location.hash="";
                location.pathname=SUCCESS;
            }else if(err){
                location.pathname=FAIL;
                console.log(err);
            }
        })
    }

    isAuthenticated(){
        let expiresAt=JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime()<expiresAt;

    }

    logout(){
        localStorage.removeItem("acces_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        location.pathname=FAIL;

    }

    getProfile(){
        if(localStorage.getItem("id_token")){
            return jwtDecode(localStorage.getItem("id_token"))
        }
        else{
            return
        }
    }
}