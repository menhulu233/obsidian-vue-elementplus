import VueSamplePlugin from "../main";

const registerInterval =(plugin:VueSamplePlugin)=>{
	plugin.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
}

export default registerInterval;
