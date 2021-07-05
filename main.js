PennController.ResetPrefix(null) // Keep here

Sequence("intro", "condition-single", "condition-contrast")

newTrial("intro",
    newImage("teacher", "point-none.jpeg")
        .center()
        .css({"height" : "200px", "margin" : "1em"})
        .print()
    ,
    newText("teacher-text", "This is Sally. Sally will teach you new words in her language.")
        .center()
        .css("margin", "1em")
        .print()
    ,
    newText("continue-text", "When you are ready, click the button below to proceed.")
        .center()
        .css("margin", "1em")
        .print()
    ,
    newButton("continue", "Continue")
        .print()
        .wait()
)

newTrial("condition-single",
    newImage("left", "https://i.pinimg.com/originals/2e/05/23/2e0523392db6f1c29c67c1faccbf9d65.jpg")
        .size(200, 200)
    ,
    newImage("right", "https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg")
        .size(200, 200)
    ,
    newImage("still", "point-none.jpeg")
        .size(100, 100)
    ,
    newImage("point", "point-left.jpg")
        .size(100, 100)
    ,
    newCanvas("train", 600, 300)
        .add(0, 0, getImage("left"))
        .add(400, 0, getImage("right"))
        .add(240, 50, getImage("point"))
        .print()
    ,
    newText("instruction", "<em>Select all other fep(s).</em>")
        .center()
        .print()
        .hidden()
    ,
    newImageGrid("test", "1.jpg 2.jpg 3.jpg 4.jpg 5.png 6.png 7.jpg 8.jpg 9.jpg 10.jpg")
        .print()
        .hidden()
    ,
    newTimer(5000)
        .start()
        .wait()
    ,
    getCanvas("train")
        .hidden()
    ,
    getText("instruction")
        .visible()
    ,
    getImageGrid("test")
        .visible()
    ,
    newButton("continue", "Continue")
        .print()
        .wait(getImageGrid("test").test.selectAny())
    ,
    getImageGrid("test")
        .log()
) 

newTrial("condition-contrast",
    newImage("left", "https://i.pinimg.com/originals/2e/05/23/2e0523392db6f1c29c67c1faccbf9d65.jpg")
        .size(200, 200)
    ,
    newImage("still", "point-none.jpeg")
        .size(100, 100)
    ,
    newImage("point", "point-left.jpg")
        .size(100, 100)
    ,
    newCanvas("train", 600, 300)
        .add(0, 0, getImage("left"))
        .add(240, 50, getImage("point"))
        .print()
    ,
    newText("instruction", "<em>Select all other fep(s).</em>")
        .center()
        .print()
        .hidden()
    ,
    newImageGrid("test", "1.jpg 2.jpg 3.jpg 4.jpg 5.png 6.png 7.jpg 8.jpg 9.jpg 10.jpg")
        .print()
        .hidden()
    ,
    newTimer(5000)
        .start()
        .wait()
    ,
    getCanvas("train")
        .hidden()
    ,
    getText("instruction")
        .visible()
    ,
    getImageGrid("test")
        .visible()
    ,
    newButton("continue", "Continue")
        .print()
        .wait(getImageGrid("test").test.selectAny())
    ,
    getImageGrid("test")
        .log()
) 
