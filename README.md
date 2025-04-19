# 🧱 WP Block Theme Starter

A simple CLI tool to scaffold a fresh WordPress Block Theme based on a boilerplate structure. Ideal for developers who want to speed up their workflow and follow best practices when building custom block themes for WordPress.

---

## ✨ Features

- 🔧 Instantly generate a new block theme folder
- 🗂️ Includes default `theme.json`, `templates/index.html`, `parts/header.html`, and `parts/footer.html`
- 🎨 Comes with a sample `style.css` and `screenshot.png`
- 📦 Works as a CLI for easy, fast installation

---

## 📦 Installation

To install the CLI globally:

```bash
npm install -g @thushan-wp/block-theme-starter
```

---

## 🚀 Usage

To generate a new theme:

```bash
create-wp-block-theme
```

You’ll be prompted to enter:

- **Theme folder name** – Name of the folder to generate
- **Theme Name** – Display name of your theme
- **Theme URI** – Website URL of the theme (optional)
- **Author** – Your name or company name
- **Author URI** – Your website or profile URL
- **Description** – Short description of the theme (default: "A custom block theme.")
- **Version** – Theme version (default: "1.0")

Once done, your new theme will be created in the current working directory.

---

## 📁 What You Get

```
your-theme-name/
├── parts/
│   ├── header.html
│   └── footer.html
├── templates/
│   └── index.html
├── screenshot.png
├── style.css
├── theme.json
```

---

## 👨‍💻 Ideal For

- WordPress theme developers
- Agencies building multiple client themes
- Beginners learning full site editing (FSE)

---

## 🧪 Example

```bash
create-block-theme
# Prompt:
# Theme folder name: my-theme
# Theme Name: My Theme
# Theme URI: https://example.com
# Author: Thushan Fernando
# Author URI: https://thushan.dev
# Description: A sleek modern block theme.
# Version: 1.0
# ✅ "my-theme" created successfully!
```
---

## 🔧 GIT Repository

You can find the source code and contribute here:  
[https://github.com/wastfer/wp-block-theme-starter.git](https://github.com/wastfer/wp-block-theme-starter.git)


---

## 📃 License

MIT © [Thushan Fernando](https://www.npmjs.com/~thushan-fernando)

---

## 💬 Feedback & Contributions

If you have suggestions or improvements, feel free to open an issue or PR on the GitHub repo. Let’s build better themes together!