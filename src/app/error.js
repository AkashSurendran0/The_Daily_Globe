import style from './page.module.css'

export default function NotFound() {
  return (
    <div className={style.error_page}>
        <div className={style.error_msg}>
        <h1 className={style.app_name}>505 - Server Error</h1>
        <p className={style.app_name}>Oops! Looks like the network is down.</p>
        </div>
    </div>
  );
}