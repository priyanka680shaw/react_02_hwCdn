

const h1 = React.createElement("h1" , {} , "Topics Covered");

const p1 = React.createElement("p" , {} , "The following is list of all the topics covere in the MDN Learning area");

const a1 = React.createElement("a" , {href :"#"} , "Getting Strated with the web");

const p2 = React.createElement("p" , {} , "Provides a praticle introduction to web development for complete beginers.")

const a2 = React.createElement("a" , {href : "#"} , "HTML - Structuring the web")

const p3 = React.createElement("p" , {} , " HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.");

const a3 = React.createElement("a" , {href : "#"} , "CSS - Styling web");

const p4 = React.createElement("p" , {} , "CSS is the Language that we use to control our web content's style andd  layout , as awell asaddding behaviour like animation. This topic provides comprehensive coverage of  CSS");

const divStyle = {
    width : "50%",
    display : "flex",
    justifyCCoontent : "center",
    alignItem : "center",
    flexDirection : "column",
    backgroundColor : "#cccccc",
    padding : "25px",
    fontSizze : "25px",
    margin : "8% auto",
    
}
const MainComponent = React.createElement("div" , {style : divStyle} , [h1, p1 , a1 , p2 , a2 , p3 , a3 , p4])
ReactDOM.render(MainComponent, document.querySelector("#root"));