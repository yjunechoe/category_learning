PennController.ResetPrefix(null) // Keep here

Sequence("zzz")

newTrial("zzz",
    newImage("left", "https://i.pinimg.com/originals/2e/05/23/2e0523392db6f1c29c67c1faccbf9d65.jpg")
        .size(250, 250)
    ,
    newImage("right", "https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg")
        .size(250, 250)
    ,
    newCanvas("context", 600, 250)
        .add(0, 0, getImage("left"))
        .add(350, 0, getImage("right"))
        .print()
    ,
    newImageGrid("as", "pc-cat.jpg pc-dog.jpg")
        .print()
    ,
    newButton("hello")
        .print()
        .wait(getImageGrid("as").test.selectAny())
    ,
    getImageGrid("as")
        .log()
) 
