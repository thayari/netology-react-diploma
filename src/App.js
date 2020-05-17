import React from 'react';
import './css/style.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Banner from './components/Banner';
import HomePage from './components/HomePage';
import About from './components/About';
import Page404 from './components/Page404'
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Item from './components/Item';
import Catalog from './components/Catalog';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Switch>
              <Route path="/catalog/:id" component={Item} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/about" component={About}/>
              <Route path="/contacts" component={Contacts} />
              <Route path="/cart" component={Cart} />
              <Route exact path="/" component={HomePage} />
              <Route path="*" component={Page404}/>
            </Switch>
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
