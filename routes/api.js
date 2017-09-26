const express = require('express');
const router = express.Router();
const assert = require('assert');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
MongoClient = require('mongodb').MongoClient;
 MongoClient.connect('mongodb://localhost:27017/blog', function(err, db){
//
  assert.equal(null, err);
      console.log("Successfully connected to MongoDB.");
    /* GET api listing. */
    router.get('/', (req, res) => {
      res.send('api works');
    });

    // Get all posts
    router.get('/posts', (req, res) => {

      axios.get(`${API}/posts`)
        .then(posts => {
            db.collection('blog').find().toArray(function(err, docs) {
                        if (!err) {
                            console.log(docs);
                            res.json(docs);
            }
            else{
              console.log(err);
            }
            })
            });
        })


        // router.post('/calls', function(req, res) {
        //     response={
        //       "_id": req.data.value,
        //       "post": req.data.comment,
        //        "category": req.data.category,
        //       "date": new Date()
        //     }
        //     console.log("Post is "+ req.data);
        //     axios.get(`${API}/posts`)
        //     .then(posts => {
        //         db.collection("blog").insert(response, {w:1}, function(err, result) {});
        //     }
        //     else{
        //       console.log(err);
        //     }
        //     })
        //
        // });
        // .catch(error => {
        //   res.status(500).send(error)
        // });
    });
module.exports = router;
