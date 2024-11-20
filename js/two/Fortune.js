class Fortune {
    constructor({text, fortuneStyle}) {
        this.text = text;
        this.fortuneStyle = fortuneStyle

    }
}

class FortuneStyle{
    constructor({fontFamily = "Arial", fontSize = "16px", fontColor = "black", bgColor = "white"}) {
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.bgColor = bgColor
    }
}