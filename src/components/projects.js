import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
       <div><h1>React Centric</h1>
       <h2>Projects Underway...</h2></div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>HTML/CSS Centric</h1></div>
        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Vanilla JS Centric</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>MongoDB Centric</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Vanilla JS</Tab>
          <Tab>MongoDB / MySQL</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;