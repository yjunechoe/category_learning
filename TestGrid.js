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
        // for testing purposes
        const imgs = [
        	"https://i.imgur.com/p7l7tDK.jpeg",
          "https://i.imgur.com/uL96BT8.jpeg",
          "https://i.imgur.com/0MEBHyV.jpeg",
          "https://gardensforgoldens.files.wordpress.com/2012/09/jackson-9_12.jpg",
          "https://gardensforgoldens.files.wordpress.com/2013/06/ned-15-6_13.jpg",
          "https://2.bp.blogspot.com/-dSXmxJ24ywM/Vsd9rjo-goI/AAAAAAAAGwY/0AmJ2bMZPRo/s1600/P1020254%2Bcopy.JPG"
        ]
        // define grid
        const grid = d3.create("div")
          .attr("id", "PennController-grid")
        // append images
        const cells = grid.selectAll(".cell")
          .data(new Array (20))
          .join("div")
            .classed("PennController-cell", true)
            .attr("img-index", (d, i) => i)
            .on("click", function() {
              if (this.classList.contains("PennController-cell-selected")) {
                d3.select(this)
                  .classed("PennController-cell-selected", false)
                selection.delete(this.getAttribute("img-index"))
              } else {
                d3.select(this)
                  .classed("PennController-cell-selected", true)
                selection.add(this.getAttribute("img-index"))
              }
            })
            .append("img")
              .attr("src", (d, i) => imgs[i % imgs.length])
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
