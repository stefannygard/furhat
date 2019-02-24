package furhatos.app.drawbuddy.flow
import furhatos.app.drawbuddy.PORT
import furhatos.event.senses.SenseSkillGUIConnected
import furhatos.flow.kotlin.*
import furhatos.skills.HostedGUI
import furhatos.util.*

// Our GUI declaration
val GUI = HostedGUI("ExampleGUI", "assets/exampleGui", PORT)

val NoGUI : State = state(null) {

    onEvent<SenseSkillGUIConnected> {
        goto(Idle)
    }

}

val Idle: State = state {

    init {
        furhat.setVoice(Language.ENGLISH_US, Gender.FEMALE)
        if (users.count > 0) {
            furhat.attend(users.random)
            goto(Start)
        }
    }

    onEntry {
        furhat.attendNobody()
    }

    onUserEnter {
        furhat.attend(it)
        goto(Start)
    }
}

val Interaction: State = state {

    onUserLeave(instant = true) {
        if (users.count > 0) {
            if (it == users.current) {
                furhat.attend(users.other)
                goto(Start)
            } else {
                furhat.glance(it)
            }
        } else {
            goto(Idle)
        }
    }

    onUserEnter(instant = true) {
        furhat.glance(it)
    }

}