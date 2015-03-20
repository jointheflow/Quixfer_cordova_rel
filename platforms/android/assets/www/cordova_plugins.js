cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/fr._46cl.focus/www/focus.js",
        "id": "fr._46cl.focus.focus",
        "clobbers": [
            "cordova.plugins.Focus"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "fr._46cl.focus": "0.1.3"
}
// BOTTOM OF METADATA
});