const {faker} = require('@faker-js/faker/locale/en')

function generateUsers(){
    const users = []
    const Comments = []
    const Posts = []
    const Photos = []
    for (let index = 1; index < 10; index++) {
        const fullName = faker.person.fullName()
        const userName = faker.internet.userName()
        const email = faker.internet.email()
        const phone = faker.phone.number()
        const website = faker.internet.url()
        const address = faker.location.streetAddress(true)
        const password = faker.internet.password({ length: 20 })

        const user = {
            "id": index,
            "name": fullName,
            "username": userName,
            "email": email,
            "phone": phone,
            "website": website,
            "address": address,
            "password": password
        }

        users.push(user)
      
    }

    for (let index = 1; index < 50; index++) {
        const comment = faker.word.words(20)

        const Comment = {
            "id": index,
            "comment": comment
        }

        Comments.push(Comment)
      
    }

    for (let index = 1; index < 10; index++) {
        const posts = faker.lorem.lines(2)
        const date = faker.date.anytime()
        const comment = faker.word.words(20)

        const post = {
            "id": index,
            "post": posts,
            "date": date,
            "comment": comment
        }

        Posts.push(post)

    }

    for (let index = 1; index < 10; index++) {
        const photos = faker.image.avatar()

        const photo = {
            "id": index,
            "photo": photos
        }

        Photos.push(photo)

        
    }


    return { "users": users, "Comments": Comments, "posts": Posts, "photos": Photos}
}






module.exports = generateUsers