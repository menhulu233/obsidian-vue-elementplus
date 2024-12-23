import VueSamplePlugin from "../main";
import {VueSamplePluginSettingTab} from "../components/settingTab";

const registerSettingTab =(plugin:VueSamplePlugin)=>{
	plugin.addSettingTab(new VueSamplePluginSettingTab(plugin.app, plugin));
}
export default registerSettingTab;
