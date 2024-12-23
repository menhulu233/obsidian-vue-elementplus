import VueSamplePlugin from "../main";
import {sideBarView, VIEW_TYPE} from "../components/sideBar";

const registerViews = (plugin: VueSamplePlugin) => {
	plugin.registerView(
		VIEW_TYPE,
		(leaf) => new sideBarView(leaf)
	);
};
export default registerViews;
