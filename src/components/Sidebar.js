import React, { Component } from 'react'
import Posts from './Posts'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: Posts
    }
  }

  render() {
    const postsSBArr = this.state.posts.posts;

    function filter(target) {
      console.log('target', target);
    }

    function other(target) {
      console.log('other', target);
    }

    // function firstFilter(target) {
    //   console.log(postsSBArr.filter(function(target){
    //     return ;
    //   }));
    // }

    // function trueFilter(target) {
    //   let targetArr = [target]
    //   console.log(postsSBArr.filter(function(target){
    //     let targetResult = targetArr.some(postsSBArr);
    //     return targetResult
    //     // return el.price <= 1000 &&
    //     //  el.sqft >= 500 &&
    //     //  el.num_of_beds >=2 &&
    //     //  el.num_of_baths >= 2.5;
    //   },
    function trueFilter(target) {

      console.log(postsSBArr)
      }



    console.log('posts passed now logged from Sidebar.js', postsSBArr);

    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>
            <ul>
              <li className="years" onClick={() => {filter(2017)}}>2017</li>
              <ul className="months">
                <li onClick={() => {filter('April'), trueFilter('April')}}>April</li>
                <li onClick={() => {filter('March')}}>March</li>
                <li onClick={() => {filter('February')}}>February</li>
                <li onClick={() => {filter('January'), other('January')}}>January</li>
              </ul>
              <li className="years" onClick={() => {filter(2016)}}>2016</li>
              <ul className="months">
                <li onClick={() => {filter('December'), trueFilter('December')}}>December</li>
              </ul>
            </ul>
          <p>Tags</p>
            <ul className="tags">
              <li><a href="#">html</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">document</a></li>
              <li><a href="#">css</a></li>
              <li><a href="#">style</a></li>
              <li><a href="#">color</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">javascript</a></li>
              <li><a href="#">language</a></li>
              <li><a href="#">interactive</a></li>
              <li><a href="#">jquery</a></li>
              <li><a href="#">library</a></li>
              <li><a href="#">react</a></li>
              <li><a href="#">facebook</a></li>
            </ul>
        </div>
      </div>
    )
  }

}

module.exports = Sidebar
