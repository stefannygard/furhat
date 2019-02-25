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

    onResponse<RequestAvailableGamesIntent> {
        furhat.say("We can make a drawing together")
        reentry()
    }

    onReentry {
        furhat.ask("So, do you want to draw?")
    }

    onResponse<Yes> {
        furhat.say("How fun, I'll set up the drawing board for us!")
        send(DataDelivery(action = "init", setValue=""))
        goto(StartDrawing)
    }

}

// start drawing
val StartDrawing = state {
    onEntry {
        furhat.say("Now you can draw on the canvas")
    }
    onEvent("drawPathComplete") {
        furhat.say("Nice line" );
        goto(RequestWantHelp);
    }
}

// draw together
val RequestWantHelp= state {
    onEntry {
        furhat.ask("Do you want some help styling that line?")
    }
    onReentry {
        furhat.listen();
    }
    onResponse<Yes> {
        furhat.say("How fun, I can fill, change pen size, or change pen color!")
        reentry();
    }
    onResponse<No> {
        reentry();
    }

    onResponse<FillIntent> {
        var message = "Okay, I'll fill with"
        if (it.intent.color != null) message += " ${it.intent.color}"
        furhat.say(message);
        if (it.intent.color != null) send(DataDelivery(action = "fill", setValue=it.intent.color.toString()))
        reentry()
    }
}
