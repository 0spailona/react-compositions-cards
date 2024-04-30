import {ReactNode} from "react";

type Props = {
    title: string,
    text: string,
    href: string,
    linkText: string,
    children?: ReactNode | undefined
}

export default function Card({children, title, text, href, linkText}: Props) {

    return (
        <div className="card">
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={href} className="btn btn-primary">{linkText}</a>
            </div>
        </div>
    )
}