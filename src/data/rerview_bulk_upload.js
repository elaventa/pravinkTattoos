// Correct CommonJS import
const sanityClient = require('@sanity/client').default;
const reviews = require('./reviews.json');

const client = sanityClient({
  projectId: "wqxh6wum",       // your Sanity project ID
  dataset: "production",        // your dataset
  token: process.env.SANITY_TOKEN_WRITE,  // make sure SANITY_TOKEN is set
  useCdn: false
});

async function importReviews() {
  for (const review of reviews) {
    await client.create({
      _type: 'review',
      ...review
    });
  }
  console.log('All reviews imported!');
}

importReviews().catch(console.error);
