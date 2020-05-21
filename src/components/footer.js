import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/konstantinmuenster?tab=repositories"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <span role="img" aria-label="emoji">👏</span> Visit on GitHub
    </a>
  </StyledFooter>
)

export default Footer
