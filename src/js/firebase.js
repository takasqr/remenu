import firebase from 'firebase/app'

export default function initializeApp () {
  // Firebase Config を設定
  var firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_CONFIG_APIKEY,
    authDomain: process.env.VUE_APP_FIREBASE_CONFIG_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_CONFIG_DATABASEURL,
    projectId: process.env.VUE_APP_FIREBASE_CONFIG_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_CONFIG_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_FIREBASE_CONFIG_APPID,
    measurementId: process.env.VUE_APP_FIREBASE_CONFIG_MEASUREMENTID
  }
  // Firebase 初期化
  firebase.initializeApp(firebaseConfig)
}
