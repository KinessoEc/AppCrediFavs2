package com.appcredifavs2

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import com.facebook.FacebookSdk
import com.facebook.appevents.AppEventsLogger

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "AppCrediFavs2"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      FacebookSdk.sdkInitialize(applicationContext)
      AppEventsLogger.activateApp(this)
  }

    /**
   * This function assumes logger is an instance of AppEventsLogger and has been
   * created using AppEventsLogger.newLogger() call.
   */
  fun logSentFriendRequestEvent() {
      val logger = AppEventsLogger.newLogger(this)
      logger.logEvent("sentFriendRequest")
  }


}
