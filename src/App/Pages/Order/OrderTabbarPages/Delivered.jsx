import React, { useState } from 'react';
import NewCard from '../Components/DeliveredTabCard.jsx';

const Delivered = ( { onClickCard } ) =>
{
  const [ clickedCard, setClickedCard ] = useState( 1 );

  const handleCardClick = cardId =>
  {
    setClickedCard( cardId );
    onClickCard( cardId );

  };
  return (
    <div>
      { ' ' }
      <div>
        <div>
          <div
            className='my-2 p-2 custom-scrollbar'
            style={ {
              height: '100vh',
              overflowY: 'auto',
            } }
          >
            <NewCard
              tableNo='Table No. 01'
              description='As soon as'
              price='$60.00'
              clicked={ clickedCard === 1 }
              onClick={ () => handleCardClick( 1 ) }
            />

            <NewCard
              tableNo='Table No. 02'
              description='As soon as'
              price='$39.88'
              clicked={ clickedCard === 2 }
              onClick={ () => handleCardClick( 2 ) }
            />
            <NewCard
              tableNo='Table No. 03'
              description='As soon as'
              price='$40.88'
              clicked={ clickedCard === 3 }
              onClick={ () => handleCardClick( 3 ) }
            />
            <NewCard
              tableNo='Table No. 04'
              description='As soon as'
              price='$29.88'
              clicked={ clickedCard === 4 }
              onClick={ () => handleCardClick( 4 ) }
            />
            <NewCard
              tableNo='Table No. 05'
              description='As soon as'
              price='$50.88'
              clicked={ clickedCard === 5 }
              onClick={ () => handleCardClick( 5 ) }
            />
            <NewCard
              tableNo='Table No. 06'
              description='As soon as'
              price='$80.88'
              clicked={ clickedCard === 6 }
              onClick={ () => handleCardClick( 6 ) }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delivered;
