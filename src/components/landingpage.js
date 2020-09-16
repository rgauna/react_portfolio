import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
            <br></br>
            <br></br>
            <br></br>
            <img
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12998749_10100439764931463_7377844075516507516_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=CZjgi5cTSQMAX8w1Kl1&_nc_ht=scontent-dfw5-1.xx&oh=59e91a240c2e70d9638c8cb1583363d2&oe=5F7FF15E"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Rudy Gauna</h1>
            <hr/>

          <p>HTML/CSS | MySQL | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rodolfo-rudy-gauna-41302312/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/rgauna" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;