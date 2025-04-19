#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  const answers = await inquirer.prompt([
    { name: "folderName", message: "Theme folder name:" },
    { name: "themeName", message: "Theme Name:" },
    { name: "themeURI", message: "Theme URI:" },
    { name: "author", message: "Author:" },
    { name: "authorURI", message: "Author URI:" },
    { name: "description", message: "Description:", default: "A custom block theme." },
    { name: "version", message: "Version:", default: "1.0" }
  ]);

  const { folderName, themeName, author, description, version, themeURI, authorURI } = answers;

  const targetDir = path.resolve(process.cwd(), folderName);
  const templateDir = path.resolve(__dirname, "block-theme-boilerplate");

  if (fs.existsSync(targetDir)) {
    console.error("❌ Folder already exists. Choose a different name.");
    process.exit(1);
  }

  await fs.copy(templateDir, targetDir);

  const stylePath = path.join(targetDir, "style.css");
  let styleContent = await fs.readFile(stylePath, "utf8");

  styleContent = styleContent
    .replace("{{THEME_NAME}}", themeName)
    .replace("{{THEME_URI}}", themeURI)
    .replace("{{AUTHOR}}", author)
    .replace("{{AUTHOR_URI}}", authorURI)
    .replace("{{DESCRIPTION}}", description)
    .replace("{{VERSION}}", version);

  await fs.writeFile(stylePath, styleContent);

  console.log(`✅ Theme created successfully in '${folderName}/'. Additional meta can be changed in '${folderName}/style.css'.`);
}

run();
