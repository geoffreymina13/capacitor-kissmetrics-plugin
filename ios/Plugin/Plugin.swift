import Foundation
import Capacitor
import KISSmetrics_iOS_SDK


@objc(KissmetricsPlugin)
public class Plugin: CAPPlugin {

    @objc func initialize(_ call: CAPPluginCall) {
        let key = call.getString("key")
        KISSmetricsAPI.sharedAPI(withKey: key!)
        print("Kissmetrics Initialized with " + key!);
        call.success()
    }
    
    @objc func identify(_ call: CAPPluginCall) {
        let email = call.getString("email")
        KISSmetricsAPI.shared()?.identify(email!)
        KISSmetricsAPI.shared()?.autoSetAppProperties();
        KISSmetricsAPI.shared()?.autoSetHardwareProperties();
        KISSmetricsAPI.shared()?.autoRecordAppLifecycle();
        print("Kissmetrics identity set to " + email!);
        call.success()
    }
    
    @objc func record(_ call: CAPPluginCall) {
        let event = call.getString("event")
        let properties = call.getObject("properties")
        KISSmetricsAPI.shared()?.record(event!, withProperties: properties!)
        print("Kissmetrics event [" + event! + "] has been tracked")
        call.success()
    }
    
    @objc func clearIdentity(_ call: CAPPluginCall) {
        KISSmetricsAPI.shared()?.clearIdentity()
        print("Kissmetrics identity has been cleared")
        call.success()
    }
}
