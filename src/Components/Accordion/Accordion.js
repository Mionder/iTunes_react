import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import '../Song/song.css'; 
import './accordion.css';
import moment from 'moment';
import Song from '../Song/Song';
import SongDetail from '../SongDetails/SongDetail';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#ccdff0',
    
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      display: 'block'
    },
  body1: {
      width: '100%'
    }
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: '24px',
    display: 'block',
    
  },
}))(MuiExpansionPanelDetails);




export default function CustomizedExpansionPanels(props) {
  const {id,music} = props;
  const [expanded, setExpanded] = React.useState(`panel${id}`);

  const handleChange = panel => (event, newExpanded) => {
    console.log('panel' + [id]);
    setExpanded(newExpanded ? panel : false);
  };


 const renderSongs = (arr) =>{
    return arr.map((item,i) =>{

        const {artworkUrl100,artistName,trackName,collectionName,primaryGenreName,previewUrl} = item;
        const id = i;
        const {trackCount,collectionPrice,trackTimeMillis,trackPrice} = item;
        let sec = moment(trackTimeMillis).format('mm:ss');
        let bgcolor = i%2;
        return(
          <ExpansionPanel className="tits" key={id} square expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
          <ExpansionPanelSummary  aria-controls={`panel${id}-bh-content`}
                      id={`panel${id}-bh-header`}>
                   
            <Song 
            pictureWork = {artworkUrl100}
            artist = {artistName}
            track = {trackName}
            collection = {collectionName}
            genre = {primaryGenreName}
            id = {id}
            bgcolor = {bgcolor}
            />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SongDetail 
                artist = {artistName}
                track = {trackName}
                collection = {collectionName}
                id = {id}
                trackTime = {sec}
                trackCount = {trackCount}
                collectionPrice = {collectionPrice}
                trackPrice = {trackPrice}
                bgcolor = {bgcolor}
                previewUrl = {previewUrl}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
    })
 }
// console.log(props.music);
const item = renderSongs(music);
  return (    
          <div>
            {item}
          </div>
  );
}
