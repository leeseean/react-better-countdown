# react-better-countdown
react-better-countdown is a simple count down component using react.

## Installation

`npm install react-better-countdown --save`

## Usage

```javascript
import Countdown from 'react-better-countdown'

<Countdown count={Date.now() + 1000} className="count-wrapper" style={{color: 'red'}} dayText="天" callback={() => {}} />
```

|Prop|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|count|number|Date.now()|the timestamp in the future, `Date.now()` is neccesarry, unit is milliseconds
|dayText|string|'day'|the text nearby day,`dayText="天"` means `10天10:33:22`
|callback|function|()=>{}|when count turns to zero, callback executes

## Styles

react-better-countdown can be used with your own custom styles. 