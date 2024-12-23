import VueSamplePlugin from "../main";


const registerDomEvents =(plugin:VueSamplePlugin)=>{
	plugin.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		console.log('click', evt);
	});
}

export default registerDomEvents;
