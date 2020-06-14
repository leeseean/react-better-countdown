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
|dayText|string `|` ReactNode|'day'|the text nearby day,`dayText="天"` means `10天10:33:22`
|hourText|string `|` ReactNode|':'|the text nearby day,`hourText="时"` means `10天10时33:22`
|minuteText|string `|` ReactNode|':'|the text nearby day,`minuteText="分"` means `10天10时33分22`
|secondText|string `|` ReactNode|''|the text nearby day,`secondText="秒"` means `10天10时33分22秒`
|callback|function|()=>{}|when count turns to zero, callback executes
|className|string|''|the class of the wrapper element
|style|object|{}|custom style on the wrapper element
## Styles

react-better-countdown can be used with your own custom styles. 