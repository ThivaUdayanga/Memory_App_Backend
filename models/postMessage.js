import mongoose from 'mongoose'

const postMassageSchema = mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    }
)

const PostMassage = mongoose.model('PostMassage', postMassageSchema)

export default PostMassage