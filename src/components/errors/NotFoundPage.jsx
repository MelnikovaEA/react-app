import React from 'react';
import styled from "styled-components";

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1b45d;
`

const NotFoundImg = styled.img`
  width: 380px;
  height: 380px;
`

const NotFoundPage = () => {
    return (
        <NotFoundDiv>

            <NotFoundImg src="/images/not-found-icon.svg"/>
            <h1>Ничего не найдено</h1>

        </NotFoundDiv>
    );
};

export default NotFoundPage;