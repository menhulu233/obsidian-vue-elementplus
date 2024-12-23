import VueSamplePlugin from "../main";

const registerStatusBar=(plugin:VueSamplePlugin)=>{
	const statusBarItemEl = plugin.addStatusBarItem();
	statusBarItemEl.setText('Status Bar Text');
}
export default registerStatusBar;
