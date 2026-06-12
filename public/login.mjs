class JTFLogin extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          position: relative;
          height: 100vh;
          min-height: 500px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(ellipse at center, #010d1a 0%, #000 100%);
          font-family: 'Share Tech Mono', monospace;
        }

        /* ── BOX ── */
        .box {
          position: relative;
          z-index: 3;
          width: min(420px, 90vw);
          background: rgba(0, 8, 20, 0.92);
          border: 1px solid rgba(0,180,255,0.25);
          padding: 2.5rem;
          box-shadow:
            0 0 60px rgba(0,180,255,0.05),
            inset 0 0 40px rgba(0,0,0,0.5);
        }

        .box::before, .box::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 1px;
        }
        .box::before { top: 6px;    background: linear-gradient(90deg, transparent, rgba(0,180,255,0.3), transparent); }
        .box::after  { bottom: 6px; background: linear-gradient(90deg, transparent, rgba(0,180,255,0.3), transparent); }

        .corner {
          position: absolute;
          width: 12px; height: 12px;
          border-color: rgba(0,180,255,0.6);
          border-style: solid;
        }
        .corner-tl { top: -1px;    left: -1px;  border-width: 2px 0 0 2px; }
        .corner-tr { top: -1px;    right: -1px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; }
        .corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        /* ── HEADER ── */
        .header { text-align: center; margin-bottom: 2rem; }

        .tag {
          font-size: 0.65rem;
          color: rgba(0,180,255,0.5);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-top: 1rem;
        }

        .logo-img {
          height: 120px;
          width: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto 1rem;
          filter: drop-shadow(0 0 8px rgba(0,180,255,0.4));
        }

        .title {
          font-family: 'Saira Stencil One', sans-serif;
          font-size: 1.8rem;
          color: #aaa;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
          text-shadow: 0 0 20px rgba(0,180,255,0.3);
        }

        .subtitle {
          font-size: 0.65rem;
          color: rgba(0,180,255,0.4);
          letter-spacing: 0.2em;
        }

        /* ── FIELDS ── */
        .field { margin-bottom: 1.25rem; }

        .field label {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: rgba(0,180,255,0.4);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .field label span { color: rgba(255,255,255,0.15); }

        .field-value {
          width: 100%;
          padding: 0.5rem 0;
          border: none;
          border-bottom: 1px solid rgba(0,180,255,0.15);
          background: transparent;
          color: rgba(0,180,255,0.8);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          min-height: 2rem;
          user-select: none;
        }

        .field-value.filled {
          border-bottom-color: rgba(0,180,255,0.4);
        }

        .field-value.locked {
          color: rgba(0,180,255,0.35);
          border-bottom-color: rgba(0,180,255,0.1);
        }

        /* ── STATUS ── */
        .status {
          font-size: 0.68rem;
          color: rgba(0,180,255,0.4);
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          min-height: 1rem;
        }

        .status.active  { color: rgba(0,180,255,0.8); }
        .status.success { color: #00ff87; }
        .status.error   { color: #b10000; }

        /* ── BUTTON ── */
        button {
          width: 100%;
          padding: 0.85rem;
          background: transparent;
          border: 1px solid rgba(177,0,0,0.6);
          color: rgba(177,0,0,0.8);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: default;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }

        button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(177,0,0,0.05), transparent);
          transform: translateX(-100%);
        }

        button.flash { animation: btnFlash 0.35s ease-in-out 4; }

        button.proceed {
          border-color: rgba(0,255,135,0.5);
          color: #00ff87;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0,255,135,0.1);
        }

        button.proceed::before {
          animation: shimmer 2s infinite;
        }

        button.proceed:hover {
          background: rgba(0,255,135,0.06);
          box-shadow: 0 0 30px rgba(0,255,135,0.15);
        }

        @keyframes btnFlash {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.1; }
        }

        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ── DIVIDER ── */
        .divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: rgba(0,180,255,0.15);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(0,180,255,0.1);
        }
      </style>

      <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Share+Tech+Mono&display=swap" rel="stylesheet">

      <div class="box">
        <div class="corner corner-tl"></div>
        <div class="corner corner-tr"></div>
        <div class="corner corner-bl"></div>
        <div class="corner corner-br"></div>

        <div class="header">
          <img class="logo-img" src="assets/img/logo.png" alt="291st JTF">
          <div class="title">291st JTF</div>
          <div class="subtitle">JOINT TASK FORCE</div>
        </div>

        <div class="divider">OPERATOR AUTHENTICATION</div>

        <div class="field">
          <label>Operator ID</label>
          <div class="field-value" id="f-user"></div>
        </div>

        <div class="field">
          <label>Access Code</label>
          <div class="field-value" id="f-pass"></div>
        </div>

        <div class="status" id="status"></div>
        <button id="btn" disabled>AUTHENTICATE</button>

        <div class="tag">Status: SECURE | Version: 1.0.0</div>
      </div>
    `;

		this._runSequence();
	}

	_type(el, text, delay) {
		return new Promise(resolve => {
			let i = 0;
			const t = setInterval(() => {
				el.textContent = text.slice(0, ++i);
				if (i >= text.length) { clearInterval(t); resolve(); }
			}, delay);
		});
	}

	_wait(ms) { return new Promise(r => setTimeout(r, ms)); }

	_setStatus(msg, cls = '') {
		const s = this.shadowRoot.getElementById('status');
		s.textContent = msg;
		s.className = 'status ' + cls;
	}

	async _runSequence() {
		const root    = this.shadowRoot;
		const fUser   = root.getElementById('f-user');
		const fPass   = root.getElementById('f-pass');
		const btn     = root.getElementById('btn');

		await this._wait(700);
		this._setStatus('> INITIALISING ENCRYPTED CHANNEL...', 'active');

		await this._wait(1200);
		this._setStatus('> BIOMETRIC HANDSHAKE CONFIRMED', 'active');

		await this._wait(900);
		this._setStatus('> ENTER CREDENTIALS', 'active');

		await this._wait(600);
		await this._type(fUser, 'OPERATOR_291', 75);
		fUser.classList.add('filled');

		await this._wait(300);
		await this._type(fPass, '● ● ● ● ● ● ● ●', 55);
		fPass.classList.add('filled');

		await this._wait(400);
		this._setStatus('> AUTHENTICATING — STANDBY...', 'active');

		await this._wait(300);
		btn.disabled = false;
		btn.classList.add('flash');

		await this._wait(1500);
		btn.classList.remove('flash');

		this._setStatus('> ACCESS GRANTED — IDENTITY VERIFIED ✓', 'success');

		fUser.classList.remove('filled');
		fPass.classList.remove('filled');
		fUser.classList.add('locked');
		fPass.classList.add('locked');

		btn.textContent = 'PROCEED  ▶';
		btn.classList.add('proceed');

		btn.addEventListener('click', () => {
			document.getElementById('main-nav')?.scrollIntoView({ behavior: 'smooth' });
		}, { once: true });
	}
}

customElements.define('jtf-login', JTFLogin);
