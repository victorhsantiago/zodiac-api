const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.model')

const signs = [
    { id: 1, starSign: 'Aquarius', description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities" },
    { id: 2, starSign: 'Pisces', description: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity." },
    { id: 3, starSign: 'Aries', description: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well." },
    { id: 4, starSign: 'Taurus', description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction." },
    { id: 5, starSign: 'Gemini', description: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see." },
    { id: 6, starSign: 'Cancer', description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering." },
    { id: 7, starSign: 'Leo', description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier." },
    { id: 8, starSign: 'Virgo', description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time." },
    { id: 9, starSign: 'Libra', description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible." },
    { id: 10, starSign: 'Scorpio', description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be." },
    { id: 11, starSign: 'Sagittarius', description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals." },
    { id: 12, starSign: 'Capricorn', description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise." }
]

//QueryString => query property on the request object
//http://localhost:3000/signo?name=Betty&birthdate=22-03-2001
router.get('/signo', (req, res) => {
    if (req.query.name && req.query.birthdate) {
        let date = req.query.birthdate.split('-')
        let signCode = date[1] + date[0]

        function getSign() {
            if (signCode >= 120 && signCode <= 218) {
                return s = 0
            } else if (signCode >= 219 && signCode <= 320) {
                return s = 1
            } else if (signCode >= 321 && signCode <= 419) {
                return s = 2
            } else if (signCode >= 420 && signCode <= 520) {
                return s = 3
            } else if (signCode >= 521 && signCode <= 620) {
                return s = 4
            } else if (signCode >= 621 && signCode <= 722) {
                return s = 5
            } else if (signCode >= 723 && signCode <= 822) {
                return s = 6
            } else if (signCode >= 823 && signCode <= 922) {
                return s = 7
            } else if (signCode >= 923 && signCode <= 1022) {
                return s = 8
            } else if (signCode >= 1023 && signCode <= 1121) {
                return s = 9
            } else if (signCode >= 1122 && signCode <= 1221) {
                return s = 10
            } else {
                return s = 11
            }
        }

        let i = getSign()

        let data = {
            name: req.query.name,
            birthdate: req.query.birthdate,
            starSign: signs[i].starSign,
            description: signs[i].description
        }

        let model = new UserModel(data)
        model.save()

        res.send(data)
    } else {
        res.send('Insufficient params to execute the query. Please, be sure to have the name and birthdate on it. E.g: http://localhost:3000/signo?name=jonh&birthdate=22-03-2001')
    }
})
// Params property on the request object
// localhost:3000/signp/1
router.get('/signo/:id', (req, res) => {
    const sign = signs.find(s => s.id === parseInt(req.params.id))
    if (!sign) res.status(404).send('The sign was not found.')//404
    res.send(sign)
})

module.exports = router