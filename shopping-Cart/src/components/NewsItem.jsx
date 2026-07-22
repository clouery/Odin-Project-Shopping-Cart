
export default function NewsItems({date, title, desc}) {

    return(
        <article className="news-item">
            <time className="news-item-date">{date}</time>
            <h3 className="news-item-title">{title}</h3>
            <p className="news-item-desc">{desc}</p>
        </article>
    )
}