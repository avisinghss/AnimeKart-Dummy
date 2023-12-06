import styles from "./nav.module.css";
import cartpath from "./cart-loop.gif";

function NavbarOne(props) {
  const { cartCount } = props;
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.title}>AnimeKart</div>
          <img
            className={styles.img}
            alt="logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/152fff4c-8eaf-4748-8afb-82f3feb1fc23/ddsj4qm-48b77969-ff6b-4800-814b-611717750cf9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MmZmZjRjLThlYWYtNDc0OC04YWZiLTgyZjNmZWIxZmMyM1wvZGRzajRxbS00OGI3Nzk2OS1mZjZiLTQ4MDAtODE0Yi02MTE3MTc3NTBjZjkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Opa3gJLTMZK_ogzTlguFK_qZjNTBxKRXKrXNEGuGbE8"
          />
        </div>
        <div className={styles.cartIconContainer}>
          <img className={styles.cartIcon} alt="Cart-Icon" src={cartpath} />
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </div>
    </>
  );
}

export default NavbarOne;
