import * as React from 'react';

import styled from 'styled-components';

interface ISampleProps {
    id?: string;
    name?: string;
    value?: string;
    label?: string;
}

const Sample = styled.div`
    font-size: 2em;
    color: #ffaaff;
`;

const SampleComponent: React.SFC<ISampleProps> = (
    props: ISampleProps,
): JSX.Element => {
    return (
        <div className="SampleComponent">
            <input
                type="checkbox"
                id={props.id}
                name={props.name}
                value={props.value}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <Sample>This is SampleComponent</Sample>
        </div>
    );
};

export default SampleComponent;
