class LoadingBar {
	constructor(options = {}) {
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = `url('https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif') no-repeat center center`;
		this.domElement.style.backgroundSize = 'cover';
		this.domElement.style.display = 'flex';
		this.domElement.style.flexDirection = 'column';
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '1111';
		this.domElement.style.transition = 'opacity 0.5s';

		// 🖼️ Cute loading icon (floating)
		this.image = document.createElement('img');
		this.image.src = options.image || 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'; // 🐱 cat gif
		this.image.alt = 'Loading...';
		this.image.style.width = '120px';
		this.image.style.height = '120px';
		this.image.style.marginBottom = '20px';
		this.image.style.borderRadius = '10px';
		this.image.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
		this.domElement.appendChild(this.image);

		// 🔲 Progress bar container
		const barBase = document.createElement("div");
		barBase.style.background = 'rgba(255, 255, 255, 0.6)';
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '20px';
		barBase.style.height = '16px';
		barBase.style.overflow = 'hidden';
		barBase.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.2)';
		this.domElement.appendChild(barBase);

		// 🔵 Progress bar fill
		const bar = document.createElement("div");
		bar.style.background = '#ff69b4'; // hot pink
		bar.style.width = '0%';
		bar.style.height = '100%';
		bar.style.borderRadius = '20px';
		bar.style.transition = 'width 0.3s ease';
		barBase.appendChild(bar);

		this.progressBar = bar;
		document.body.appendChild(this.domElement);
	}

	set progress(delta) {
		const percent = Math.min(Math.max(delta * 100, 0), 100);
		this.progressBar.style.width = `${percent}%`;
	}

	set visible(value) {
		this.domElement.style.display = value ? 'flex' : 'none';
	}
}

export { LoadingBar };
