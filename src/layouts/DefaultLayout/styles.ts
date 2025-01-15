
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 6.5rem);
  padding: 2rem 10rem;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
`

