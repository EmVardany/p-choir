const generateConfig = () => {
    return {
        bucket: {
            bucketUrl: "https://choir-notes.s3.amazonaws.com/",
        },
        host: {
            version: '/api/v1',
            localServer: 'http://localhost:5000',
            liveServer: 'https://git.heroku.com/quiet-brushlands-76366.git',
            url_live: "https://git.heroku.com/quiet-brushlands-76366.git/api/v1",
            url_local: 'http://localhost:5000/api/v1',
        },
    }
}


export default generateConfig