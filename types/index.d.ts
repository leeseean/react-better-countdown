import * as React from 'react';

interface CountdownProps {
    count?: number;
    dayText?: string;
    callback?: Function;
    className?: string;
    style?: React.CSSProperties;
    rest?: any
}

interface CountdownState {
    count?: number;
}

declare module 'react-better-countdown' {
    export default class Countdown extends React.Component<CountdownProps, CountdownState> {
        state: CountdownState;
        timer: null | number;
        tick: () => void;
        componentDidMount(): void;
        componentDidUpdate(prevProps: CountdownProps): void;
        componentWillUnmount(): void;
        render: () => React.ReactElement;
    }
}