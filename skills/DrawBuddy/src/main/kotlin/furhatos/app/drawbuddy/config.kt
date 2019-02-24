package furhatos.app.drawbuddy

import furhatos.event.Event
import furhatos.skills.HostedGUI

/*
    Variables and events
 */
val PORT = 1234 // GUI Port

// Event used to pass data to GUI
class DataDelivery(
    val action : String
) : Event()