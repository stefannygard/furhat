package furhatos.app.drawbuddy.flow
import furhatos.nlu.common.*
import furhatos.flow.kotlin.*
import furhatos.app.drawbuddy.*
import furhatos.app.drawbuddy.nlu.*
import furhatos.skills.HostedGUI

// start conversation
val Start = state {

    onEntry {
        random(
                { furhat.ask("Hallå där! Vill du leka?") },
                { furhat.ask("Nämen hej! Vad sägs om att pyssla lite?") }
        )
    }

    /*onResponse<No> {
        furhat.say("Jag förstår, ha en bra dag!")
        //goto(Idle)
    }*/
}
