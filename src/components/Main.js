import React,{Component} from 'react';

export default class Main extends Component{
    render(){
        return(
            <div>
                Merhaba {this.props.isim}
                <hr/>
                Gizli sayfaya yöenelmek için <a href="/gizli">Tıkla</a>
                <hr/>
                {!this.props.auth.isAuthenticated() &&
                    <div>
                    Login Ol
                    <br/>
                    <button class="btn-red" onClick={this.props.auth.login}>Login</button>
                    </div>
                }
            </div>
        )
    }
}