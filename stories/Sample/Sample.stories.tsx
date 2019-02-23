import * as React from 'react';

import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

const StyledCaption = styled.h1`
    margin: 0 0 12px 0;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.4;
    background-color: #cccccc;
`;

storiesOf('StyledComponent', module)
    .add('with text', () => (
        <StyledCaption>Hello Styled-Component</StyledCaption>
    ))
    .add('with some emoji', () => (
        <StyledCaption>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </StyledCaption>
    ));
