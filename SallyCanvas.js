window.PennController._AddElementType("SallyCanvas", function(PennEngine) {

    this.immediate = function(id, imageString){
        if (imageString===undefined) {
            imageString = id;
        }
        this.id = id;
        // image properties
        this.imageArray = typeof imageString == "string" ? imageString.split(' ') : imageString
        console.log(this.imageArray)
        // preload images
        this.imageArray.forEach(function(value) {
            var imageObj = new Image();
            imageObj.src = value;
        })
    };

    this.uponCreation = function(resolve){
        // define grid
        const canvas = d3.create("div")
          .attr("id", "canvas")
          .style("position", "relative")
          .style("width", "900px")
          .style("height", "500px")
          .style("background-color", "ghostwhite")
          .style("border", "3px solid black")
        //
        // append images
        const sally = canvas.append("img")
          .attr("id", "sally")
          .attr("src", "https://i.imgur.com/p1FGkQt.png")
          .style("position", "absolute")
          .style("margin", "auto")
          .style("top", "200px")
          .style("left", "0px")
          .style("right", "0px")
          .style("height", "150px")
        //
        const speechBubble = canvas.append("div")
          .attr("id", "speech-bubble")
          .style("position", "absolute")
          .style("margin", "auto")
          .style("left", "0px")
          .style("right", "0px")
          .style("top", "15%")
          .style("width", "40%")
          .style("height", "20%")
          .style("border-radius", "1rem")
          .style("border", "2px solid #6ea6d5")
          .style("background-color", "#bde0ff")
        //
        const speechBubbleText = speechBubble.append("p")
          .attr("id", "speech")
          .style("line-height", "140%")
          .style("margin", "0px")
          .style("padding", "1rem")
          .style("font-family", "Verdana")
        //
        this.jQueryElement = canvas.node();
        resolve();
    };

    this.end = function(){
        // log
        if (this.log){
        }
    };

    this.test = {

    };

});
