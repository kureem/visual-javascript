package framework.components.boostrap;

import framework.components.JSContainer;

public abstract class BaseBootstrap extends JSContainer {

	private Constants.Context context;

	public BaseBootstrap(String name, String tag) {
		super(name, tag);
		addClass(getBoostrapName());
	}

	public BaseBootstrap setContext(Constants.Context context) {
		this.context = context;
		clearContexts();
		if (context != null)
			addClass(getBoostrapName() + "-" + context.getValue());
		return this;
	}

	public void refresh() {
		setContext(this.context);
	}

	protected BaseBootstrap clearContexts() {
		for (Constants.Context context : Constants.Context.values()) {
			removeClass(getBoostrapName() + "-" + context.getValue());
		}
		return this;
	}

	public Constants.Context getContext() {
		return context;
	}

	public abstract String getBoostrapName();

}
