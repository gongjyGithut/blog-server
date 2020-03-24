module.exports = app => {
    const Article = require('../../server/modules/article')
    const express = require('express');
    const router = express.Router();

    router.get('/article', async(req, res) => {
        const items = await Article.find().limit(50)
            // const { data, status } = items
        res.send(items);
    })

    router.post('/article', async(req, res) => {
        const model = await Article.create(req.body)
        if (model) {
            const obj = {
                status: 200,
                success: true
            }
            res.send(obj);
        }
    })
    app.use('/admin/api', router)
}