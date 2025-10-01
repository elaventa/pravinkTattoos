const fs = require('fs')
const path = require('path')
const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: "wqxh6wum",  // replace with your Sanity project ID
    dataset: "production",                // or your dataset
    token: process.env.SANITY_TOKEN, 
    useCdn: false
})

const images = require('./images.json')

async function importLocalImages() {
  for (const img of images) {
    const filePath = path.join(__dirname, 'images', img.file)
    const asset = await client.assets.upload('image', fs.createReadStream(filePath))
    await client.create({
      _type: 'galleryImage',
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    })
  }
  console.log('All local images uploaded!')
}

importLocalImages().catch(console.error)
