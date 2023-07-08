import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

/*
  npx create-react-app intro
  npm install -g create-react-app
  create-react-app intro
  npm start
  Le DOM (Document Object Model) est généré par votre navigateur depuis le HTML pour afficher une page.
  il représente la structure de votre page html.
  il permet d’accéder aux différents éléments de la page grâce au langage JavaScript.

  React ne manipule pas directement le DOM du navigateur. 
  Il génère un DOM virtuel, qui ne réprésente pas le DOM des navigateurs. 
  Ensuite il fusionne son DOM avec le DOM du navigateur, en générant le strict minimum!
  C’est ce qui nous permet d’avoir une app perfomante.

  Dans le snippet ci-dessous, l’id root permet de préciser où notre app React va vivre dans notre HTML. 
  Ensuite, on va ordonner à ReactDOM de générer (render) notre composant React qui s’appelle App.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
