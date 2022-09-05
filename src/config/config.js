const generateConfig = () => {
    return {
        bucket: {
            bucketUrl: "https://choir-notes.s3.amazonaws.com/",
        },
        host: {
            version: '/api/v1',
            localServer: 'http://localhost:5000',
            liveServer: 'https://git.heroku.com/quiet-brushlands-76366.git',
            url_live: this.liveServer + this.version,
            url_local: this.localServer + this.version,
        },
    }
}


export default generateConfig