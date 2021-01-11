const { query } = require('../db/index');
const { cloudinary } = require('../utils/cloudinary');

/* GET ALL POSTS FOR ALL USERS */

async function getAllPosts() {
  const response = await query(
    `SELECT * FROM posts
      ORDER BY id;`
  );
  return response.rows;
}

/* GET ALL POSTS FOR A USER */

async function getPostById(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1
      ORDER BY id;`,
    [userId]
  );
  return response.rows;
}

/* GET ALL FAVE POSTS FOR A USER */

async function getPostsByFavorites(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1 AND favorite = true
      ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

/* POST A NEW POST ENTRY FOR A USER */

async function createPost(newPost) {
  console.log(`text= ${newPost.text}`);

  try {
    let urlImage = '';
    if (typeof newPost.image !== 'undefined') {
      let imageStr = newPost.image;
      console.log('\nabout to do image\n');

      // posting image to cloudinary..
      let uploadedResponse = await cloudinary.uploader.upload(imageStr, {
        upload_preset: 'ml_default',
        resource_type: 'auto',
      });
      console.log(uploadedResponse);

      // retrieving the url path for the image from cloudinary response
      urlImage = uploadedResponse.url;
    }

    let urlVideo = '';
    if (typeof newPost.video !== 'undefined') {
      console.log('about to do video\n');

      // posting video to cloudinary..
      let videoStr = newPost.video;
      uploadedResponse = await cloudinary.uploader.upload(videoStr, {
        upload_preset: 'ml_default',
        resource_type: 'auto',
      });
      console.log(uploadedResponse);
      // retrieving the url path for the video from cloudinary response
      urlVideo = uploadedResponse.url;
    }

    let urlAudio = '';
    if (typeof newPost.audio !== 'undefined') {
      console.log('\nabout to do audio\n');

      // posting audio to cloudinary...
      audioStr = newPost.audio;
      uploadedResponse = await cloudinary.uploader.upload(audioStr, {
        upload_preset: 'ml_default',
        resource_type: 'auto',
      });
      console.log(uploadedResponse);
      // retrieving the url path for the audio from cloudinary response
      urlAudio = uploadedResponse.url;
    }

    const response = await query(
      `INSERT INTO
      posts(
        user_id,
        mood,
        text,
        image,
        video,
        audio,
        date,
        favorite
        )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;`,
      [
        newPost.user_id,
        newPost.mood,
        newPost.text,
        urlImage,
        urlVideo,
        urlAudio,
        newPost.date || new Date().toDateString(),
        false,
      ]
    );
    return response.rows;
  } catch (error) {
    console.error(`Error thrown: ${error.toString()}`);
    //res.status(500).json({ err: 'God damn it, this thing is still broken' });
  }
}
/////

/* EDIT AN EXISTING POST ENTRY FOR A USER */

async function updatePostByPostId(postId, updatedPost) {
  const response = await query(
    `UPDATE posts SET (
      mood,
      text,
      image,
      video,
      audio,
      favorite
    ) = (
      COALESCE($1, mood), 
      COALESCE($2, text), 
      COALESCE($3, image), 
      COALESCE($4, video), 
      COALESCE($5, audio), 
      COALESCE($6, favorite)
      )
    WHERE id = $7 RETURNING *;`,
    [
      updatedPost.mood,
      updatedPost.text,
      updatedPost.image,
      updatedPost.video,
      updatedPost.audio,
      updatedPost.favorite,
      postId,
    ]
  );
  return response.rows;
}

/* DELETE A POST ENTRY FOR A USER */

async function deletePostByPostId(postId) {
  const response = await query(
    `DELETE FROM posts
     WHERE id = $1
     RETURNING id;`,
    [postId]
  );
  return response.rows.id;
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByFavorites,
  createPost,
  updatePostByPostId,
  deletePostByPostId,
};
