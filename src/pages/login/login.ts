import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {firebase}  from 'firebase/database';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { ChatPage } from '../chat/chat';
import { MenuAulaPage } from '../menu-aula/menu-aula';
/**
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  passwordconfirm:string;
  tipoUser:string;
    constructor(public navCtrl: NavController, public navParams: NavParams,private _auth:AngularFireAuth) {
    }
    async login()
    {
     await this._auth.auth.signInWithEmailAndPassword(this.username,this.password)
                          .then(result => {this.navCtrl.push(MenuAulaPage,{usuario:this.username})})
                          .catch(function(error) {         
                              alert(error.message);
                              //console.log(error);
                              
                          });
  
                        // if(result!=undefined){
                          
                        //   console.log("INGRESO");
                        // }
  
    }
  UserValido()
  {
    switch(this.tipoUser){
      case "admin":{
        this.username="admin@admin.com";
        this.password="111111";
        break;}
      case "usuario":{
        this.username="usuario@usuario.com";
        this.password="333333";
        break;}
      case "invitado":{
        this.username="invitado@invitado.com";
        this.password="222222";
        break;}                
      case "jugador1":{
        this.username="j1@jugador.com";
        this.password="444444";
        break;}
      case "jugador2":{
        this.username="j2@jugador.com";
        this.password="555555";
        break;}        
    }

  
  }
  
  Registrarse(){
    this.navCtrl.push(RegisterPage);
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
