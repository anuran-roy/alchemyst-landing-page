import maya from '../assets/maya.png'
import moh from '../assets/moh.png'

export const artisans = [
    {
        id : 1,
        face : maya,
        name : 'Maya',
        role : 'The sales Dev',
        capabilities : [
            {
                id: 1,
                value : 'Maya has 10x of the skills a human appointment setter would have but costs over 90% less'
            },
            {
                id : 2,
                value : 'Maya plays the role of 10 outbound Sales Representatives in a start-up'
            }
        ],
        button_text : 'Say Hello'
    },
    {
        id : 2,
        face : moh,
        name : 'Moh',
        role : 'The Digital Marketer',
        capabilities : [
            {
                id: 1,
                value : 'Moh creates & executes multi-channel marketing campaigns'
            },
            {
                id :2 ,
                value : 'Learns from your team & builds a world model of your company, uses advanced data analytics to optimize for ROI'
            }
        ],
        button_text : 'Join Waitlist'
    },
    {
        id : 3,
        face : moh,
        name : 'Leela',
        role : 'The Recruiter',
        capabilities : [
            {
                id: 1,
                value : 'Automates initial resume checks with ratings and scores curated for that particular role'
            },
            {
                id :2 ,
                value : 'Seamlessly integrating into workspaces and scheduling automated meetings with candidates as well as writing curated mails'
            }
        ],
        button_text : 'Join Waitlist'
    }
]