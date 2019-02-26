package furhatos.app.drawbuddy.flow

import furhatos.flow.kotlin.NullSafeUserDataDelegate
import furhatos.records.User

// Associate a stats object to a user
data class UserStats(var drawnPaths: Int)
val User.stats by NullSafeUserDataDelegate { UserStats(0) }