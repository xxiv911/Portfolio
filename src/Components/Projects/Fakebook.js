import React from 'react';
import './Fakebook.css';
import image from '../../media/images/Projects-Fakebook.gif'

class Project extends React.Component {
  linkClick(){
    window.location.href = 'https://github.com/IvanDerlich/Fakebook';
  }
  
  render(){
    return (
      <div className="container fakebook-container reverse" id={this.props.name}>  
        <div class="image-container fakebook-image">         
          <img src={image} alt="Space Shooter"></img>
        </div> 
        <div class="description fakebook-description" >
          <div class="title">Fakebook</div>
          <div class="text">An Rails built Social Network with basic functions from a real social network</div>
          <div class="tags">
            <div>Rails</div>
            <div>PostgresQL</div>
          </div>
          <div onClick={this.linkClick} class="link">
            See Project
          </div>
        </div>   
            
      </div>
    );
  }  
}

export default Project;