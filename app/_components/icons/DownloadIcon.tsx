import {ComponentPropsWithoutRef} from "react";


interface DownloadIconProps extends ComponentPropsWithoutRef<"svg"> {
    size?: number;
}
export const DownloadIcon: React.FC<DownloadIconProps> = ({ size = 24, ...props}) => {
    return (
        <a href="./MonCV.pdf" target="_blank">
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <g>
                    <path
                        d="M5.25 11.25L6 10.5L9.74999 10.5L9.74999 12L6.75 12L6.75 18L17.25 18L17.25 12L14.25 12L14.25 10.5L18 10.5L18.75 11.25L18.75 18.75L18 19.5L6 19.5L5.25 18.75L5.25 11.25ZM12.75 7.06064L12.75 15L11.25 15L11.25 7.06075L9.53039 8.78037L8.46973 7.71971L12.0001 4.18937L15.5304 7.71971L14.4697 8.78037L12.75 7.06064Z"
                        fill="currentColor"/>
                </g>
            </svg>
        </a>
    )
};