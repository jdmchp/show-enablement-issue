# show-enablement-issue

This extension adds an icon to the activity bar. The icon is added when the extension is activated.
The extension is activated when one of the commands `set-enablement-to-true` or `set-enablement-to-alse` is executed.
When running this extension under vscode, the extension is loaded but not activated (as expected). Executing one of the two commands mentioned above will control the appearance of the icon on the activity bar.
[vscode case](./vscode_case.gif).

When running under Theia, the icon will never be shown in the activity bar.
[Theia case](./theia_case.gif)
If I remove the `when` clause in the package.json to remove enablement:
```
         "viewsContainers": {
            "activitybar": [
                {
                    "id": "enablement_issue__viewContainer",
                    "title": "Enablement Issue",
                    //"when": "enablement:enable",
                    "icon": "pass-filled.svg"
                }
            ]
        },
        "views": {
            "enablement_issue__viewContainer": [
                {
                    "id": "enablement.outline",
					//"when": "enablement:enable",
					"name": "Show enablement issue"
                }
            ]
        }
	},
```
then the icon is shown all the time.

This shows me that the `when` clause is not being handled in the same way as in vscode.

