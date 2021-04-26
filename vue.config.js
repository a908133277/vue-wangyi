module.exports={
    devServer:{
        proxy:{
            '/api':{
                target: 'http://miniapp.you.163.com/',
                pathRewrite:{
                    '/api': ''
                }
            }
        }
    }
}