import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper className="section footer">
      <ul className="footer-icons">
        <Link
          to="https://www.facebook.com/stvincentbreweryltd"
          target="blank"
          className="footer-icon"
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://www.instagram.com/stvincentbreweryltd/"
          target="blank"
          className="footer-icon"
        >
          <FaInstagram />
        </Link>
        {/* <Link
          to="https://www.facebook.com/stvincentbreweryltd"
          target="blank"
          className="footer-icon"
        >
          <FaLinkedin />
        </Link> */}
      </ul>
      <div className="footer-text">
        <h5>
          copyright &copy; {new Date().getFullYear()}
          <span> St. Vincent Brewery Ltd. </span>
        </h5>
        <h5>All rights reserved.</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  height: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-1);
  text-align: center;

  .footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
    /* height: 3rem; */
  }

  .footer-icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
    color: var(--clr-white);
    transition: var(--transition);
  }

  .footer-icon:hover {
    color: #ffc720;
  }

  h5 {
    margin-bottom: 0;
    color: var(--clr-white);
    text-transform: capitalize;
    span {
      margin-bottom: 0;
      color: var(--clr-white);
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 776px) {
    flex-direction: column;
    .footer-icons {
      margin-bottom: 0;
    }
    .footer-text {
      display: flex;
      flex-direction: row;
      h5:nth-child(2) {
        padding-left: 5px;
      }
    }
  }
`;

export default Footer;
