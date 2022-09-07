const generateConfig = () => {
    return {
        bucket: {
            bucketUrl: "https://choir-notes.s3.amazonaws.com/",
        },
        host: {
            version: '/api/v1',
            localServer: 'http://localhost:5000',
            url_local: 'http://localhost:5000/api/v1',
            liveServer: 'https://choir-rp.herokuapp.com',
            url_live: "https://choir-rp.herokuapp.com/api/v1",
        },
    }
}


export default generateConfig