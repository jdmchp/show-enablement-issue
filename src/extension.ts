// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	// by default, the 	enablement_issue__viewContainer should be shown:
	vscode.window.showInformationMessage("Activating");
	setEnablement(true);
	console.log("activate: enablement_issue__viewContainer should be visible");
	
	let disposable = vscode.commands.registerCommand('set-enablement-to-true', () => { setEnablement(true) });
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('set-enablement-to-false', () => { setEnablement(false) });
	context.subscriptions.push(disposable);
}

async function setEnablement(value: boolean) {
	await vscode.commands.executeCommand('setContext', "enablement:enable", value);
	console.log("setEnablement: enablement_issue__viewContainer should " + (value ? "" : "NOT") + "be visible");
	vscode.window.showInformationMessage('Setting enablement to ' + value);
}

// this method is called when your extension is deactivated
export function deactivate() { }
