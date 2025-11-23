import postMessage from '../models/PostMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json(
            {massage : error.massage}
        )
    }
}

export const createPosts = async (req, res) => {
    const post = req.body

    const newPost = new postMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost) 
    } catch (error) {
        res.status(409).json(
            {massage : error.massage}
        )
    }
}