import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Card.module.scss";
import { fetchSearchId, fetchTickets } from "../../store/ticketsActions";
import MoreInfo from "../MoreInfo/MoreInfo";

const Card = () => {
  const checkboxes = useSelector((state) => state.checkboxes); // Обновлено
  const sortType = useSelector((state) => state.sort.sortType);
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

  const applyFilters = (tickets) => {
    if (!checkboxes) return tickets;

    const activeFilters = Object.keys(checkboxes).filter(
      (key) => checkboxes[key] && key !== "Все",
    );

    if (activeFilters.length === 0 || checkboxes["Все"]) {
      return tickets;
    }

    const filteredTickets = tickets.filter((ticket) => {
      return activeFilters.some((filter) => {
        return ticket.segments.some((segment) => {
          const stopsFilter =
            segment.stops.length === 0
              ? "Без пересадок"
              : `${segment.stops.length} пересадк${segment.stops.length > 1 ? "и" : "а"}`;
          return filter === stopsFilter;
        });
      });
    });

    return filteredTickets;
  };

  const applySort = (tickets) => {
    switch (sortType) {
      case "самый дешевый":
        return [...tickets].sort((a, b) => a.price - b.price);
      case "самый быстрый":
        return [...tickets].sort((a, b) => {
          const totalDurationA = a.segments.reduce(
            (sum, segment) => sum + segment.duration,
            0,
          );
          const totalDurationB = b.segments.reduce(
            (sum, segment) => sum + segment.duration,
            0,
          );
          return totalDurationA - totalDurationB;
        });
      case "оптимальный":
        return [...tickets].sort(
          (a, b) => a.price - b.price || a.duration - b.duration,
        );
      default:
        return tickets;
    }
  };

  const filteredAndSortedTickets = applySort(applyFilters(tickets));

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={styles.TicketsList}>
      {filteredAndSortedTickets
        .slice(0, visibleTicketsCount)
        .map((ticket, index) => (
          <div key={index} className={styles.Card}>
            <div className={styles.CardHeader}>
              <div className={styles.CardPrice}>{ticket.price} Р</div>
              <div className={styles.CardLogo}>
                <img
                  src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}
                  alt="logoAir"
                />
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
                      new Date(segment.date).getTime() +
                        segment.duration * 60000,
                    ).toLocaleTimeString()}
                  </p>
                </div>
                <div className={styles.CardInfoTime}>
                  <p>В пути</p>
                  <p>
                    {Math.floor(segment.duration / 60)}ч {segment.duration % 60}
                    м
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
