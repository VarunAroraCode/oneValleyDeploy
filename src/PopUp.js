import React from 'react';
import Modal from 'react-bootstrap/Modal'
import fruitImages from './images/fruitImages.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class PopUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: this.props.seen
    }
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
      this.setState({
        show: false
       }, ()=>{ return(<>{this.props.toggle()} </>)});
     };

    render(){
      return (
        <>
          <Modal show={this.state.show} onHide={this.handleClick}>
            <Modal.Header>
              <Modal.Title>Fruit Name: {this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className = "ImageContainer">
              <img className = "ModalImage" src = {fruitImages[this.props.name]}></img>
              </div>
              <div>
              <ul className = "li">
                <p className = "bolden">General Facts</p>
                <li>Genus: {this.props.genus}</li>
                <li>Family: {this.props.family}</li>
                <li>ID: {this.props.id}</li>
                <li>Order: {this.props.order}</li>
                <br></br>
                <p className = "bolden">Nutrition Facts</p>
                <li>Carbohydrates: {this.props.carbohydrates}</li>
                <li>Protein: {this.props.protein}</li>
                <li>Fat: {this.props.fat}</li>
                <li>Calories: {this.props.calories}</li>
                <li>Sugar: {this.props.sugar}</li>
              </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <p className = "footer">Click Outside Popup To Close</p>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }


export default PopUp

