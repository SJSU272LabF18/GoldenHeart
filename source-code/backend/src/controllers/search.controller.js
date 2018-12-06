'use strict'

const httpStatus = require('http-status')
const fetch = require('node-fetch')
exports.recommend = async (req, res, next) => {
  try {
    // const response = { payLoad: [
    //   {
    //     'charity_name': 'Drosos Foundation',
    //     'charity_mission': 'Committed to enabling disadvantaged people to live a life of dignity',
    //     'charity_url': 'https://drosos.org',
    //     'charity_id': 45931,
    //     'charity_logo': 'https://picsum.photos/200'
    //   },
    //   {
    //     'charity_id': 0,
    //     'charity_name': '9to5 National Association of Working Women',
    //     'charity_mission': '9to5 National Association of Working Women works to build a movement for economic justice, by engaging directly affected women to improve working conditions. Founded in 1973, 9to5 is now one of the largest national membership organizations of working women in the U.S.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=14961',
    //     'charity_logo': 'https://picsum.photos/200'
    //   },
    //   {
    //     'charity_id': 1,
    //     'charity_name': 'Aha Leo',
    //     'charity_mission': 'The nana Leo is a family-based educational organization dedicated to the revitalization of the Hawaiian language. The PÃƒÂ¢Ã¢â‚¬Â°Ã‹â€ Ãƒâ€šÃ‚Â´nana Leo language nest provides a cultural educational environment that emulates Hawaiian Language and Culture. The PÃƒÂ¢Ã¢â‚¬Â°Ã‹â€ Ãƒâ€šÃ‚Â´nana Leo is a member of a consortium of an internationally recognized association of schools, organizations and university programs in Hawaii dedicated to reestablishing Hawaiian as the first and main language of the home. The PÃƒÂ¢Ã¢â‚¬Â°Ã‹â€ Ãƒâ€šÃ‚Â´nana Leo family initiates, provides for, and nurtures various Hawaiian language environments. Our families are the living essence of these environments, and we find our strength in our spirituality, love of our language, love of our people, love of our land, and love of knowledge.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=16012',
    //     'charity_logo': 'https://picsum.photos/200'
    //   },
    //   {
    //     'charity_id': 2,
    //     'charity_name': 'AID FOR AIDS International',
    //     'charity_mission': 'AID FOR AIDS International (AFAI) is committed to improving the quality of life of people with HIV or AIDS (PWHAs) in developing countries and for immigrants to the United States of America living with HIV. We work to empower PLWHAs, their caregivers, and the community at large by providing access to medications, health education, HIV prevention strategies and advocacy and by promoting leadership and capacity building for individuals and organizations.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=11185',
    //     'charity_logo': 'https://picsum.photos/200'
    //   },
    //   {
    //     'charity_id': 9,
    //     'charity_name': 'Issaquah Schools Foundation',
    //     'charity_mission': 'Founded in 1987, in cooperation with the Issaquah School District, the Issaquah Schools Foundation drives resources to help all students achieve the promise of their academic potential. We strive to be the unifying organization that enables the Issaquah School District to provide access to exceptional opportunities district-wide that ignite learning, improve educational outcomes and prepare all students to be confident, competent and engaged citizens.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=15427',
    //     'charity_logo': 'https://picsum.photos/200'
    //   },
    //   {
    //     'charity_id': 3,
    //     'charity_name': 'Futures in Education',
    //     'charity_mission': 'The mission of Futures in Education is to ensure that the gift of an excellent Catholic education continues to be a viable option for current and future generations of deserving students in Brooklyn and Queens. We provide assistance to the neediest of those students, through endowment funds and fundraising programs that focus on key educational priorities: scholarship and tuition assistance, programmatic support, alumni outreach and school fundraising program, and capital improvements.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=17169',
    //     'charity_logo': 'https://picsum.photos/200'

    //   },
    //   {
    //     'charity_id': 5,
    //     'charity_name': 'Futures Without Violence',
    //     'charity_mission': 'For more than 30 years, FUTURES has been providing groundbreaking programs, policies, and campaigns that empower individuals and organizations working to end violence against women and children around the world.Providing leadership from offices in San Francisco, Washington D.C. and Boston.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=6436',
    //     'charity_logo': 'https://picsum.photos/200'

    //   },
    //   {
    //     'charity_id': 6,
    //     'charity_name': 'Gwinnett Habitat for Humanity',
    //     'charity_mission': 'Seeking to put Gods love into action, Habitat for Humanity brings people together to build homes, communities and hope. Gwinnett Habitat for Humanitys vision is a. world in which everyone has a decent place to live. Many families live their whole lives without owning their own home, some may never even live in a home; not for lack of desire to live in a home.',
    //     'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=11467',
    //     'charity_logo': 'https://picsum.photos/200'

    //   }

    // ] }

    const reqbody = {
      'age': req.body.age || 26,
      'gender': req.body.gender || 0,
      'latitude': req.body.latitude || 36,
      'longitude': req.body.longitude || -70
    }
    const resPayload = { payLoad: [ ] }
    const response = await fetch('http://localhost:5000/api/recommender', {
      method: 'post',
      body: JSON.stringify(reqbody),
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()
    let i = 0
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        const name = json[key]
        resPayload.payLoad.push({
          'charity_id': i++,
          'charity_name': name,
          'charity_mission': 'Seeking to put Gods love into action, Habitat for Humanity brings people together to build homes, communities and hope. Gwinnett Habitat for Humanitys vision is a. world in which everyone has a decent place to live. Many families live their whole lives without owning their own home, some may never even live in a home; not for lack of desire to live in a home.',
          'charity_url': 'https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=11467',
          'charity_logo': 'https://picsum.photos/200'
        })
      }
    }
    res.status(httpStatus.ACCEPTED)
    res.send(resPayload)
  } catch (error) {
    next(error)
  }
}
