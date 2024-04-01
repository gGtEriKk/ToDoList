import styled from "styled-components";

import { FcCheckmark, FcEmptyTrash } from 'react-icons/fc'

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;
    min-width: 540px;

    ul {
        padding: 0;
        margin-top: 40px;
    }

    .inputDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`

export const Input = styled.input`
    border: 2px solid #D1D3D466;
    border-radius: 5px;
    height: 40px;
    margin-right: 20px;
    margin-left: 10px;
    padding-left: 5px;
    width: 70%;
`

export const Button = styled.button`
    background: #8052EC;
    height: 40px;
    width: 20%;
    border-radius: 5px;
    border: none;
    cursor: pointer;  
    font-size: 17px;
    font-weight: 900;
    text-align: center;
    color: #FFFFFF;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${props => props.$isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px 0px #00000033;
    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 20px;
    width: 500px;

    li {
        list-style: none;
    }
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const EmptyListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
`