const router = require("koa-router")();
const comment = require('../controllers/comment')


router.prefix("/comment");

router.get("/list", comment.listCom);

router.get("/detail", async (ctx, next) => {
  let comment = {
    user_id:'',
    blog_id: '',
    content: content,
    username: username,
    post_time: new Date()
  };
  
  ctx.body = {
    state: "success",
    comment,
  };
});
router.post('/post', comment.postCom);

module.exports = router;
