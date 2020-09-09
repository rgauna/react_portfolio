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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="hobbies-right-col" col={8}>
          <div class="layer">
            </div>
            <h2>Hobbies</h2>
              <Skills
                skill="javascript"
                progress={20}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={20}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={20}
                    />
                    <Skills
                      skill="React"
                      progress={20}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;