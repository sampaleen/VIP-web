import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Vip_logo from '../../assets/Vip_logo.png';
import Primary, {Secondary} from '../../Theme';

import { Link } from 'react-router-dom';

const style = {
  card: {
    paddingBottom: "10px",
    margin: "10px"
  },
  cardMedia:{
    height: "100px",
  },
  title: {
    textAlign : 'left',
    fontSize: '1.3em',
    marginBottom: "10px",
    overflow: "hidden",
    textOverflow:"ellipsis",
    textDecoration: "underline dotted",
    color: Secondary
  },
  subtitle: {
    textAlign : 'left',
    fontSize: '1.2em',
    height: "50px",
    overflow: "hidden",
    textOverflow:"ellipsis",
  },
  cardText: {
    overflow: "hidden",
    textAlign:"right",
    textOverflow: "ellipsis",
    height: "140px"
  }
  
}

class ProjectCard extends Component {
    constructor(props) {
      super(props);
      
    }
    render () {
      return (
        <MuiThemeProvider>
          <div className="col-md-12" style={{marginBottom:"10px"}}>
          <Card style={style.card} zDepth={0}>
            <Link to={`projects/${this.props.fbkey}`}>
              <CardHeader
                title={this.props.project.teamName}
                subtitle={this.props.project.projectDescription}
                actAsExpander={false}
                showExpandableButton={false}
                titleStyle = {style.title}
                subtitleStyle = {style.subtitle}
              />
            </Link>
            {/* <CardMedia>
              {this.props.project.logo
              ?<img src={this.props.project.logo} alt="" style = {style.cardMedia}/>
              :<img src={Vip_logo} alt="" style = {style.cardMedia}/>
              }
            </CardMedia> */}
              {/* <CardText expandable={false} style={style.cardText}>
              {this.props.project.logo
                ?<img src={this.props.project.logo} alt="" style = {style.cardMedia}/>
                :<img src={Vip_logo} alt="" style = {style.cardMedia}/>
                }
              </CardText> */}
              {/* <CardActions>
                <Link to={`projects/${this.props.fbkey}`}><FlatButton label="Learn more" /></Link>                
              </CardActions> */}
          </Card>
          </div>
        </MuiThemeProvider>
      )
    }
}

export default ProjectCard;