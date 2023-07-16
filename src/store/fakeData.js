const account = {
    name: 'Long',
    username: 'long174',
    password: '123456'
}

const categories = [
    {
        id: 1, name: 'Cloud Server', image: 'cloud-server.jpg',
        recommend: 'Cloud Server was born to solve many problems of cost, warranty and uptime for businesses. Especially for those who want to develop business based on the Internet. Overall, Cloud Server is one of the best server solutions today.',
        feature: [
            { id: 1, name: 'High readiness', content: 'There is a mechanism to monitor the status of the servers used in "cloud". If one of the virtual governance systems encountered a problem, the client will be automatically transferred to another server.' },
            { id: 2, name: 'Easy to upgrade', content: 'If customers need more resources, just raise the limit on the servers. Or, you just need to create new virtual servers in the internal to support the business.' },
            { id: 3, name: 'Extremely friendly manager', content: 'Cloud Server interface is based on web 2.0 platform with full of utility features.' },
            { id: 4, name: 'Effective remote access', content: 'Every server provides remote access services.' },
            { id: 5, name: 'Data backup', content: 'Cloud Server system is "backup" and stored weekly as "Snapshot" to help ensure data safety at the highest level.' },
            { id: 6, name: 'Advanced security', content: 'Cloud Server uses the latest multi -layer security system, full -time protection in combination with data comprehensive/out in and out of the system when communicating with outside.' }
        ],
        benefit: [
            { id: 1, content: 'Because all software problems are isolated from the virtual environment, high security. In addition, other shirt servers will not affect your server and vice versa. This means that if other users overload the server, it will not affect you. This feature is similar to physical servers.' },
            { id: 2, content: 'Cloud Server is very stable, fast speed and extremely high security. They help you avoid hardware problems with physical servers. In addition, this is the most stable choice when businesses want to cut the budget for the IT segment.' },
            { id: 3, content: 'You can expand or reduce virtual servers very easily. In addition to upgrading memory, you can also add a drive space quickly. This is the advantage that I appreciate, because it allows me to be more flexible in my work.' },
            { id: 4, content: 'Virtual servers provide faster services. It has the same price as a physical server but you will receive more resources. The websites on the cloud will have a faster running speed.' }
        ]
    },
    { id: 2, name: 'Private Cloud', image: 'private-cloud.jpg' },
    { id: 3, name: 'Web hosting', image: 'web-hosting.jpg' },
    { id: 4, name: 'Cloud desktop', image: 'cloud-desktop.jpg' },
    { id: 5, name: 'Domain', image: 'domain.jpg' },
]

const products = [
    { id: 1, categoryId: 1, name: 'CS1', OS: 'Linux', core: 1, ram: 2, storage: '50 Gb SSD', bandwidth: 100, flow: 'Unlimited', ip: 1, networkInfrastructure: 10 },
    { id: 2, categoryId: 1, name: 'CS2', OS: 'Linux/Windows', core: 2, ram: 4, storage: '50 Gb SSD', bandwidth: 100, flow: 'Unlimited', ip: 1, networkInfrastructure: 10 },
    { id: 3, categoryId: 1, name: 'CS3', OS: 'Linux/Windows', core: 4, ram: 4, storage: '100 Gb SSD', bandwidth: 100, flow: 'Unlimited', ip: 1, networkInfrastructure: 10 },
    { id: 4, categoryId: 1, name: 'CS4', OS: 'Linux/Windows', core: 4, ram: 8, storage: '200 Gb SSD', bandwidth: 100, flow: 'Unlimited', ip: 1, networkInfrastructure: 10 }
]

export { account, categories, products };