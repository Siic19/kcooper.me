export default (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      category: DataTypes.STRING,
    });
  
    return Post;
  };
  