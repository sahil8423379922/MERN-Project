import Card from "react-bootstrap/Card";
import style from "./CSS/Quote.module.css";
import BottomActions from "./BottomActions";

function QuoteCard() {
  return (
    <Card className={`px-2 ${style.card} `}>
      <Card.Body>
        <p className={style.quoteText}>
          Life is a learning experience, only if you learn
        </p>
        <p className={style.quoteAuthor}>-Simranjeet Kaur</p>
        <BottomActions />
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
