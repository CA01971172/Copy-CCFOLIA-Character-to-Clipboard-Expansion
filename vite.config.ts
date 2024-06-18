import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    version: "1.0",
    name: "Copy CCFOLIA Character to Clipboard Expansion",
    description: "スピアール様作のC4 Bookmarkletの拡張機能版です。ココフォリアのコマをクリップボードに出力できます。",
    "icons": {
        "128": "image/icon128.png"
    },  
    action: {
        default_icon: "image/icon128.png",
        default_title: "キャラコマ出力",
        // default_popup: "src/index.html",
    },
    content_scripts: [
        {
            matches: ["https://ccfolia.com/rooms/*"],
            js: ["src/app/main.tsx"],
            run_at: "document_idle"
        },
    ],
});

export default defineConfig({
    plugins: [
        react(),
        crx({ manifest })
    ]
});
