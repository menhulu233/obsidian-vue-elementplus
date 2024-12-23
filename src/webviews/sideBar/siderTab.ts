import ElementPlus from 'element-plus'
import {createApp} from "vue";
import SideBar from "./SideBar.vue";

const getSideBarWebViewInstance=()=>{
	const app=createApp(SideBar)
	app.use(ElementPlus)
	return app
}

export default getSideBarWebViewInstance;
