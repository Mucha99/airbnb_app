import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.box}>
                <input type='checkbox' id={styles.check}/>
                <div class={styles.search_box}>
                    <input type='text' placeholder='Szukaj..' className={styles.search_input}/>
                    <label for='check' className={styles.icon}>
                        <i class='fas fa-search'></i>
                    </label>
                </div>  
            </div>
        </div>
    );
}

export default Header;