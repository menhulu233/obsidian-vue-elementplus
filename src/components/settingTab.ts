import { App, PluginSettingTab } from "obsidian";
import VueSamplePlugin from "../main";
import getSettingTabWebViewInstance from "../webviews/settingTab/settingTab";
// 注册插件设置页
export class VueSamplePluginSettingTab extends PluginSettingTab {
	plugin: VueSamplePlugin;
	constructor(app: App, plugin: VueSamplePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}
	// 当插件设置页被激活时显示的内容
	display() {
		const { containerEl } = this;
		containerEl.empty();
		const app=getSettingTabWebViewInstance();
		app.mount(containerEl);

	}
}
