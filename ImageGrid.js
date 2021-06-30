window.PennController._AddElementType("ImageGrid", function(PennEngine) {

    var selection = [];

    this.immediate = function(id, text){
        if (text===undefined)
            text = id;
        this.id = id;
        this.initialText = text; // Keep track of this for reset
        this.text = text; 
        // image properties
        this.imageArray = typeof text == "string" ? text.split(' ') : text
        console.log(this.imageArray)
    };

    this.uponCreation = function(resolve){
        // define grid
        var grid = $("<div>")
            .css({
                'justify-content' : 'center',
            })
        //
        console.log(this.imageArray)
        console.log(this.text)
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
                        console.log($(this).data('clicked'))
                        console.log(selection)                        
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
                        console.log($(this).data('clicked'))
                        console.log(selection)
                    }
                })
        })
        //
        this.jQueryElement = grid;
        resolve();
    };

    this.value = function(){                                            // Value is text
        return this.text;
    };

    this.end = function(){
        // log
        if (this.log){
            if (!this.printTime)
                PennEngine.controllers.running.save(this.type, this.id, "Options", this.imageArray.join(' '), "Never", "NULL");
            else
                PennEngine.controllers.running.save(this.type, this.id, "Selections", selection.join(' '), this.printTime, "NULL");
        };
    };
    
    this.test = {
        text: function(text){ /* $AC$ Text PElement.test.text(value) Checks that the text of the element corresponds to the specified value $AC$ */
            if (text instanceof RegExp)
                return this.text.match(text);
            else
                return text==this.text;
        },
        // add test for any
        selectAny: function() {
			console.log(selection)
            return selection.length > 0 
        }
    };

});