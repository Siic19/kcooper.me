import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import nodemailer from 'nodemailer'

import requiresAuth from './permissions'

import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.env.GMAIL_SECRET

import { GraphQLUpload } from 'apollo-upload-server'

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: 'kcoop@live.ca',
    pass: SECRET,
  },
})

const processUpload = async (upload) => {
  const { stream, filename, mimetype, encoding } = await upload
  const { id, path } = await storeFS({ stream, filename })
  return storeDB({ id, filename, mimetype, encoding, path })
}

export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    loggedInUser: (parent, args, { models, user }) => {
      if (user) {
        return models.User.findOne({
          where: {
            id: user.id,
          },
        })
      }
      return null
    },
    allPosts: (parent, args, { models }) => {
      // if args are given with the query (last: 10) it will return the last 10 posts
      const { last, offset } = args

      if (!last && !offset) {
        return models.Post.findAll()
      } else if (last && !offset) {
        return models.Post.findAll({
          limit: last,
          order: [['createdAt', 'DESC']],
        })
      } else {
        return models.Post.findAll({
          limit: last,
          offset,
          order: [['createdAt', 'DESC']],
        })
      }
    },
    findPost: (parent, args, { models }) => {
      console.log(typeof args.slug)

      return models.Post.findOne({
        where: {
          slug: args.slug,
        },
      })
    },
  },

  Mutation: {
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    register: async (parent, args, { models }) => {
      const user = args
      user.password = await bcrypt.hash(user.password, 12)
      return models.User.create(user)
    },
    login: async (parent, { email, password }, { models, SECRET }) => {
      const user = await models.User.findOne({ where: { email } })
      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        throw new Error('Incorrect password')
      }

      const token = jwt.sign(
        { user: _.pick(user, ['id', 'username']) },
        SECRET,
        {
          expiresIn: '1y',
        },
      )

      return token
    },
    createPost: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        return await models.Post.create(args)
      },
    ),
    editPost: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        const { title, slug, category, image, markdown, id } = args
        // return await models.Post.create(args)
        mods.Post.update(
          {
            title: title,
            slug: slug,
            category: category,
            image: image,
            markdown: markdown,
          },
          { _id: id },
        )
          .success(function() {
            console.log('Project with id =1 updated successfully!')
          })
          .error(function(err) {
            console.log('Project update failed !')
          })
      },
    ),
    sendEmail: async (parent, args, { models }) => {
      const { firstName, lastName, emailAddress, subject, text } = args

      let response = null

      let mailOptions = {
        from: `"${firstName} ${lastName}" - ${emailAddress}`, // sender address
        to: 'kelsey@kcooper.me', // list of receivers
        subject: `${subject}`, // Subject line
        text: `${text}`, // plain text body
        html: `${text}`, // html body
      }
      // send mail with defined transport object
      await transporter
        .sendMail(mailOptions)
        .then(function(info) {
          response = true
        })
        .catch(function(err) {
          console.log(err)
          response = false
        })

      return response
    },
  },
}
