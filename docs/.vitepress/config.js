import { defineConfig } from 'vitepress';

export default defineConfig({
    title: "minmini",
    themeConfig: {
        nav: [
            { text: "文档", link: "/docs/" },
            { text: "配置", link: "/docs/config/config-file/" },
            { text: "保留", link: "/docs/ignore/" },
            { text: "更新日志", link: "https://github.com/zeoseven/minmini/releases" }
        ],

        sidebar: [
            {
                text: '文档',
                items: [
                    { text: '关于 minmini', link: '/docs/' },
                    { text: '快速开始', link: '/docs/start/' },
                    { text: "保留代码片段", link: "/docs/ignore/" },
                    { text: "支持的文件", link: "/docs/supported/" },
                ]
            },
            {
                text: '配置',
                items: [
                    { text: "minmini.config.json", link: '/docs/config/config-file/' },
                    { text: '配置项', link: '/docs/config/' },
                    { text: "示例配置", link: "/docs/config/example/" },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/zeoseven/minmini' }
        ],

        footer: {
            message: 'MIT License.',
            copyright: 'Copyright © 2025 ZeoSeven'
        }
    },

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN'
        },
        en: {
            label: 'English',
            lang: 'en',
            dir: "",
            themeConfig: {
                nav: [
                    { text: "Docs", link: "/en/docs/" },
                    { text: "Configure", link: "/en/docs/config/config-file/" },
                    { text: "Retain", link: "/en/docs/ignore/" },
                    { text: "Changelog", link: "https://github.com/zeoseven/minmini/releases" }
                ],

                sidebar: [
                    {
                        text: 'Docs',
                        items: [
                            { text: 'About minmini', link: '/en/docs/' },
                            { text: 'Get started quickly', link: '/en/docs/start/' },
                            { text: "Keep the code snippet", link: "/en/docs/ignore/" },
                            { text: "Supported Files", link: "/en/docs/supported/" }
                        ]
                    },
                    {
                        text: 'Configure',
                        items: [
                            { text: "minmini.config.json", link: '/en/docs/config/config-file/' },
                            { text: 'Configuration items', link: '/en/docs/config/' },
                            { text: "Example configuration", link: "/docs/config/example/" },
                        ]
                    }
                ],

                socialLinks: [
                    { icon: 'github', link: 'https://github.com/zeoseven/minmini' }
                ],

                footer: {
                    message: 'MIT License.',
                    copyright: 'Copyright © 2025 ZeoSeven'
                }
            },
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    srcDir: './src'
});
