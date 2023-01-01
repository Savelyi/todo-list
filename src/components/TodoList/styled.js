import styled from "styled-components"

export const TodosListWrapper=styled.ul`
position:relative;
right:-5px;
max-height:350px;
width:990px;
overflow-x: auto;
&::-webkit-scrollbar{
  width: 7px;
  background-color: #f9f9fd;
}
&::-webkit-scrollbar-thumb {
    background-color: #223c50;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: lightblue;
}
`