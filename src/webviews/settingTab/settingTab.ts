import {createApp} from "vue";
import ElementPlus from "element-plus";
import SettingTab from "./SettingTab.vue";

const getSettingTabWebViewInstance = () => {
	const app = createApp(SettingTab);
	app.use(ElementPlus);
	return app;
}

export default getSettingTabWebViewInstance;
