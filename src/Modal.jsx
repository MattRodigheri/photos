import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalArrowRight from './ModalArrowRight.jsx';
import ModalArrowLeft from './ModalArrowLeft.jsx';
import modal from './../public/modal.css';


  const Modal = (props) => {
    var showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className='close-button'>
            <p onClick={props.handleClose}>Close</p>
            <img onClick={props.handleClose} src='https://s3-us-west-1.amazonaws.com/indistinctshoutingphotos/x.gif'/>
          </div>

        <div className='modal-image-container'>
          <ModalArrowLeft />
          <ModalArrowRight />
          <img className='modal-image' src={props.image} />
          <div className='bottom-bar'>
            <p className='browse'><FontAwesomeIcon icon="th-large" />&nbsp;&nbsp;Browse all</p>
            <p className='image-count'>12 of 298</p>
            <p className='share'><FontAwesomeIcon icon="share-square" />&nbsp;&nbsp;Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="flag" /></p>
          </div>
        </div>

        <div className='sidebar'>
          <div className='sidebar-main'>
            <div className='photographer-info'>
              <img className='avatar' src={props.info.avatar}></img>
              <p className='restaurant-name'>{props.info.name}</p>
              <p className='business-info'>From the business owner</p>
            </div>
            <p className='date'>August 15, 2018</p>
            <p className='was'>Was this photo ...?</p>
            <button className='helpful'><FontAwesomeIcon icon="arrow-up" />&nbsp;&nbsp;&nbsp;Helpful</button>
            <button className='helpful'><FontAwesomeIcon icon="arrow-down" />&nbsp;&nbsp;&nbsp;Not Helpful</button>

            <div className='delivery-takeout'>
              <p className='delivery-title'><FontAwesomeIcon icon="truck" />&nbsp;&nbsp;Order Delivery or Takeout</p>
              <input type="radio" defaultChecked/><span className='delivery'>Delivery</span>
              <input type="radio" /><span>Takeout</span>
              <p className='address'>Delivery Address</p>
              <input className='address-box' type='text' placeholder='1 Yelp St., San Francisco, CA 94105' />
              <button className='menu-button'>View Menu</button>
            </div>

          </div>
        </div>
        
      </section>
    </div>
  );
}


export default Modal;
