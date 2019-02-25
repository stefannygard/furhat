package furhatos.app.drawbuddy.flow
import furhatos.nlu.common.*
import furhatos.flow.kotlin.*
import furhatos.app.drawbuddy.*
import furhatos.app.drawbuddy.nlu.*
import furhatos.skills.HostedGUI
import furhatos.nlu.common.*

import furhatos.event.senses.SenseSkillGUIConnected
import furhatos.flow.kotlin.*
import furhatos.records.Record

// start conversation
val Start = state (Interaction) {

    onEntry {
        random(
                { furhat.ask("Hi there, want to draw?") },
                { furhat.ask("Oh Hello! How about making a drawing?") }
        )
    }

    onResponse<No> {
        furhat.say("I see, have a great day!")
        goto(Idle)
    }

    onResponse<Yes> {
        furhat.say("How fun, I'll set up the drawing board for us!")
        send(DataDelivery(action = "init", setValue=""))
        goto(StartDrawing)
    }

}

// start drawing
val StartDrawing = state (Interaction) {
    onEntry {
        furhat.say("Now you can draw on the canvas")
    }
    onEvent("drawPathComplete") {
        furhat.say("Nice line" );
        goto(DrawTogether);
    }
}

// draw together
val DrawTogether= state (Interaction) {

    onEntry {
        furhat.ask("Do you want some help styling that line?")
    }

    onReentry {
        furhat.listen();
    }

    onResponse<RequestStylingOptions> {
        furhat.say("I can fill or change pen color!")
        furhat.ask("Do you want help styling?")
    }

    onResponse<Yes> {
        furhat.say("I can fill or change pen color!")
        reentry();
    }

    onResponse<No> {
        reentry();
    }

    onResponse<FillIntent> {
        furhat.say("Okay, I'll fill with ${it.intent.color}");
        send(DataDelivery(action = "fill", setValue=it.intent.color.toString()))
        reentry()
    }

    onResponse<ChangePenColorIntent> {
        furhat.say("Okay, I'll change pen color to ${it.intent.color}");
        send(DataDelivery(action = "penColor", setValue=it.intent.color.toString()))
        reentry()
    }

}
