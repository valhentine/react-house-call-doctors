import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Image,
  Divider,
  Modal,
} from 'semantic-ui-react';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import ContactField from '../coolStuffWorking/ContactField';
// import MarkWithFemale2 from '../../images/MarkWithFemale2.jpg';
import profiles from '../ProfileInfo';


const InfoBtn = Styled.button`
  background-color: white;
  border: none;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
    cursor: pointer;
  }
`


class ContactUs extends Component {

  componentDidMount() {
    document.title='Contact Us'
  }

  render() {

    return(
      <>
        <h1 className='pageTitleReader' aria-label="Contact Us page">Contact Us</h1>
        <Image id='image-divider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='mainContainerContactUs'>
          <div id='mapInfoContactUs'>
            <div className='phoneInfo infoContactUs'>
              <i className='phone square big icon color'></i>
              <p>Office Phone: <b>(801) 485-5055</b></p>
            </div>
            <div className='faxInfo infoContactUs'>
              <i className='fax big icon color'></i>
              <p>Fax: <b>(801) 467-3296</b> or <b>(801) 363-1309</b></p>
            </div>
            <iframe title="House Call Doctors' location" id="gmap_canvas" src="https://maps.google.com/maps?q=house%20call%20doctors%20utah&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            <div id='contactFieldPlacement'>
              <ContactField />
            </div>
            {/* <img src={MarkWithFemale2} alt="Mark with client"></img> */}
          </div>
          <Divider />
          <div alt="list of providers and more info on each" id='profileContainerContactUs'>
            {profiles.map(profile => {
              return(
                <div id='contactUsProfile'>
                  <Image src={profile.profileImage} alt={`Profile of ${profile.shortName}`} size='tiny' />
                  <div id='contactUsContact'>
                    <p id='contactUsNames'><br /><b>{profile.name}</b></p>
                    <div id='contactUsDividerProfile' />
                    <Modal id='modalContainer' alt="More info about provider" trigger={<InfoBtn id='contactUsInfoBtn'>More Info</InfoBtn>} closeIcon>
                      <Modal.Header>{profile.name}</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped src={profile.profileImage} size='small' />
                        <Modal.Description>
                          <div id='contactUsInsideInfo'>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Office MA: <b>{profile.info1}</b></p>
                              <p className='contactUsProviderInfo'>Phone: <b>{profile.info2}</b></p>
                              <p className='contactUsProviderInfo'>{profile.info3}</p>
                            </div>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Field MA: <b>{profile.info4}</b></p>
                              <p className='contactUsProviderInfo'>Phone: <b>{profile.info5}</b></p>
                              <p className='contactUsProviderInfo'>{profile.info6}</p>
                            </div>
                            <div className='modalGroup'>
                              <p className='contactUsProviderInfo'>Pager: <b>{profile.info7}</b></p>
                            </div>
                          </div>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
              )
            })}
          </div>

          <Divider />
          <h3>Instructions for paging your provider:</h3>
          <div id='contactUsSubText'>
            <p>House Call Doctors is dedicated to serving you, your family, and all of those involved in your care. We strive to provide the best medical care possible.<br />In order to ensure we are providing the highest quality of care, our providers are available 24/7 to their existing patients.</p>
            <p>Our providers are <b>always</b> available to their patients, families, nurses, and facility staff by pager.<br />In order to help ensure that you are receiving the highest quality of care:</p>
            <p className='directions'>Dial the pager number, it will ask for a numeric message.  Dial <b>your</b> phone number, then press pound and hang up.</p>
            <p className='directions'>Pagers do not accept voicemail or text messaging – Numeric pages only.</p>
            <p className='directions'>All of our providers generally return pages within 15 minutes to 1 hour. <b>If you do not hear back it is very important that you page again.</b>  Every page should always be returned—if it is not it means they didn’t get your whole phone number.</p>
            <p className='directions'><b>If you are paging from a facility,</b> please let your receptionist know that you are the person looking for our provider.  They only know they were paged, they don’t know who is looking for them.</p>
            <p className='directions'><b>Cell phones with touch screens</b> often send too many or too few numbers to the provider’s pager. To ensure paging accuracy we recommend paging from a land line, calling our office to have our staff page the provider to your number, or following the urgent paging instructions.</p>
            <p className='directions'><b>If Urgent: Page the provider and wait 5 minutes, page them again, wait 5 more minutes, and then page them a third time. This lets our providers know to stop what they are doing and call you urgently.  This also ensures that they get the correct phone number.</b></p>
            <p className='directions'>Please note: our providers are never bothered by being paged. They like to know what’s going on with their patients and are very involved in each patient’s care.</p>
          </div>
        </div>
        <div id='contactUsWhiteSpace'></div>
      </>
    )
  }
};




export default ContactUs;
