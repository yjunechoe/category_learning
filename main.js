PennController.ResetPrefix(null) // Keep here

Sequence("zzz")

newTrial("zzz",
    newImage("left", "https://i.pinimg.com/originals/2e/05/23/2e0523392db6f1c29c67c1faccbf9d65.jpg")
        .size(200, 200)
    ,
    newImage("right", "https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg")
        .size(200, 200)
    ,
    newImage("point", "point-left.jpg")
        .size(100, 100)
    ,
    newCanvas("train", 600, 300)
        .add(0, 0, getImage("left"))
        .add(400, 0, getImage("right"))
        .add(230, 50, getImage("point"))
        .print()
    ,
    newTimer("interval", 3000)
        .start()
        .wait()
    ,
    getCanvas("train")
        .hidden()
    ,
    newText("<em>Select all other fep(s).</em>")
        .center()
        .print()
    ,
    newImageGrid("test", "1.jpg 2.jpg 3.jpg 4.jpg 5.png 6.png 7.jpg 8.jpg 9.jpg 10.jpg")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait(getImageGrid("test").test.selectAny())
    ,
    getImageGrid("test")
        .log()
) 
