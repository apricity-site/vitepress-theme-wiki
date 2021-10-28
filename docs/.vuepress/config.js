module.exports = ctx => ({
    title: 'APRICITY',
    description: '个人知识库',
    themeConfig: {
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh')
            }
        }
    }
})
