import React from 'react';
import '../css/ProgressBar.css'

const ProgressBar = (props) => {
  return (
    <div className='progress-bar'>
      <ProgressFiller percentage={props.percentage}/>
    </div>
  );
}

const ProgressFiller = (props) => {
  var fill = 'filler';
  if(props.percentage > 75){
    fill += ' warningFiller';
  }
  else if(props.percentage > 50){
    fill += ' cautionFiller';
  }
  else {
    fill += ' goodFiller';
  }
  return (
    <div className={`${fill}`}style={{ width: `${props.percentage}%` }}/>
  );
}

export default ProgressBar;