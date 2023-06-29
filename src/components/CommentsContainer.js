import React from "react";
import Comment from "./Comment";


const commentsData = [
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [
      {
        name: "Vinita Kumari",
        text: "This is my first comment",
        replies: [
          {
            name: "Vinita Kumari",
            text: "This is my first comment",
            replies: [
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Vinita Kumari",
        text: "This is my first comment",
        replies: [
          {
            name: "Vinita Kumari",
            text: "This is my first comment",
            replies: [
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
            ],
          },
          {
            name: "Vinita Kumari",
            text: "This is my first comment",
            replies: [
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [
                  {
                    name: "Vinita Kumari",
                    text: "This is my first comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [
      {
        name: "Vinita Kumari",
        text: "This is my first comment",
        replies: [
          {
            name: "Vinita Kumari",
            text: "This is my first comment",
            replies: [
              {
                name: "Vinita Kumari",
                text: "This is my first comment",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [],
  },
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [],
  },
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [],
  },
  {
    name: "Vinita Kumari",
    text: "This is my first comment",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-8 ml-5">
       <CommentList comments={comment.replies} />
      </div>
    </div> 
  )
  )
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
