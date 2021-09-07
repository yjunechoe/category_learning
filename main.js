PennController.ResetPrefix()

newTrial(
    newSelectionGrid("test-phase")
        .print()
        .log(),
    newButton("Continue")
        .print()
        .center()
        .wait(getSelectionGrid("test-phase").test.selectAny())
)