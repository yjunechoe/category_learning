PennController.ResetPrefix(null) // Keep here

Sequence("zzz")

newTrial("zzz",
    newImageGrid("as", "pc-cat.jpg pc-dog.jpg")
        .print()
    ,
    newButton("hello")
        .print()
        .wait(getImageGrid("as").test.selectAny())
) 
