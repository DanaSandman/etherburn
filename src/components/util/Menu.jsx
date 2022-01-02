import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  padding-top: 6rem;
  background: rgb(255 255 255 / 92%);
  backdrop-filter: blur(7px);
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
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
    color: rgb(36, 36, 36);
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: rgb(255, 0, 174);
    }
  }
  div {
    position: absolute;
    width: 100%;
    padding-bottom: 20%;
    bottom: 0;
  }
`
const StyledMenuIcons = styled.div`
  display: inline;
  text-align: center;
  bottom: 0;
  a {
    font-size: 2rem;
    padding: 1rem 1rem;
  }
`
export const BASE_ETHERBURN_APP_URL = 'http://localhost:3000/';
// export const BASE_UNITS_APP_URL = 'https://app.units.finance';
export const DOCUMENTATION_URL = 'https://unitsprotocol.gitbook.io/unitsprotocol';

export const PRIMARY_ITEM = 'primary';
export const SUB_ITEMS = 'sub';
export const ICON_ITEMS = 'icon';

export const MENU_ITEMS = [
    {
        title: 'Home',
        type: PRIMARY_ITEM,
        path: `${BASE_ETHERBURN_APP_URL}/#/`,
    }, {
        title: 'Collection',
        type: PRIMARY_ITEM,
        path: `${BASE_ETHERBURN_APP_URL}/#/collection`,
    },{
        type: ICON_ITEMS,
        children: [
            {
                icon: <i className="fa fa-twitter"/>,
                path: 'https://twitter.com/units_protocol'
            },
            {
                icon: <i className="fa fa-telegram"/>,
                path: 'https://t.me/joinchat/rTmvLN5Egqo0Nzhk'
            },
            {
                icon: <i className="fa fa-medium"/>,
                path: 'https://medium.com/@UNITSDAO'
            },
            {
                icon: <i className="fa fa-github"/>,
                path: 'https://github.com/Units-DAO'
            }
        ]
    }

]
const Menu = ({open, setOpen}) => {
    const renderMenuItem = (item, index) => {
        switch (item.type) {
            case PRIMARY_ITEM:
                return (
                    <a id={index}
                       href={item.path}>
                        {item.title}
                    </a>
                );
            case ICON_ITEMS:
                return (
                    <StyledMenuIcons open={open}>
                        {item.children.map(child => (
                            <a id={index}
                               href={child.path}>
                                {child.icon}
                            </a>
                        ))}
                    </StyledMenuIcons>
                );
        }
    }

    return (
        <StyledMenu onClick={() => setOpen(!open)} open={open}>
            {MENU_ITEMS.map(renderMenuItem)}
        </StyledMenu>
    )
}

export default Menu;
