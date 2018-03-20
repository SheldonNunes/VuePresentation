// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#41b883',
    secondary: 'white',
    tertiary: '#35495e',
    quartenary: '#CECECE',
  },
  {
    primary: 'Ubuntu',
    secondary: 'Raleway',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Vue.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            what is it? how does it work? how do you say it?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What is Vue?
          </Heading>
          <List>
            <ListItem>Javascript Framework</ListItem>
            <ListItem>Uses reactive, composable view components</ListItem>
            <ListItem>Has a virtual DOM</ListItem>
            <ListItem>Pronounced "View"</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Wait a sec... that sounds like React!?
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" textColor="primary">
              You are correct! They share many similarities
            </Text>
          </Appear>
          <Appear fid="2">
            <Text margin="10px 0 0" textColor="secondary">
              https://vuejs.org/v2/guide/comparison.html
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            First Use
          </Heading>
          <CodePane lang="html" theme="light" source={
            `         <div id="app">
            {{ message }}
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `          var app = new Vue({ 
              el: '#app',
              data: {
                message: 'Hello Vue!'
              }
            })`} margin='20px auto'>
            </CodePane>
            <Appear fid="1">
              <Text textColor="primary">Hello Vue!</Text>
            </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Binding
          </Heading>
          <CodePane lang="html" theme="light" source={
            `          <div id="app-2">
            <span v-bind:title="message">
              Hover your mouse over me for a few seconds
              to see my dynamically bound title!
            </span>
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `            var app2 = new Vue({
              el: '#app-2',
              data: {
                message: 'You loaded this page on ' + new Date().toLocaleString()
              }
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            If Statement
          </Heading>
          <CodePane lang="html" theme="light" source={
            `          <div id="app-3">
            <span v-if="seen">Now you see me</span>
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `           var app3 = new Vue({
              el: '#app-3',
              data: {
                seen: true
              }
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            For Loops
          </Heading>
          <CodePane lang="html" theme="light" source={
            `         <div id="app-4">
            <ol>
              <li v-for="todo in todos">
                {{ todo.text }}
              </li>
            </ol>
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `       var app4 = new Vue({
              el: '#app-4',
              data: {
                todos: [
                  { text: 'Learn JavaScript' },
                  { text: 'Learn Vue' },
                  { text: 'Build something awesome' }
                ]
              }
            })`} margin='20px auto'>
            </CodePane>
          <List>
            <ListItem>Learn Javascript</ListItem>
            <ListItem>Learn Vue</ListItem>
            <ListItem>Build something awesome</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Handling Clicks
          </Heading>
          <CodePane lang="html" theme="light" source={
            `       <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `         var app5 = new Vue({
              el: '#app-5',
              data: {
                message: 'Hello Vue.js!'
              },
              methods: {
                reverseMessage: function () {
                  this.message = this.message.split('').reverse().join('')
                }
              }
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Forms
          </Heading>
          <CodePane lang="html" theme="light" source={
            `       <div id="app-6">
            <p>{{ message }}</p>
            <input v-model="message">
          </div>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `       var app6 = new Vue({
              el: '#app-6',
              data: {
                message: 'Hello Vue!'
              }
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Review
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            We have seen the following directives (v-)
          </Text>
          <List>
            <ListItem>v-bind</ListItem>
            <ListItem>v-if</ListItem>
            <ListItem>v-for</ListItem>
            <ListItem>v-on:action</ListItem>
            <ListItem>v-model</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Composing Components Basic Example
          </Heading>
          <CodePane lang="html" theme="light" source={
            `           <ol>
            <!-- Create an instance of the todo-item component -->
            <todo-item></todo-item>
          </ol>`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `           // Define a new component called todo-item
            Vue.component('todo-item', {
              template: '<li>This is a todo</li>'
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Composing Components Example
          </Heading>
          <CodePane lang="html" theme="light" source={
            `           Vue.component('todo-item', {
              // The todo-item component now accepts a
              // "prop", which is like a custom attribute.
              // This prop is called todo.
              props: ['todo'],
              template: '<li>{{ todo.text }}</li>'
            })`} margin='20px auto'>
            </CodePane>
          <CodePane lang="js" theme="light" source={
            `           <div id="app-7">
            <ol>
              <!--
                Now we provide each todo-item with the todo object
                it's representing, so that its content can be dynamic.
                We also need to provide each component with a "key",
                which will be explained later.
              -->
              <todo-item
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id">
              </todo-item>
            </ol>
          </div>`} margin='20px auto'>
            </CodePane>
            <CodePane lang="js" theme="light" source={
            `           Vue.component('todo-item', {
              props: ['todo'],
              template: '<li>{{ todo.text }}</li>'
            })
            
            var app7 = new Vue({
              el: '#app-7',
              data: {
                groceryList: [
                  { id: 0, text: 'Vegetables' },
                  { id: 1, text: 'Cheese' },
                  { id: 2, text: 'Whatever else humans are supposed to eat' }
                ]
              }
            })`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Our Goal
          </Heading>
          <CodePane lang="html" theme="light" source={
            `          <div id="app">
            <app-nav></app-nav>
            <app-view>
              <app-sidebar></app-sidebar>
              <app-content></app-content>
            </app-view>
          </div>`} margin='20px auto'>
            </CodePane>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            And now for something completely different
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
