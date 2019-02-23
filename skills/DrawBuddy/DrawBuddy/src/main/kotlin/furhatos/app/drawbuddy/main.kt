package furhatos.app.drawbuddy

import furhatos.app.drawbuddy.flow.*
import furhatos.skills.Skill
import furhatos.flow.kotlin.*

class DrawbuddySkill : Skill() {
    override fun start() {
        Flow().run(NoGUI)
    }
}
    
fun main(args: Array<String>) {
    Skill.main(args)
}
