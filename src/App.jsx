/* eslint-disable react/prop-types */
import React from "react"
import { RiskSense } from './Experience.jsx'
import './App.css'

const Header = () => (
  <div className={'Dummy'}>
    <div className={'ElementWrapper'}>
      <div className={'Title'}>
          Scotty Efird
      </div>
      <hr />
      <div className={'Subtitle'}>
        <span>Scottyefird@gmail.com</span>
        <span>(910) 603-6186</span>
        <span>Albuquerque, NM</span>
      </div>
    </div>
  </div>
)

const ExperianceRow = ({experianceData}) => (
  <React.Fragment>
    <hr />
    {experianceData.map(row => (
      <div className='ExperianceRow' key={row}>{row}</div>
    ))}
  </React.Fragment>
)

const ExperienceContent = ({ job, updateButton, buttons }) => {
  const isButtonOpen  = buttons.find(x => x.title === job.title).isOpen
  return (
    <div className={'Dummy'}>
      <div className={'ExperienceContentWrapper'}>
        <div className={'button'}>
          <img
            src={`${window.location.origin}/images/icons/${isButtonOpen ? 'arrow-down' : 'arrow-right'}.png`}
            height={60}
            onClick={() => updateButton(job.title)}
            alt={job.title} />
        </div>
        <div className={'ExperienceWrapper'}>
          <a href={job.url} target='_blank' rel='noopener noreferrer' className={'ExperienceHeader'}>
            <img src={`${window.location.origin}/images/risksense.png`} height={100} alt={job.title} />
          </a>
          <div className={'ExperienceBody'}>
            <span>{job.jobTitle}</span>
            <span>{job.dateToFrom}</span>
          </div>
          {isButtonOpen && <ExperianceRow experianceData={job.experianceData} />}
        </div>
      </div>
    </div>
  )
}

class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.updateButton = this.updateButton.bind(this)
    this.state = {
      // Title is used as the button id.
      buttons: [
        { title: 'RiskSense', isOpen: false }
      ]
    }
  }

  //https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

  updateButton (title) {
    this.setState(prevState => ({
      buttons: prevState.buttons.map(
        button => title === button.title ? { ...button, isOpen: !prevState.buttons.find(x => x.title === title).isOpen } : button
      )
    }))
  }

  render() {
    return (
      <div className='AppBody'>
        <Header style={{paddingTop: 15}} />
        <ExperienceContent job={RiskSense} updateButton={this.updateButton} buttons={this.state.buttons} />
      </div>
    )
  }
}

export default AppBody
