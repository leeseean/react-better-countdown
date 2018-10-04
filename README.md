# react-better-countdown
react-better-countdown is a simple count down component using react.

## Installation

`npm install react-better-countdown --save`

## Usage

```javascript
import Countdown from 'react-better-countdown'

<Countdown count={1000} className="count-wrapper" style={{color: 'red'}} dayText="天" callback={() => {}} />

the "count" prop is the time count, unit is second
the "dayText" prop is the text nearby day,`dayText="天"` means `10天10:33:22`
the "callback" prop is the function, when count turns to zero, it executes
```

## Styles

react-better-countdown can be used with your own custom styles. 