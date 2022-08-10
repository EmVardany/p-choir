const generateConfig = () => {
    return {
        bucket: {
            bucketUrl: "https://choir-notes.s3.amazonaws.com/",
        },
        host: {
            version: '/api/v1',
            localServer: 'http://localhost:5000',
        },
    }
}


export default generateConfig