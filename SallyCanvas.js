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
          .attr("id", "PennController-canvas")
        //
        // append images
        const sally = canvas.append("img")
          .attr("id", "PennController-sally")
          .attr("src", "https://i.imgur.com/p1FGkQt.png")
        //
        const speechBubble = canvas.append("div")
          .attr("id", "PennController-speech-bubble")
        //
        const speechText = speechBubble.append("p")
          .attr("id", "PennController-speech-text")
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
