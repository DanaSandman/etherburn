import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 33%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 1.7rem;
    height: 0.15rem;
    background: #fcfcfc;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      background: ${({open}) => open ? '#0a0b0d;' : '#fcfcfc;'};
    }
    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      background: ${({open}) => open ? '#0a0b0d;' : '#fcfcfc;'};
    }
  }
`

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

export default Burger;