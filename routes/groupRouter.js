const {Router} = require('express');
const GroupController = require('../controllers/Group.controller');
const {getUserInstance} = require('../middlewares/user.mv');
const multer = require('multer');
const path = require('path');
const { STATIC_PATH } = require('../config/path.config');


const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, STATIC_PATH)
    },
    filename: function (req, file, cd) {
        cd(null, `${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({ storage: storage})


const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);
groupRouter.get('/:groupId/members/', GroupController.getGroupWithMembers);
groupRouter.post('/:groupId', upload.single('groupAvatar'), GroupController.createGroupImage);

module.exports = groupRouter;