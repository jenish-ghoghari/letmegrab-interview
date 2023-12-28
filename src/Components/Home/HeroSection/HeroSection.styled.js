import styled from "styled-components";

export const StyledBannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 1.25s;
`;

export const StyledBannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: relative;
  padding: 100px 0 200px;
`;

export const StyledContentWrapper = styled.div`
  max-width: 60%;
  width: 100%;
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  margin: ${({ mb }) => `0 0 ${mb || 0}px 0`};

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }

  .bannerSlider {
    .slick-slide div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .slick-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: hidden;
      width: 100%;
    }
    .slick-dots {
      display: flex !important;
      padding-top: 20px;
      gap: 8px;
      align-items: center;
      justify-content: center;
      bottom: 15px;
      li {
        margin: 0;
        width: 7px;
        height: 7px;
        button {
          width: auto;
          height: 7px;
          padding: 0;
        }
      }
      li.slick-active button::before,
      li.slick-active {
        width: 27px;
        transition: 0.3s;
        opacity: 1;
      }
      li button:before {
        content: "";
        transition: 0.3s;
        width: 8px;
        height: 8px;
        border-radius: 7px;
        background-color: black;
        opacity: 0.5;
      }
    }

    .slick-track {
      display: flex;
      width: 352px;
    }
  }

  @media screen and (max-width: 600px){
    img {
    height: 35vh;
  }
  }
`;
