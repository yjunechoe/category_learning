window.PennController._AddElementType("ImageGrid", function(PennEngine) {

    var selection = new Set()

    this.immediate = function(id, imageString){
        if (imageString===undefined) {
          console.error("Must supply argument imageString to ImageGrid")
        }
        this.id = id;
        // image properties
        this.imageArray = typeof imageString == "string" ? JSON.parse(imageString) : imageString
        console.log(this.imageArray)
        // preload images
        let imageObj
        this.imageArray.forEach(function(value) {
          imageObj = new Image();
          imageObj.src = value;
        })
    };

    this.uponCreation = function(resolve){
        // define grid
        const grid = d3.create("div")
          .attr("id", "grid")
          .style("display", "grid")
          .style("justify-content", "center")
          .style("grid-template-columns", "repeat(4, 150px)")
          .style("grid-template-rows", "repeat(5, 150px)")
          .style("column-gap", "15px")
          .style("row-gap", "15px")
        // append images
        const cells = grid.selectAll(".cell")
          .data(new Array (20))
          .join("div")
            .classed("cell", true)
            .attr("img-index", (d, i) => i)
            .style("position", "relative")
            .on("click", function() {
              if (this.classList.contains("selected")) {
                d3.select(this)
                  .classed("selected", false)
                  .style("outine", "none")
                  .style("opacity", 1)
                selection.delete(this.getAttribute("img-index"))
              } else {
                d3.select(this)
                  .classed("selected", true)
                  .style("outline", "3px solid forestgreen")
                  .style("opacity", 0.5)
                selection.add(this.getAttribute("img-index"))
              }
            })
            .append("img")
              .style("max-width", "95%")
              .style("max-height", "95%")
              .style("position", "absolute")
              .style("left", "0px")
              .style("right", "0px")
              .style("top", "0px")
              .style("bottom", "0px")
              .style("margin", "auto")
        //
        this.jQueryElement = $(grid.node());
        resolve();
    };

    this.end = function(){
        // log
        if (this.log){
            PennEngine.controllers.running.save(this.type, this.id, "Selections", selection.join(' '), this.printTime, "NULL")
        }
    };

    this.test = {
        // test for any
        selectAny: function() {
			console.log(selection)
			if (selection.length === 0) {
			    alert("Please make a selection.")
			}
            return selection.length > 0
        }
    };

});
