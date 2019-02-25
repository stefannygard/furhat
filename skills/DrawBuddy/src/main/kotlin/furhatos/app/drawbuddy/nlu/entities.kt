package furhatos.app.drawbuddy.nlu

import furhatos.nlu.EnumEntity
import furhatos.nlu.ListEntity
import furhatos.util.Language

class ListOfColor : ListEntity<Color>()

class Color : EnumEntity(speechRecPhrases = true) {

    override fun getEnum(lang: Language): List<String> {
        return listOf("blue", "red", "green", "yellow")
    }

}