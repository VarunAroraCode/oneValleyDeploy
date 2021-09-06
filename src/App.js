import React, { Component } from 'react';
import axios from 'axios'
import fruitImages from './images/fruitImages.js';
import PopUp from './PopUp.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      seen: false,
      family:"",
      genus:"",
      id:"",
      name: "",
      calories:"",
      carbohydrates:"",
      fat: "",
      protein: "",
      sugar: "",
      order:"",
      test:[]
    };
    //binding for helper functions
    this.displayFruit = this.displayFruit.bind(this);
    this.togglePop = this.togglePop.bind(this);
  }

  //get info from fruits api
  componentDidMount() {
    axios.get("https://powerful-bayou-97950.herokuapp.com/fruits")
      .then(res => {
        const fruit = res.data
        this.setState({ data:fruit });
      })
  }
//set state for new fruit being displayed
  displayFruit(event){
    this.setState({
      family: event.family,
      genus: event.genus,
      name: event.name,
      id: event.id,
      calories: event.nutritions.calories,
      carbohydrates: event.nutritions.carbohydrates,
      fat: event.nutritions.fat,
      protein: event.nutritions.protein,
      sugar: event.nutritions.sugar,
      order: event.order,
    }, () => 
    console.log(this.state.name))
    
  }
  //toggle the modal (seen/unseen)
  togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  //default render (display loading screen until data comes in)
  render() {
    if(this.state.data.length == 0){
      return (
        <div >
          <header className="App-header">
            <h1 >loading</h1>
            </header>
        </div>
      );
    }else{
      //render actual app when rest of data comes in
      return(
        <div className="App-header">
          <h1 className = "pageTitle">Select Image For More Info</h1>
          <div className = "grid-container">
            {this.state.data.map(element => { 
                var name = element.name
                var currImage = fruitImages[name]
                console.log("curr image: " + currImage)
                return(
                  <div >
                    <img className = "image" src = {currImage}  
                      onClick={ () =>{
                        this.displayFruit(element)
                        this.togglePop()
                      }
                    }
                    ></img>  
                  </div>
                )
              })}
              {this.state.seen ? <PopUp toggle={this.togglePop} {...this.state} /> : null}
          </div>
        </div>
      )
    }
  }
}

export default App;
