const Availability = require('./Availability');
const Badge = require('./Badge');
const Course = require('./Course');
const Role = require('./Role');
const Schedule = require('./Schedule');
const User = require('./User');
const UserBadge = require('./UserBadge');
const UserCourse = require('./UserCourse');

const defineAssociations = () => {
  // Availability - User
  User.hasMany(Availability, { foreignKey: 'user_id' });
  Availability.belongsTo(User, { foreignKey: 'user_id' });

  // User - Role
  User.belongsTo(Role, { foreignKey: 'role_id' });
  Role.hasMany(User, { foreignKey: 'role_id' });

  // User - UserBadge - Badge
  User.hasMany(UserBadge, { foreignKey: 'user_id' });
  UserBadge.belongsTo(User, { foreignKey: 'user_id' });
  Badge.hasMany(UserBadge, { foreignKey: 'badge_id' });
  UserBadge.belongsTo(Badge, { foreignKey: 'badge_id' });

  // User - UserCourse - Course
  User.hasMany(UserCourse, { foreignKey: 'user_id' });
  UserCourse.belongsTo(User, { foreignKey: 'user_id' });
  Course.hasMany(UserCourse, { foreignKey: 'course_id' });
  UserCourse.belongsTo(Course, { foreignKey: 'course_id' });

  // Course - Scehdule
  Course.hasMany(Schedule, { foreignKey: 'course_id' });
  Schedule.belongsTo(Course, { foreignKey: 'course_id' });

  // User - Schedule
  User.hasMany(Schedule, { foreignKey: 'user_id' });
  Schedule.belongsTo(User, { foreignKey: 'user_id' });
};

module.exports = defineAssociations;
