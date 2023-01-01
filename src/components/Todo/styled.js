import styled from "styled-components"

export const TodoWrapper = styled.li`
color: ${props => props.completed ? 'red' : 'black'};
text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

export const IsCompletedCheck = styled.input.attrs({ type: 'checkbox' })`
  height: 63px;
  left:920px;
  top:18px;
  margin-left: 10px;
  position: sticky;
  width: 30px;
`