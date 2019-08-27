import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingStars from './RatingStars';

const StyledMiniImage = styled.img`
  height: 80px;
  padding-right: 16px;
`;
StyledMiniImage.displayName = 'StyledMiniImage';

const MiniPlaceDiv = styled.div`
  transform: ${(props) => (props.expanded ? 'translateY(0px)' : 'translateY(620.5px)')};
  transition: all ease 0.3s;
  background: white;
  position: absolute;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  width: 568px;
  height: ${(props) => (props.expanded ? '100%' : '128px')};
  padding: 24px 32px;
  margin-top: -32px;
  margin-left: -32px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 20px 20px;
  overflow-y: ${(props) => (props.expanded ? 'scroll' : 'hidden')};
  overflow-x: 'hidden';
  font-family: Nunito Sans, san-serff;
  font-weight: 700;
  font-size: 1em;
  color: rgb(72, 72, 72);
`;
MiniPlaceDiv.displayName = 'MiniPlaceDiv';

const DescriptionDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
DescriptionDiv.displayName = 'DescriptionDiv';

const About = styled.div`
  height: 100%;
  font-weight: 500;
`;
About.displayName = 'About';

const MiniPlaceButton = styled.button`
  box-sizing: content-box;
  padding: 24px 32px;
  margin-left: -32px;
  margin-top: -24px;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  border: 0;
  background: white;
  font-family: Nunito Sans, san-serff;
  font-weight: 700;
  font-size: 1em;
  color: rgb(72, 72, 72);
`;
MiniPlaceButton.displayName = 'MiniPlaceButton';

const CollaspArrow = styled.svg`
  height: 14px; 
  width: 14px; 
  display: block; 
  fill: black;
`;
CollaspArrow.displayName = 'CollaspArrow';

const ArrowDiv = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  margin-bottom: 24px;
`;
ArrowDiv.displayName = 'ArrowDiv';

const ImageDescriptionWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
ImageDescriptionWrapper.displayName = 'ImageDescriptionWrapper';

const MiniTitle = styled.div`

`;
MiniTitle.displayName = 'MiniTitle';

const MiniLocation = styled.div`
  font-size: .9em;
  font-weight: 500;
`;
MiniLocation.displayName = 'MiniLocation';

const MiniReviews = styled.div`

  font-weight: 700;
  font-size: .85em;
`;
MiniReviews.displayName = 'MiniReviews';

const AboutHeader = styled.div`
  padding: 15px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: Nunito Sans, san-serff;
  font-weight: 700;
  font-size: 1em;
`;
AboutHeader.displayName = 'AboutHeader';


const AboutText = styled.div`
  padding-bottom: 15px;
`;
AboutText.displayName = 'AboutText';

const MiniPlace = (props) => {
  const { place, expanded, toggleExpanded } = props;
  const percent = `${(place.averageReview / 5) * 100}%`;
  let buttonNode;

  return (
    <MiniPlaceDiv expanded={expanded}>
      <MiniPlaceButton
        onClick={() => { toggleExpanded(); buttonNode.blur(); }}
        ref={(buttonDOM) => { buttonNode = buttonDOM; }}
      >
        <ArrowDiv expanded={expanded}>
          <CollaspArrow viewBox="0 0 18 18" focusable="false">
            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
          </CollaspArrow>
        </ArrowDiv>
        <ImageDescriptionWrapper>
          <StyledMiniImage src={place.url} alt="" />
          <DescriptionDiv>
            <MiniTitle>
              {place.title}
            </MiniTitle>
            <MiniLocation>
              {`${place.city}, ${place.state}, ${place.country}`}
            </MiniLocation>
            <MiniReviews>
              <RatingStars size="1.2em" percent={percent} />
              {` ${place.totalReviews} reviews`}
            </MiniReviews>
          </DescriptionDiv>
        </ImageDescriptionWrapper>
      </MiniPlaceButton>
      <About>
        <AboutHeader>
          About this listing
        </AboutHeader>
        <AboutText>
          {place.about}
        </AboutText>
        <AboutHeader>
          The space
        </AboutHeader>
        <AboutText>
          {place.theSpace}
        </AboutText>
        <AboutHeader>
          Neighborhood
        </AboutHeader>
        <AboutText>
          {place.neighborhood}
        </AboutText>
      </About>
    </MiniPlaceDiv>
  );
};

MiniPlace.propTypes = {
  place: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    about: PropTypes.string,
    theSpace: PropTypes.string,
    neighborhood: PropTypes.string,
    averageReview: PropTypes.number,
    totalReviews: PropTypes.number,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
};

export default MiniPlace;
