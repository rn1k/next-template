import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import SampleComponent from '../components/SampleComponent/SampleComponent';
import SampleContainer from '../containers/SampleContainer/SampleContainer';

interface ISampleProps {
    id?: string;
}

const Sample = styled.div`
    font-size: 3em;
    color: #cccccc;
`;

const SamplePage: React.SFC<ISampleProps> = (
    props: ISampleProps,
): JSX.Element => {
    return (
        <div className="SamplePage">
            <Sample>This is sample page</Sample>
            <SampleComponent
                id="hoge"
                name="sample"
                value="samplevalue"
                label="sampleCheckbox"
            />
            <SampleContainer />
            <Link href="/" as="/">
                <a>topへのリンク</a>
            </Link>
        </div>
    );
};

export default SamplePage;
