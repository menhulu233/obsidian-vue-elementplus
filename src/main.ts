import {Plugin} from 'obsidian';
import registerRibbonIcon from "./register/registerRibbonIcon";
import registerStatusBar from "./register/registerStatusBar";
import registerCommands from "./register/registerCommands";
import registerSettingTab from "./register/registerSettingTab";
import registerDomEvents from "./register/registerDomEvents";

// 这里是插件的设置
interface VueSamplePluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: VueSamplePluginSettings = {
	mySetting: 'default'
}

// 这里是插件的主类
export default class VueSamplePlugin extends Plugin {
	settings: VueSamplePluginSettings;

	//这里是插件激活的时候调用
	async onload() {
		await this.loadSettings();
		// 注册左侧栏图标和点击事件
		await registerRibbonIcon(this);
		// 注册状态bar
		registerStatusBar(this);
		// 注册命令
		registerCommands(this);
		// 注册设置界面
		registerSettingTab(this);
		// 注册事件.
		registerDomEvents(this)
		// 注册定时任务
	}

	//这里是插件禁用或者卸载的时候调用
	onunload() {

	}

	//这里是导入设置
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	//这里是导出设置
	async saveSettings() {
		await this.saveData(this.settings);
	}
}
