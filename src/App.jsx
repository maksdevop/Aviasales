import Card from './components/Card/Card';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import Transplant from './components/Transplant/Transplant';
import styles from './App.module.scss';
import MoreInfo from './components/MoreInfo/MoreInfo';
function App() {
    return (
        <div className={styles.App}>
            <Header />

            <div className={styles.AppWrap}>
                <Transplant />

                <div className={styles.AppRight}>
                    <Filters />
                    <Card />
                    <MoreInfo />
                </div>
            </div>
        </div>
    );
}

export default App;
