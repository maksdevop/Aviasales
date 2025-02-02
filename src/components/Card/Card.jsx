import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Card.module.scss";
import logoAir from "/LogoAirlines.svg";
import {
  fetchTickets,
  fetchSearchId,
} from "../../store/actions/ticketsActions";
import MoreInfo from "../MoreInfo/MoreInfo";

const Card = () => {
  const dispatch = useDispatch();
  const { searchId, tickets, visibleTicketsCount, status, error } = useSelector(
    (state) => state.tickets,
  );

  useEffect(() => {
    if (!searchId && status === "idle") {
      dispatch(fetchSearchId());
    }
  }, [dispatch, searchId, status]);

  useEffect(() => {
    if (searchId && status === "idle") {
      const intervalId = setInterval(() => {
        dispatch(fetchTickets(searchId));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [dispatch, searchId, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={styles.TicketsList}>
      {tickets.slice(0, visibleTicketsCount).map((ticket, index) => (
        <div key={index} className={styles.Card}>
          <div className={styles.CardHeader}>
            <div className={styles.CardPrice}>{ticket.price} Р</div>
            <div className={styles.CardLogo}>
              <img src={logoAir} alt="logoAir" />
            </div>
          </div>
          {ticket.segments.map((segment, segIndex) => (
            <div key={segIndex} className={styles.CardInfo}>
              <div className={styles.CardInfoSchedule}>
                <p>
                  {segment.origin} - {segment.destination}
                </p>
                <p>
                  {new Date(segment.date).toLocaleTimeString()} -{" "}
                  {new Date(
                    new Date(segment.date).getTime() + segment.duration * 60000,
                  ).toLocaleTimeString()}
                </p>
              </div>
              <div className={styles.CardInfoTime}>
                <p>В пути</p>
                <p>
                  {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
                </p>
              </div>
              <div className={styles.CardInfoTransplant}>
                <p>{segment.stops.length} пересадки</p>
                <p>{segment.stops.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <MoreInfo />
    </div>
  );
};

export default Card;
