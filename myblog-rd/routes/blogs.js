const router = require("koa-router")();
const blog = require('../controllers/blog')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);

router.get("/detail", verifyToken, async (ctx, next) => {
  
  let blog = {
    user_id: ctx.query.userId,
    title: '标题',
    content: '内容',
    post_time: '2021年1月27日22:45:28'
  };
  
  ctx.body = {
    state: "success",
    blog,
  };
});

// router.get("/comment", verifyToken, async (ctx, next) => {
  
//   let blog = {
//     blog_id: ctx.query.blogId,
//     comment: '评论内容',
//     post_time: new Date()
//   };
  
//   ctx.body = {
//     state: "success",
//     blog,
//   };
// });

router.post('/post', blog.postBlog);

module.exports = router;
