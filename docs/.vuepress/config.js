module.exports = ctx => ({
    title: 'APRICITY',
    description: '个人知识库',
    base: '/personal_wiki/',
    themeConfig: {
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    '/book/rabbitmq-in-action-guide/': [
                        '',
                        '03_客户端开发向导',
                        '04_RabbitMQ进阶'
                    ],
                    ...getToolsSidebar()
                }
            }
        }
    }
})

function getToolsSidebar() {
    return  {
        '/tools/vagrant/': [
            'get_startting'
        ]
    }
}
