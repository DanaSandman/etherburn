import styled from "styled-components";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion/dist/es/index";
import { useLocation } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  padding-top: 6rem;
  background: #1d1d1de3;
  backdrop-filter: blur(7px);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: bold;
    color: #fcfcfc;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #d502c1;
    }
  }
  div {
    position: absolute;
    width: 100%;
    padding-bottom: 20%;
    bottom: 0;
  }
`;
const StyledMenuIcons = styled.div`
  display: inline;
  text-align: center;
  bottom: 0;
  a {
    font-size: 2rem;
    padding: 1rem 1rem;
  }
`;
export const BASE_ETHERBURN_APP_URL = "http://localhost:3000/";
// export const BASE_UNITS_APP_URL = 'https://app.units.finance';
export const DOCUMENTATION_URL =
  "https://unitsprotocol.gitbook.io/unitsprotocol";

export const PRIMARY_ITEM = "primary";
export const SUB_ITEMS = "sub";
export const ICON_ITEMS = "icon";
export const MENU_ITEMS = [
  {
    title: "About",
    type: PRIMARY_ITEM,
    // path: `${BASE_ETHERBURN_APP_URL}/#/`,
    path: "/",
  },
  {
    title: "Collection",
    type: PRIMARY_ITEM,
    // path: `${BASE_ETHERBURN_APP_URL}/#/collection`,
    path: "/collection",
  },
  {
    title: "Roadmap",
    type: PRIMARY_ITEM,
    // path: `${BASE_ETHERBURN_APP_URL}/#/`,
    path: "/",
  },
  {
    title: "Team",
    type: PRIMARY_ITEM,
    // path: `${BASE_ETHERBURN_APP_URL}/#/`,
    path: "/",
  },
  {
    type: ICON_ITEMS,
    children: [
      {
        icon: <i className="fa fa-twitter" />,
        path: "https://twitter.com/units_protocol",
      },
      {
        icon: <i className="fa fa-instagram" />,
        path: "https://t.me/joinchat/rTmvLN5Egqo0Nzhk",
      },
      {
        icon: <FontAwesomeIcon icon={faDiscord} />,
        path: "https://github.com/Units-DAO",
      },
    ],
  },
];
const Menu = ({ open, setOpen }) => {
  
  const { pathname } = useLocation();

  const move = (item) => {
    console.log('pathname',pathname);
      // ev.preventDefault();
    switch (item.title) {
      case "About":
        return scroller.scrollTo("hero-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Roadmap":
          return scroller.scrollTo("road-map-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Team":
        return scroller.scrollTo("team-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Collection":
        return scroller.scrollTo("filter-collection", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      default:
        return scroller.scrollTo("hero-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    }
  };
  const renderMenuItem = (item, index) => {
    switch (item.type) {
      case PRIMARY_ITEM:
        return (
          <Link id={index} to={item.path}  onClick={() => move(item)}>
            {item.title}
          </Link>
        );
      case ICON_ITEMS:
        return (
          <StyledMenuIcons open={open}>
            {item.children.map((child) => (
              <a id={index} href={child.path}>
                {child.icon}
              </a>
            ))}
          </StyledMenuIcons>
        );
    }
  };

  return (
    <StyledMenu onClick={() => setOpen(!open)} open={open}>
      {open && (
        <>
          <motion.div
            className="flex column"
            animate={{ opacity: [0, 1], y: [100, 100, 0] }}
            transition={{ ease: "easeOut", delay: 0.5 }}
          >
            {MENU_ITEMS.map(renderMenuItem)}
          </motion.div>
        </>
      )}
    </StyledMenu>
  );
};

export default Menu;
