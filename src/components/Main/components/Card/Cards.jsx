/*import { useState } from 'react';
import Card from '../components/Card';
import { initialCards} from '../utils';
*/
const Cards = () =>
{
    const [cards, setCards] = useState(initialCards);

    const handleDeleteCard = (index) => {
        const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
        setCards(updatedCards);
    }

    return(
      <section className="cards">
        <div className="cards__container">
          <ul className="cards__list">
            {
                cards.map((card, index) => {
                    return(
                        <Card key={index} index={index} title={card.name} imageSrc={card.link} handleDeleteCard={handleDeleteCard} />
                    );
                })
            }
          </ul>
        </div>
      </section>

    );
}

export default Cards;
