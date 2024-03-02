import maya from '../assets/maya.png'
import moh from '../assets/moh.png'

export const artisans = [
    {
        id : 1,
        face : maya,
        name : 'maya',
        role : 'The sales automator',
        capabilities : [
            {
                id: 1,
                value : 'Maya has 10x of the skills a human appointment setter would have but costs over 90% less'
            },
            {
                id : 2,
                value : 'Maya plays the role of 10 outbound Sales Representatives in a company'
            }
        ],
        button_text : 'Say Hello'
    },
    {
        id : 2,
        face : moh,
        name : 'moh',
        role : 'The Marketer',
        capabilities : [
            {
                id: 1,
                value : 'Alchemysts can become integral members of your buisness and start-up teams'
            },
        ],
        button_text : 'Join Waitlist'
    },
    {
        id : 3,
        face : moh,
        name : 'moh',
        role : 'The Marketer',
        capabilities : [
            {
                id: 1,
                value : 'Alchemysts can become integral members of your buisness and start-up teams'
            },
        ],
        button_text : 'Join Waitlist'
    }
]