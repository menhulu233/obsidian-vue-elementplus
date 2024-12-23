import {Notice, WorkspaceLeaf} from "obsidian";
import VueSamplePlugin from "../main";
import {VIEW_TYPE} from "../components/sideBar";

const  activateView=async (plugin:VueSamplePlugin)=> {
	const { workspace } = plugin.app;

	let leaf: WorkspaceLeaf | null = null;
	const leaves = workspace.getLeavesOfType(VIEW_TYPE);
	if (leaves.length > 0) {
		// A leaf with our view already exists, use that
		leaf = leaves[0];
	} else {
		// Our view could not be found in the workspace, create a new leaf
		// in the right sidebar for it
		leaf = workspace.getRightLeaf(false);
		if(leaf!=null){
			await leaf.setViewState({ type: VIEW_TYPE, active: true });
		}
		else {
			return
		}
	}
	await workspace.revealLeaf(leaf);
}

const registerRibbonIcon =async (plugin:VueSamplePlugin)=>{
	const ribbonIconEl = plugin.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
		new Notice('This is a notice!');
		activateView(plugin);
	});
	ribbonIconEl.addClass('my-plugin-ribbon-class');
}
export default  registerRibbonIcon;
