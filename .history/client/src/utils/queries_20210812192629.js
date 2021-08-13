import gql from 'graph-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            lotCount
            EventCount
            savedLots{
                lotId
                address
                description
                link
                title
            }
            savedEvents{
                eventId
                description
                link
                title
            }
        }
    }
`;