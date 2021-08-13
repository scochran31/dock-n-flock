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

            }
            savedEvents{
                
            }
        }
    }
`;