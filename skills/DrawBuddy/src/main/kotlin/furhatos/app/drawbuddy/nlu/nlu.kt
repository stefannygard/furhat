package furhatos.app.drawbuddy.nlu

import furhatos.nlu.*
import furhatos.nlu.grammar.Grammar
import furhatos.nlu.kotlin.grammar
import furhatos.nlu.common.Number
import furhatos.util.Language

class RequestWhatToPlayOptions: Intent() {
    override fun getExamples(lang: Language): List<String> {
        return listOf("What can i play",
                "What games do you have?",
                "What are the alternatives?",
                "What?")
    }
}