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
          .style("margin", "0 0 2rem 0")
          .style("width", "1000px")
          .style("height", "550px")
          .style("background-color", "ghostwhite")
          .style("border", "3px solid black")
        //
        // append images
        const sally = canvas.append("img")
          .attr("id", "sally")
          .attr("src", "https://i.imgur.com/p1FGkQt.png")
          .style("position", "absolute")
          .style("margin", "auto")
          .style("top", "305px")
          .style("left", "0px")
          .style("right", "0px")
          .style("height", "250px")
        //
        const speechBubble = canvas.append("div")
          .attr("id", "speech-bubble")
          .style("position", "absolute")
          .style("margin", "auto")
          .style("left", "0px")
          .style("right", "0px")
          .style("top", "25%")
          .style("width", "40%")
          .style("height", "20%")
          .style("border-radius", "1rem")
          .style("border", "2px solid #6ea6d5")
          .style("background-color", "#bde0ff")
        //
        const speechBubbleText = speechBubble.append("p")
          .attr("id", "speech")
          .style("font-size", "20px")
          .style("line-height", "150%")
          .style("margin", "0px")
          .style("padding", "1rem")
          .style("font-family", "Verdana")
        //
        this.jQueryElement = $(canvas.node());
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
