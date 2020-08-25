import React, {useState, useEffect} from 'react';
import moment from 'moment'

const GetRebaseDisplay = (props) => {
  const diffTime = props.tob_nextRebaseDate.toDate() - new Date()
  const duration = moment.duration(diffTime)

  // :: move this into its own top level componennt. pass props
  console.log('tob_nextRebaseDate', props.tob_nextRebaseDate)
  console.log('tob_lastExchangeRate', props.tob_lastExchangeRate)
  console.log('tob_canRebase', props.tob_canRebase)
  if(!props.tob_canRebase) {
      return (
          <div className='targetRebase'>
            <p className='infoRebase'>Next Possible Rebase: {props.tob_nextRebaseDate.toDate().toString()} </p>
            <p className='infoRebase'>Time Now: {new Date().toString()} </p>
            <p className='infoRebase'>Hours Until Next Possible Rebase: {duration.hours()} </p>
            <p className='infoRebase'>Minutes Until Next Possible Rebase: {duration.minutes()} </p>
            <p className='infoRebase'>Seconds Until Next Possible Rebase: {duration.seconds()} </p>
            <p className='infoRebase'>Or price needs to reach: {props.tob_lastExchangeRate}</p>
          </div>
      )
  }
  else {
      return (
        <div className='innerPriceDiv'>
            <p className='priceP'>Rebase can be called.</p>
        </div>
      )
  }
};

const Timer = (props) => {
  const [seconds, setSeconds] = useState((new Date().getTime()));
  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        // :: removed seconds => since it can reference the one set in state on line 4
        setSeconds(seconds - 1);
      }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  // :: All components need to have a parent. you cant have many siblings on the render root else react would prob throw an error. you can use fragments <></> or if importing Fragment <Fragment></Fragment>
  return(
    <>
      <GetRebaseDisplay
        // :: is tob_canRebase being passed into timer?
        tob_canRebase={props.tob_canRebase}
        tob_lastExchangeRate={props.tob_lastExchangeRate}
        tob_nextRebaseDate={props.tob_nextRebaseDate}
      />
    </>
  )
}

export default Timer