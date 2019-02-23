import IState from 'IState';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import {
    add,
    decrement,
    increment,
    ISampleActionPayload,
} from '../../actions/Sample';

import styled from 'styled-components';

interface IStateProps {
    count: number;
}

interface IDispatchProps {
    add: (amount: number) => void;
    decrement: () => void;
    increment: () => void;
}

export interface ISampleProps {
    count: number;
    add?: (amount: number) => void;
    decrement?: () => void;
    increment?: () => void;
}

const Sample = styled.div`
    font-size: 2em;
    background-color: #dddddd;
`;

export const SampleContainer: React.SFC<ISampleProps> = ({
    count = 0,
    // add = () => {},
    increment = () => {},
    // decrement = () => {},
}): JSX.Element => {
    return (
        <div className="SampleContainer">
            <p id="test" onClick={() => increment()}>
                clickCount: {count}
            </p>
            <Sample>This is Sample Container</Sample>
            <Link href="/" as="/">
                <a>topへのリンク</a>
            </Link>
        </div>
    );
};

const mapStateToProps = (state: IState): IStateProps => {
    return {
        count: state.sampleState.sample,
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<Action<ISampleActionPayload>>,
): IDispatchProps =>
    bindActionCreators(
        {
            decrement,
            increment,
            add: (amount: number) => add({ amount }),
        },
        dispatch,
    );

export default connect<IStateProps, IDispatchProps, ISampleProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SampleContainer);
