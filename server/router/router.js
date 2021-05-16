import express from 'express'
import mongoose from 'mongoose'
import Post from '../db/posts.js'

const router = express.Router()

// 'localhost:5000/' get isteği yaparsa bütün postları çekicem

router.get('/', async (req,res) => {
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } catch (error) {
        console.log(error)
    }
})

//tek bir post çekmek ıcın
router.get('/:id', async (req,res) =>{
   try {
    const { id } = req.params                //id yi destr edip cekiyorum
    const post = await Post.findById(id)
    if (!post) return
    res.status(200).json(post)
   } catch (error) {
       console.log(error)
   }
})

//gönderi olusturma istegi
router.post('/', async (req,res) => {
 try {
    const post = req.body  // req body den gelen değeri post sabitine atadık
    const createdPost = await Post.create(post) 
    res.status(201).json(createdPost)
 } catch (error) {
     console.log(error)
 }
})

// for post update 
router.put('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const { title, content, creator } = req.body
        if (!mongoose.Types.ObjectId.isValid(id))  // boyle bir id var mı yok mu kontrol
            return res.status(404).send('post bulunamadi')
        const updatedPost = { title, content , creator, _id: id}
        await Post.findByIdAndUpdate(id, updatedPost, {new: true})
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }
})

// for post delete 
router.delete('/:id', async (req,res) => {
  try {
    const { id } = req.params
    await Post.findByIdAndRemove(id)
    res.json({message: 'Post Silindi'})
  } catch (error) {
      console.log(error)
  }
})

export default router