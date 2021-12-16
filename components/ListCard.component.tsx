import { Colors } from '@/ui';
import type { NextPage } from 'next';
import Styled from './ListCard.styled';
import { Url } from '@/types';

interface Props {
    url: Url;
    handleDelete: (id: string) => void;
    handleCopy: (shortUrl: string) => void;
}

const ListCard = ({url, handleCopy, handleDelete}: Props) => {
    return (
        <Styled.Container>
            <Styled.Row>
                <Styled.Column pt={5}>
                  <Styled.Text mr={10}>Long:</Styled.Text>
                  <Styled.Text weight={200} fs={18}>{url.long}</Styled.Text>
               </Styled.Column>
            </Styled.Row> 
           <Styled.Row>
                <Styled.Column pt={5}>
                    <Styled.Text mr={10}>Short Url:</Styled.Text>
                    <Styled.Text weight={200} color={Colors.blue}> {url.short}</Styled.Text>
                </Styled.Column>
                <Styled.Column pt={5}>
                    <Styled.Button mr={10} onClick={() => handleCopy(url.short)}  style={{ backgroundColor: Colors.primary }}>Copy</Styled.Button>
                    <Styled.Button onClick={() => handleDelete(url.id)}  style={{ backgroundColor: Colors.warning, color: Colors.white }}>Delete</Styled.Button>
                </Styled.Column>
            </Styled.Row>
        </Styled.Container>
    )
}

export default ListCard;