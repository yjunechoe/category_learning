window.PennController._AddElementType("ImageGrid", function(PennEngine) {

    var selection = [];

    this.immediate = function(id, imageString){
        if (imageString===undefined) {
            imageString = id;
        }
        this.id = id;
        // image properties
        this.imageArray = typeof imageString == "string" ? imageString.split(' ') : imageString
        // console.log(this.imageArray)
        console.log(1 + 1)
        // preload images
        imageObj = new Image();
        this.imageArray.forEach(function(value) {
            imageObj.src = value
        })
    };

    this.uponCreation = function(resolve){
        // define grid
        var grid = $("<div>")
            .css({
                'justify-content' : 'center',
            })
        //
        // console.log(this.imageArray)
        // append images
        this.imageArray.forEach(function(value, index) {
            $(`<img class='image-cell' src='https://farm.pcibex.net/r/VMIMeV/${value}' width=100 height=100></img>`)
                .appendTo(grid)
                .css({
                    "border" : "3px solid grey",
                    "margin" : "10px"
                })
                .click(function() {
                    if ($(this).data('clicked')) {
                        // change display
                        $(this)
                            .css({
                                "border" : "3px solid grey",
                                "opacity" : 1

                            })
                            .data('clicked', false)
                        // update selection - if found, remove
                        var idx = selection.indexOf(value)
                        if (idx != -1) {
                            selection.splice(idx, 1)
                        }
                        // print
                        // console.log($(this).data('clicked'))
                        // console.log(selection)
                    } else {
                        // change display
                        $(this)
                            .css({
                                "border" : "3px solid red",
                                "opacity" : 0.5

                            })
                            .data("clicked", true)
                        // update selection - if not found, add
                        if (selection.indexOf(value) == -1) {
                            selection.push(value)
                        }
                        // print
                        // console.log($(this).data('clicked'))
                        // console.log(selection)
                    }
                })
        })
        //
        this.jQueryElement = grid;
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
			// console.log(selection)
			if (selection.length == 0) {
			    alert("Please make a selection.")
			}
            return selection.length > 0
        }
    };

});
