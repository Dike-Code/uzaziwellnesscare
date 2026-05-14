// Theme toggle
(function () {
	const root = document.documentElement;
	root.classList.add("js");
	const stored = (() => {
		try {
			return null;
		} catch {
			return null;
		}
	})(); // localStorage blocked in sandbox
	const prefersDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
	if (prefersDark) root.setAttribute("data-theme", "dark");

	const btn = document.querySelector(".theme-toggle");
	if (btn) {
		btn.addEventListener("click", () => {
			const next =
				root.getAttribute("data-theme") === "dark" ? "light" : "dark";
			if (next === "dark") root.setAttribute("data-theme", "dark");
			else root.removeAttribute("data-theme");
		});
	}

	// Mobile nav
	const menuBtn = document.querySelector(".menu-toggle");
	const navLinks = document.querySelector(".nav-links");
	if (menuBtn && navLinks) {
		menuBtn.addEventListener("click", () => {
			const isOpen = navLinks.classList.toggle("open");
			menuBtn.setAttribute("aria-expanded", isOpen);
		});
		navLinks.querySelectorAll("a").forEach((a) =>
			a.addEventListener("click", () => {
				navLinks.classList.remove("open");
				menuBtn.setAttribute("aria-expanded", "false");
			}),
		);
	}

	// Scroll reveal
	const reveals = document.querySelectorAll(".reveal");
	const revealAll = () => reveals.forEach((el) => el.classList.add("in"));
	if ("IntersectionObserver" in window && reveals.length) {
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in");
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.05, rootMargin: "0px 0px 100px 0px" },
		);
		reveals.forEach((el) => io.observe(el));
		// Safety fallback: reveal anything still hidden after 2s
		setTimeout(revealAll, 2000);
	} else {
		revealAll();
	}

	// Footer year
	const yr = document.querySelector("[data-year]");
	if (yr) yr.textContent = new Date().getFullYear();
})();

// =====================================================================
// MailerLite integration — shared across all forms
// ---------------------------------------------------------------------
// DEV TEAM TODO: Replace UZAZI_ML_ACCOUNT_ID below with your real
// MailerLite account ID. Each form sets its own form ID + group ID via
// data-ml-form-id and data-ml-group-id attributes.
//
// Find your account ID: MailerLite Dashboard -> Forms -> Embed code
// URL looks like https://assets.mailerlite.com/jsonp/{ACCOUNT_ID}/...
// =====================================================================
window.UZAZI_ML_ACCOUNT_ID = window.UZAZI_ML_ACCOUNT_ID || "2342537";

window.uzaziMlSubscribe = function (form) {
	var accountId = window.UZAZI_ML_ACCOUNT_ID;
	var formId = form.getAttribute("data-ml-form-id");
	var groupId = form.getAttribute("data-ml-group-id");
	var endpoint =
		"https://assets.mailerlite.com/jsonp/" +
		accountId +
		"/forms/" +
		formId +
		"/subscribe";

	var gotcha = form.querySelector('input[name="_gotcha"]');
	if (gotcha && gotcha.value) {
		return Promise.reject(new Error("spam"));
	}

	var fd = new FormData();
	fd.append(
		"fields[email]",
		(form.querySelector('input[name="email"]') || {}).value || "",
	);
	fd.append(
		"fields[name]",
		(form.querySelector('input[name="first_name"]') || {}).value || "",
	);
	fd.append(
		"fields[last_name]",
		(form.querySelector('input[name="last_name"]') || {}).value || "",
	);
	var msgField = form.querySelector(
		'textarea[name="message"], input[name="message"]',
	);
	if (msgField) fd.append("fields[message]", msgField.value || "");
	if (groupId) fd.append("groups[]", groupId);

	return fetch(endpoint, { method: "POST", body: fd })
		.then(function (res) {
			if (!res.ok) throw new Error("http_" + res.status);
			return res.json().catch(function () {
				return {};
			});
		})
		.then(function (body) {
			if (body && body.success === false) {
				throw new Error(body.message || "subscribe_failed");
			}
			return body;
		});
};
