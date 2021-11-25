# CSS Crash Course For Absolute Beginners

Here are two  import parts: 
  - Basic CSS Styling
  - Positioning

### Basic CSS Styling
  - Colors In CSS
  - Web Safe Fonts
  - Box Model


### Positioning
  - Positioning In CSS

## Lecture Notes

**Basic CSS Styling**-1.Colors In CSS

![Basic CSS Styling-1.Colors In CSS](https://github.com/HappyYYT/put-advice-into-practice/blob/main/01.Become%20a%20Foundational%20Frontend%20Developer/01.HTML%26CSS/02.CSS%20Crash%20Course%20For%20Absolute%20Beginners/img/01.ColorsInCSS.png)

**Basic CSS Styling**-2.Web Safe Fonts

![Basic CSS Styling-2.Web Safe Fonts](https://github.com/HappyYYT/put-advice-into-practice/blob/main/01.Become%20a%20Foundational%20Frontend%20Developer/01.HTML%26CSS/02.CSS%20Crash%20Course%20For%20Absolute%20Beginners/img/02.WebSafeFonts.png)

**Basic CSS Styling**-3.Box Model

![Basic CSS Styling-3.Box Model](https://github.com/HappyYYT/put-advice-into-practice/blob/main/01.Become%20a%20Foundational%20Frontend%20Developer/01.HTML%26CSS/02.CSS%20Crash%20Course%20For%20Absolute%20Beginners/img/03.BoxModel.png)

**Positioning**-1.Positioning In CSS

![Positioning-1.Positioning In CSS](https://github.com/HappyYYT/put-advice-into-practice/blob/main/01.Become%20a%20Foundational%20Frontend%20Developer/01.HTML%26CSS/02.CSS%20Crash%20Course%20For%20Absolute%20Beginners/img/04.PositioningInCSS.png)


| Position's Values | Explain | Supports|
|:--: |:--:|:--:|
| static | default value, the element will stick to the normal page flow. So if there is a left/right/top/bottom/z-index set then there will be no effect on that element. | Chrome√, Firefox√, IE√, Edge√, Safari√ |
| relative | remains in the flow of the document, just like the static value. But now left/right/top/bottom/z-index will work. If parent element's position is static, relative is relative to the browser window, beyond that relative positioned elements are always relative to the parent element | same as above|
| absolute | removed from the flow of the document, just like the relative value. | same as above |
| fixed | removed from the flow of the document.Fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by scrolling.| same as above |
| inherit | the position value doesn’t cascade, so this can be used to specifically force it to, and inherit the positioning value from its parent. | same as above |
| sticky | the element is treated like a static value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick. such as [codepen: sticky-example](https://codepen.io/geoffgraham/pen/ybVzeX) | Chrome√, Firefox√, IE×, Edge√, Safari√ |


[WebSite: css-tricks:position](https://css-tricks.com/almanac/properties/p/position/)
