import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>

            <h2 style={{paddingTop: '2em'}}>Hello! :)</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I'm Rudy! I live in San Antonio, TX. I am currently styding to become a full-stack web developer. My goal is to see how I can currently integrate this new skillset into my current line of work. Thank you for visiting! :)</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="hobbies-right-col" col={8}>
          <div class="layer">
            </div>
            <h2>Hobbies</h2>
              <Skills
                skill="running"
                progress={85}
                />
                <Skills
                  skill="music production"
                  progress={35}
                  />
                  <Skills
                    skill="video games"
                    progress={45}
                    />
                    <Skills
                      skill="web development"
                      progress={35}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;