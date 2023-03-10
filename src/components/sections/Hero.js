import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
// eslint-disable-next-line
import Image from '../elements/Image';
// eslint-disable-next-line
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // eslint-disable-next-line
  const [videoModalActive, setVideomodalactive] = useState(false);

  // eslint-disable-next-line
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  // eslint-disable-next-line
  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Himpunan Mahasiswa Teknik Informatika <span className="text-color-primary">Bina Darma</span>
            </h1>
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup> 
                  <Button tag="a" color="primary" wideMobile href="https://www.instagram.com/himtik_binadarma/">
                    View on Instagram
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          
          
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            > </a> */}
              <Image
                className="has-shadow"
                src={require('./../../assets/images/himtika.jpg')}
                alt="Hero"
                width={600}
                height={300} />
          </div>
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;