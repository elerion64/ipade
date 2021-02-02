var config = {
  "useNicks": true,
  "disableAudioLevels": true,
  "useIPv6": false,
  "webrtcIceTcpDisable": false,
  "defaultSipNumber": "",
  "startBitrate": 1000,
  "enableWelcomePage": true,
  "useStunTurn": true,
  "enableRtpStats": true,
  "enableRecording": false,
  "resolution": 1080,
  "constraints": {"video": {
    "aspectRatio": 16 / 9,
    "height": {
      "ideal": 240,
      "min": 120,
      "max": 360
    }
  }},
  "hiddenDomain": "recorder.meet.vins.hr",
  "enableLipSync": false,
  "minHDHeight": 720,
  "useRoomAsSharedDocumentName": false,
  "recordingType": "colibri",
  "bosh": '//meet.vins.hr/http-bind',
  "websocket": 'wss://meet.vins.hr/xmpp-websocket',
  "startAudioMuted": 9,
  "openSctp": true,
  "clientNode": "http://vins.hr/",
  "conferences": [],
  "webinar": true,
  "channelLastN": -1,
  "desktopSharingFirefoxDisabled": false,
  "adaptiveLastN": false,
  "hosts": {
    "domain": "meet.vins.hr",
    "focus": "focus.meet.vins.hr",
    "muc": "conference.meet.vins.hr",
    "bridge": "jitsi-videobridge.meet.vins.hr"
  },
  "logStats": false,
  "useRtcpMux": true,
  "requireDisplayName": true,
  "startVideoMuted": 9,
  "adaptiveSimulcast": false,
  "enforcedBridge": "jitsi-videobridge.meet.vins.hr",
  "useBundle": true,
  "p2p": {
    "disableH264": true,
    "preferH264": true,
    "useStunTurn": true,
    "enabled": true
  },
  "desktopSharingChromeDisabled": false,
  "disableRtx": false,
  "disableAdaptiveSimulcast": true,
  "desktopSharingChromeSources": [
    "screen",
    "window",
    "tab"
  ],
  "webrtcIceUdpDisable": false,
  "disableSimulcast": true,
  "startAudioOnly": false,
  "stereo": false,
  "focusUserJid": "focus@auth.meet.vins.hr"
};
