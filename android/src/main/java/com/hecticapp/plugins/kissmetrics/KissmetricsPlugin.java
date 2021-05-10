package com.hecticapp.plugins.kissmetrics;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.kissmetrics.sdk.KISSmetricsAPI;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@NativePlugin
public class KissmetricsPlugin extends Plugin {

    private static String tag = "KMPlugin";

    @Override()
    public void load() {
        System.out.println("Loading the KMPlugin");
        super.load();
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        String key = call.getString("key");
        KISSmetricsAPI.sharedAPI(key,getContext());

        Log.d(tag,"Initialized with key " + key);
        call.success();
    }

    @PluginMethod
    public void identify(PluginCall call){
        String email = call.getString("email");
        KISSmetricsAPI.sharedAPI().identify(email);
        KISSmetricsAPI.sharedAPI().autoSetAppProperties();
        KISSmetricsAPI.sharedAPI().autoSetHardwareProperties();

        Log.d(tag,"Identified as " + email);
        call.success();
    }

    @PluginMethod
    public void record(PluginCall call){
        String event = call.getString("event");
        Map<String,String> properties = mapFromJSON(call.getObject("properties"));
        KISSmetricsAPI.sharedAPI().record(event,properties);

        Log.d(tag,"Recorded event " + event);
        call.success();
    }


    @PluginMethod
    public void clearIdentity(PluginCall call){
        KISSmetricsAPI.sharedAPI().clearIdentity();

        Log.d(tag,"Identity cleared");
        call.success();
    }


    private static Map<String, String> mapFromJSON(JSONObject jsonObject) {
        if (jsonObject == null) {
            return null;
        }
        Map<String, String> map = new HashMap<>();
        Iterator<String> keysIter = jsonObject.keys();
        while (keysIter.hasNext()) {
            String key = keysIter.next();
            Object value = getObject(jsonObject.opt(key));
            if (value != null) {
                map.put(key, value.toString());
            }
        }
        return map;
    }

    private static Object getObject(Object value) {
        if (value instanceof JSONObject) {
            value = mapFromJSON((JSONObject) value);
        } else if (value instanceof JSONArray) {
            value = listFromJSON((JSONArray) value);
        }
        return value;
    }

    private static List<String> listFromJSON(JSONArray jsonArray) {
        List<String> list = new ArrayList<>();
        for (int i = 0, count = jsonArray.length(); i < count; i++) {
            Object value = getObject(jsonArray.opt(i));
            if (value != null) {
                list.add(value.toString());
            }
        }
        return list;
    }
}
