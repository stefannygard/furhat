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
val Start = state {

    onEntry {
        random(
                { furhat.ask("Hi there, want to play?") },
                { furhat.ask("Oh Hello! How about making a drawing?") }
        )
    }

    onResponse<No> {
        furhat.say("I see, have a great day!")
        goto(Idle)
    }

    onResponse<RequestWhatToPlayOptions> {
        furhat.say("We can make a drawing together")
        reentry()
    }

    onReentry {
        furhat.ask("So, do you want to draw?")
    }

    onResponse<Yes> {
        furhat.say("How fun, I'll set up the drawing board for us!")
        send(DataDelivery(action = "init"))
        //goto(Idle)
    }

}

// start drawing
val StartDrawing = state {
    onEntry {
        { furhat.ask("Now you can draw on the canvas") }
    }
}
