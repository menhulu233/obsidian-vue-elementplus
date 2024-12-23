import { ItemView, WorkspaceLeaf } from 'obsidian';

export const VIEW_TYPE = 'sideBarView';

export class sideBarView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE;
	}

	getDisplayText() {
		return 'sideBarView';
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl('h4', { text: 'Example view' });
	}

	async onClose() {
		// Nothing to clean up.
	}
}
