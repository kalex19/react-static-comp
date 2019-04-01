import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import Button from './Button';
import './App.css'; 

class App extends Component {
  constructor() {
  super();

  this.state = {
    stories: [
  {
    img: './story1.jpg',
    title: 'Winning at Fonts',
    desc: 'or, Why you should care about typography',
    authImg: './louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './story2.jpg',
    title: 'Hoodlums: a dissertation',
    desc: 'Examining villains in modern storytelling',
    authImg: './alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './story3.jpg',
    title: 'Halloween is a year-round sport',
    desc: 'Those who say otherwise just aren\'t trying hard enough.',
    authImg: './leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './story4.jpg',
    title: 'How to Improve Learning and Classroom Engagement with Humor',
    desc: 'Okay, so first of all, everybody knows fart jokes are hilarious ...',
    authImg: './pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
],
    count: 0
  }
} 

  increaseCount = () => {
    let newNum;
    this.state.count === 9
    ? newNum = {count: 9}
    : newNum = {count: this.state.count + 1}
    this.setState(newNum);
  } 

  render() {
  return (
    <div className='App'>
    <button onClick={this.increaseCount} className="button">{this.state.count}</button>
      <Header header={Header} />      
      <Banner banner={Banner} />
      <Stories  storiesTitle="Today's Top Stories"
                stories={this.state.stories} />
      <Stories storiesTitle="Pop Culture" stories={this.state.stories} />
      <Footer footer={Footer} />
    </div>
  );
  }
}

export default App;
