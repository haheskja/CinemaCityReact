import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Faq } from './components/Faq';
import { Questions } from './components/Questions';

export default class App extends React.Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Faq} />
        <Route path='/questions' component={Questions} />
      </Layout>
    );
  }
}
