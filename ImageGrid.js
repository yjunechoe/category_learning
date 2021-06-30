window.PennController._AddElementType("ImageGrid", function(PennEngine) {

    var selection = [];
    
    var imageObjArray = []

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
                PennEngine.controllers.running.save(this.type, this.id, "Print", "NA", "Never", "NULL");
            else
                PennEngine.controllers.running.save(this.type, this.id, "Print", "NA", this.printTime, "NULL");
        }
    }

    this.actions = {
        unfold: function(resolve, duration){ /* $AC$ Text PElement.unfold(duration) Unfolds the text in duration milliseconds $AC$ */
            let startUnfolding = ()=>{
                let d = Number(duration);
                if (d>0){
                    let start = Date.now();
                    this.jQueryElement.css("visibility", "visible");
                    let width = this.jQueryElement.width();
                    let wrap = $("<div>").css({
                        display: 'inline-block',
                        'overflow-x': 'hidden',
                        width: 0,
                        margin: 0,
                        padding: 0,
                        'white-space': 'nowrap'
                    });
                    wrap = this.jQueryElement.wrap(wrap).parent();
                    let previousWidth = 0;
                    let unfold = ()=>{                        
                        let proportion = (Date.now()-start) / d;
                        if (proportion>=1)
                            proportion = 1;
                        let newWidth = Math.round(width*proportion);
                        if (newWidth>previousWidth)
                            wrap.width(newWidth);
                        previousWidth = newWidth;
                        if (proportion<1)
                            window.requestAnimationFrame(unfold);
                    };
                    window.requestAnimationFrame(unfold);
                }
            };
            if (!(this.jQueryContainer instanceof jQuery && this.jQueryContainer.parent().length))
                PennEngine.elements.standardCommands.actions.print.call(this, startUnfolding);
            else
                startUnfolding();
            resolve();
        }
    }

    this.settings = {
        text: function(resolve,  text){ /* $AC$ Text PElement.text(text) Redefines the text of the element $AC$ */
            if (text instanceof PennEngine.PennElementCommands)
                text = text.value;
            this.text = text;
            this.jQueryElement.html(text);
            resolve();
        }
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