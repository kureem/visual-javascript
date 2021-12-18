package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.ScreenSize;
import framework.components.boostrap.Constants.Size;

public class Modal extends JSContainer{

	private JSContainer dialog = new JSContainer("dialog", "div");
	
	private JSContainer content = new JSContainer("content", "div");
	
	private JSContainer header = new JSContainer("header", "div");
	
	private JSContainer body = new JSContainer("body", "div");
	
	private JSContainer footer = new JSContainer("footer", "div");
	
	private JSContainer title = new JSContainer("title", "h5");
	
	private JSContainer btnClose = new JSContainer("btnClose", "button");
	
	public Modal(String name) {
		super(name, "div");
		setAttribute("tabindex", "-1");
		addChild(dialog.addClass("modal-dialog"));
		dialog.addChild(content.addClass("modal-content"));
		content.addChild(header.addClass("modal-header"));
		content.addChild(body.addClass("modal-body"));
		content.addChild(footer.addClass("footer"));
		
		title.addClass("modal-title");
		btnClose.addClass("btn-close").setAttribute("data-bs-dismiss",  "#" + getId()).setAttribute("aria-label", "Close");
		header.addChild(title).addChild(btnClose);
	}

	public JSContainer getDialog() {
		return dialog;
	}

	public JSContainer getContent() {
		return content;
	}

	public JSContainer getHeader() {
		return header;
	}

	public JSContainer getBody() {
		return body;
	}

	public JSContainer getFooter() {
		return footer;
	}

	public JSContainer getTitle() {
		return title;
	}

	public JSContainer getBtnClose() {
		return btnClose;
	}
	
	public Modal setScrollable(boolean b) {
		if(b && !dialog.hasClass("modal-dialog-scrollable")) {
			dialog.addClass("modal-dialog-scrollable");
		}else if(!b && dialog.hasClass("modal-dialog-scrollable")) {
			dialog.removeClass("modal-dialog-scrollable");
		}
		return this;
	}
	
	
	public Modal setStaticBackdrop(boolean b) {
		if(b && getAttribute("data-bs-backdrop") != "static") {
			setAttribute("data-bs-backdrop", "static");
			setAttribute("data-bs-keyboad", "false");
		}else if(!b && getAttribute("data-bs-backdrop") == "static") {
			setAttribute("data-bs-backdrop", null);
			setAttribute("data-bs-keyboad", null);
		}
		return this;
	}
	
	
	public Modal setCentered(boolean b) {
		if(b && !dialog.hasClass("modal-dialog-centered")) {
			dialog.addClass("modal-dialog-centered");
		}else if(!b && dialog.hasClass("modal-dialog-centered")) {
			dialog.removeClass("modal-dialog-centered");
		}
		
		return this;
	}
	
	
	public Modal setFade(boolean b) {
		if(b && !hasClass("fade")) {
			addClass("fade");
		}else if(!b && hasClass("fade")) {
			removeClass("fade");
		}
		return this;
	}
	
	
	public Modal setSize(Constants.Size size) {
		if(size == Size.NORMAL) {
			for(Size si : Size.values()) {
				if(dialog.hasClass("modal-" + si.getValue())) {
					dialog.removeClass("modal-" + si.getValue());
				}
			}
		}else {
			for(Size si : Size.values()) {
				if((si == size) && !dialog.hasClass("modal-" + si.getValue())){
					dialog.addClass("modal-" + si.getValue());
				}else if((si != size) && dialog.hasClass("modal-" + si.getValue())) {
					dialog.addClass("modal-" + si.getValue());
				}
			}
		}
		
		return this;
		
	}
	
	public Modal setFullScreen(boolean b) {
		return setFullScreen(b, ScreenSize.NORMAL);
	}
	
	public Modal setFullScreen(boolean b, ScreenSize size) {
		if(size == ScreenSize.NORMAL) {
			if(b && !dialog.hasClass("modal-fullscreen")) {
				dialog.addClass("modal-fullscreen");
			}else if(!b && dialog.hasClass("modal-fullscreen")) {
				dialog.removeClass("modal-fullscreen");
			}
			
			for(ScreenSize s : ScreenSize.values()) {
				if(s != ScreenSize.NORMAL) {
					dialog.removeClass("modal-fullscreen-" + s.getValue() + "-down");
				}
			}
		}else {
			if(b) {
				for(ScreenSize s : ScreenSize.values()) {
					if(s == size) {
						if(!dialog.hasClass("modal-fullscreen-" + s.getValue() + "-down")) {
							dialog.addClass("modal-fullscreen-" + s.getValue() + "-down");
						}
					}else {
						if(dialog.hasClass("modal-fullscreen-" +s.getValue() + "-down")) {
							dialog.removeClass("modal-fullscreen-" + s.getValue() + "-down");
						}
					}
				}
			}else {
				for(ScreenSize s : ScreenSize.values()) {
					if(s != ScreenSize.NORMAL) {
						dialog.removeClass("modal-fullscreen-" + s.getValue() + "-down");
					}
				}
			}
		}
		return this;
	}
	
	
	public Modal show() {
		addClass("show");
		return this;
	}
	
	public Modal toggle() {
		if(hasClass("show")) {
			removeClass("show");
		}else {
			addClass("show");
		}
		return this;
	}
	
	public Modal hide() {
		removeClass("show");
		return this;
	}
	
	public Modal close() {
		hide();
		return this;
	}

}
