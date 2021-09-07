PennController.ResetPrefix()

newTrial(
    newSelectionGrid("test-phase")
        .print(),
    newButton("Continue")
        .print()
        .center()
        .wait(getSelectionGrid("test-phase").test.selectAny())
)