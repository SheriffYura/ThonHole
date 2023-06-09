import React from 'react';
import {Wrapper, Title, Description, Image} from './index.styles.js';
import {AiOutlineClose} from 'react-icons/ai'

export const ThingCard = React.memo(({
    title,
    id,
    description,
    imgUrl,
    coords,
    onDelete,
    onCardClick
}) => {
    console.log('RENDER'+id);
    return (
        <Wrapper>
            <AiOutlineClose onClick={() => onDelete(id)}/>
            <div onClick={() => onCardClick(id)}>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
                <Image src={imgUrl}/>
            </div>         
        </Wrapper>
    );
})



