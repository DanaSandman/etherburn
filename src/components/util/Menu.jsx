import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(255, 255, 255);
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
    box-shadow:
   0 2.8px 2.2px rgba(0, 0, 0, 0.034),
   0 6.7px 5.3px rgba(0, 0, 0, 0.048),
   0 12.5px 10px rgba(0, 0, 0, 0.06),
   0 22.3px 17.9px rgba(0, 0, 0, 0.072),
   0 41.8px 33.4px rgba(0, 0, 0, 0.086),
   0 100px 80px rgba(0, 0, 0, 0.12);
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

export const BASE_UNITS_APP_URL = 'https://app.units.finance';
export const DOCUMENTATION_URL = 'https://unitsprotocol.gitbook.io/unitsprotocol';

export const PRIMARY_ITEM = 'primary';
export const SUB_ITEMS = 'sub';
export const ICON_ITEMS = 'icon';

export const MENU_ITEMS = [
    {
        title: 'Home',
        type: PRIMARY_ITEM,
        path: `${BASE_UNITS_APP_URL}/#/home`,
    }, {
        title: 'About Us',
        type: PRIMARY_ITEM,
        path: `${BASE_UNITS_APP_URL}/#/about`,
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

const Menu = ({open}) => {

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
        <StyledMenu open={open}>
            {MENU_ITEMS.map(renderMenuItem)}
        </StyledMenu>
    )
}

export default Menu;

































// import styled from "styled-components";

// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   justify-content: space-evenly;
//   background:rgb(255, 255, 255);
//   box-shadow:
//   0 2.8px 2.2px rgba(0, 0, 0, 0.034),
//   0 6.7px 5.3px rgba(0, 0, 0, 0.048),
//   0 12.5px 10px rgba(0, 0, 0, 0.06),
//   0 22.3px 17.9px rgba(0, 0, 0, 0.072),
//   0 41.8px 33.4px rgba(0, 0, 0, 0.086),
//   0 100px 80px rgba(0, 0, 0, 0.12);
//   transition-delay: 0.15s;
//   transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
//   height: 100vh;
//   width: 29%;
//   text-align: center;ß
//   position: absolute;
//   top: 0;
//   left: 0;

//   @media (max-width: 750px) {
//     transform: ${({open}) => open ? 'translateX(75vw)' : 'translateX(-100%)'};
//     width: 25%
//   }
//   @media (max-width: 576px) {
//     transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
//     width: 100%;
//   }
//   a {
//     font-size: 2rem;
//     font-weight: bold;
//     color: rgb(36, 36, 36);
//     text-decoration: none;
//     transition: color 0.3s linear;
//     @media (max-width: 1000px) {
//         font-size: 1.5rem;
//         text-align: center;
//       }
//     @media (max-width: 750px) {
//         font-size: 1.3rem;
//         text-align: center;
//     }
//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }
//     &:hover {
//       color: #f4188d;
//     }
//   }
//   div {
//     padding-bottom: 20%;
//     bottom: 0;
//   }
// `
// const StyledMenuIcons = styled.div`
//   display: inline;
//   text-align: center;
//   padding:25px;
//   bottom: 0;
//   a {
//     font-size: 2rem;
//     padding: 1rem 1rem;
//   }
// `
// export const BASE_APP_URL = 'http://localhost:3000/';
// // export const DOCUMENTATION_URL = 'https://unitsprotocol.gitbook.io/unitsprotocol';

// export const PRIMARY_ITEM = 'primary';
// export const SUB_ITEMS = 'sub';
// export const ICON_ITEMS = 'icon';

// export const MENU_ITEMS = [
//     {
//         title: 'Home',
//         type: PRIMARY_ITEM,
//         path: `${BASE_APP_URL}/#/home`,
//     }, {
//         title: 'About',
//         type: PRIMARY_ITEM,
//         path: `${BASE_APP_URL}/#/about`,
//     },
//     {
//         type: ICON_ITEMS,
//         children: [
//             {
//                 icon: <i className="fa fa-twitter"/>,
//                 path: 'https://twitter.com/units_protocol'
//             },
//             {
//                 icon: <i className="fa fa-telegram"/>,
//                 path: 'https://t.me/joinchat/rTmvLN5Egqo0Nzhk'
//             },
//             {
//                 icon: <i className="fa fa-medium"/>,
//                 path: 'https://medium.com/@UNITSDAO'
//             },
//             {
//                 icon: <i className="fa fa-github"/>,
//                 path: 'https://github.com/Units-DAO'
//             }
//         ]
//     }

// ];

// const Menu = ({open, setOpen}) => {
//     const renderMenuItem = (item, index) => {
//         switch (item.type) {
//             case PRIMARY_ITEM:
//                 return (
//                     <a id={index}
//                        href={item.path}>
//                         {item.title}
//                     </a>
//                 );
//             case ICON_ITEMS:
//                 return (
//                     <StyledMenuIcons open={open}>
//                         {item.children.map(child => (
//                             <a id={index}
//                                href={child.path}>
//                                 {child.icon}
//                             </a>
//                         ))}
//                     </StyledMenuIcons>
//                 );
//         }
//     }

//     return (
//         <StyledMenu open={open}  onClick={() => setOpen(!open)}>
//             {MENU_ITEMS.map(renderMenuItem)}
//         </StyledMenu>
//     )
// };

// export default Menu;
