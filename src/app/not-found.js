import style from './page.module.css'

export default function NotFound() {
  return (
    <div className={style.error_page}>
        <div className={style.error_msg}>
        <h1 className={style.app_name}>404 - Page Not Found</h1>
        <p className={style.app_name}>Oops! The page you’re looking for doesn’t exist.</p>
        </div>
    </div>
  );
}