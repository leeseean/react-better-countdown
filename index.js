import React from 'react';

class Countdown extends React.Component {
    state = {
        count: this.props.count
    }
    timer = null
    tick = () => {
        let count = this.state.count;
        if (typeof count !== 'number' || count <= 0) {
            throw new Error(`prop 'count' must be positive integer`);
        }
        this.timer = setInterval(() => {
            if (count <= 0) {
                clearInterval(this.timer);
                if (typeof this.props.callback === 'function') {
                    this.props.callback();
                }
                return;
            }
            count--;
            this.setState({ count });
        }, 1000);
    }
    componentDidMount() {
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { style, className, dayText = '天' } = this.props;
        const d = Math.floor(this.state.count / 60 / 60 / 24);
        let h = Math.floor(this.state.count / 60 / 60 - d * 24);
        h = `0${h}`.slice(-2);
        let m = Math.floor(this.state.count / 60 - h * 60 - d * 24 * 60);
        m = `0${m}`.slice(-2);
        let s = this.state.count - d * 24 * 60 * 60 - h * 60 * 60 - m * 60;
        s = `0${s}`.slice(-2);
        return (
            <span className={`count-down-wrapper ${className}`} style={style}>
                <i className="count-down-day">
                    {d}
                    <em className="count-down-day-text">{d > 0 ? dayText : null}</em>
                </i>
                <i className="count-down-hours">{h}</i>
                <i className="count-down-symbol">:</i>
                <i className="count-down-minutes">{m}</i>
                <i className="count-down-symbol">:</i>
                <i className="count-down-seconds">{s}</i>
            </span>
        );
    }
}

export default Countdown;