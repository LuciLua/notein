import Link from 'next/link'

function Li({ containerStylesLi, Liref, href, className, spanStylesIcon, icon, spanStylesText, text, onClick }) {
    return (
        <li className={containerStylesLi}>
            <Link
                ref={Liref}
                href={href}
                className={className}
                onClick={onClick}
                >
                <span className={spanStylesIcon}>
                    {icon}
                </span>
                <span className={spanStylesText}>
                    {text}
                </span>
            </Link>
        </li>
    )
}

export default Li