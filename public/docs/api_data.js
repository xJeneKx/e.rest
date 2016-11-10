define({ "api": [
  {
    "type": "post",
    "url": "/post/",
    "title": "Create post",
    "name": "Create_post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/post/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "create",
            "description": "<p>Create status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"create\": true,\n   \"id\": \"5823739d6602c6128816ff8f\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Posts"
  },
  {
    "type": "delete",
    "url": "/post/:id",
    "title": "Delete post",
    "name": "Delete_post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/post/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "delete",
            "description": "<p>Delete status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"delete\": true,\n   \"id\": \"5823739d6602c6128816ff8f\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/post/:id",
    "title": "Get post",
    "name": "Get_post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/post/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts._id",
            "description": "<p>ID post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts.title",
            "description": "<p>title post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts.text",
            "description": "<p>text post</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "posts.date",
            "description": "<p>date post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"post\":{\n       \"_id\":\"5823739d6602c6128816ff8f\",\n       \"name\":\"test name\",\n       \"text\":\"test text\",\n       \"__v\":0,\n       \"date\":\"2016-11-09T19:04:47.360Z\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/post/",
    "title": "List posts",
    "name": "List",
    "group": "Posts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/post/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts._id",
            "description": "<p>ID post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts.title",
            "description": "<p>title post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts.text",
            "description": "<p>text post</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "posts.date",
            "description": "<p>date post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"posts\":[\n       {\n          \"_id\":\"5823739d6602c6128816ff8f\",\n          \"name\":\"test name\",\n          \"text\":\"test text\",\n          \"__v\":0,\n          \"date\":\"2016-11-09T19:04:47.360Z\"\n       },\n       {\n          \"_id\":\"582443466372940db07add95\",\n          \"name\":\"test name\",\n          \"text\":\"test text\",\n          \"__v\":0,\n          \"date\":\"2016-11-10T09:49:59.294Z\"\n       }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/post/:id",
    "title": "Update post",
    "name": "Update_post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>Text</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/post/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "update",
            "description": "<p>Update status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"update\": true,\n   \"id\": \"5823739d6602c6128816ff8f\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Posts"
  }
] });
