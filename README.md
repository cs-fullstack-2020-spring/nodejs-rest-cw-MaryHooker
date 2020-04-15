# nodejs-rest-cw
node.js REST classwork

Nice work and good attempt on the first part of the challenge. I can see your logic since we built a string to display in the browser yesterday but we are sending straight up JSON to postman so no need `newArray` string.

### Score : 5/5

# In your web service
- Create endpoints using RESTful syntax to support the 4 CRUD operations for a `blogpost` resource
  - The endpoints should accept and/or return JSON user objects with the following properties:
  ```
  {
    "post_id": 12345,
    "post_title": "The title of my first post!",
    "post_text": "Here is some text for this post"
  }
  ```
  - POST (create) does not need a post_id in the URL since it will create a new entry
  
# In Postman
- Setup a new test collection called `nodejs-rest-cw`
- Create a Postman test case in your collection to test *ALL* your endpoints!

## Challenges:
- Have your web service maintain blog posts in an array
- Add an additional endpoint that will return all of the entries currently in the array

### Using find() on array likely a cleaner solution
