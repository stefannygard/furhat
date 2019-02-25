package furhatos.app.drawbuddy.nlu

import furhatos.nlu.*
import furhatos.nlu.grammar.Grammar
import furhatos.nlu.kotlin.grammar
import furhatos.nlu.common.Number
import furhatos.util.Language

class RequestStylingOptions : Intent() {
    override fun getExamples(lang: Language): List<String> {
        return listOf("What can you do?",
                "How can you help?",
                "What are the alternatives?",
                "What styles?")
    }
}

class FillIntent: Intent() {
    var color : ListOfColor? = null;
    override fun getExamples(lang: Language): List<String> {
        return listOf("Change fill color to @color",
                "I want to fill with @color",
                "Fill with @color ")
    }
}

class ChangePenColorIntent: Intent() {
    var color : ListOfColor? = null;
    override fun getExamples(lang: Language): List<String> {
        return listOf("Change pen color to @color")
    }
}