import React from 'react';

interface Props {
    className?: string;
}

const Logo = (props: Props) => {
    return (
        <svg width="176" height="30" viewBox="0 0 176 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
            <g clipPath="url(#clip0_18_860)">
                <path fillRule="evenodd" clipRule="evenodd" d="M40 -4.03246e-05C39.5967 -4.03246e-05 39.2986 -4.03246e-05 39.0005 -4.03246e-05C36.4577 -4.03246e-05 33.9325 0.0355258 31.3898 -4.03246e-05C29.1627 -0.0356064 27.5493 0.942461 26.4621 2.88081C24.3227 6.6686 22.1657 10.4564 20.0088 14.2442C20.4998 15.0978 20.9908 15.9514 21.4818 16.8227C22.6743 18.9211 24.9189 19.9703 27.146 19.3657C28.0579 19.1167 28.8996 18.5477 29.7414 18.1387C29.7414 18.1387 29.7414 18.1387 29.7414 18.1564C33.0382 12.377 36.3174 6.59747 39.6142 0.81798C39.7194 0.569017 39.8247 0.337838 40 -4.03246e-05Z" fill="#006AFF" />
                <path d="M27.1285 19.3479C24.9014 19.9526 22.6567 18.9034 21.4643 16.805C20.9733 15.9514 20.4822 15.0978 19.9912 14.2264C17.8343 10.4386 15.6773 6.66863 13.5379 2.88084C12.4507 0.942487 10.8374 -0.0177981 8.61026 0.0177679C6.06751 0.053334 3.54231 0.0177679 0.999562 0.0177679C0.701447 0.0177679 0.403332 0.0177679 0 0.0177679C0.175362 0.355646 0.280579 0.586825 0.420868 0.800222C3.7352 6.63306 7.06708 12.4659 10.3814 18.2987C12.0473 21.2152 13.7133 24.1494 15.3792 27.0658C16.1859 28.4884 17.3433 29.3954 18.5883 29.7866C20.7628 30.4623 23.2354 29.5554 24.6559 27.0658C26.3569 24.096 28.0403 21.1085 29.7413 18.1387C29.7413 18.1387 29.7413 18.1387 29.7413 18.1209C28.8821 18.5299 28.0579 19.099 27.1285 19.3479Z" fill="white" />
            </g>
            <path d="M62.3274 11.7109H58.2834C58.2095 11.1877 58.0587 10.723 57.831 10.3168C57.6032 9.90436 57.3108 9.5535 56.9538 9.2642C56.5968 8.9749 56.1844 8.75331 55.7166 8.59943C55.255 8.44555 54.7533 8.36861 54.2116 8.36861C53.233 8.36861 52.3804 8.61174 51.6541 9.09801C50.9278 9.57812 50.3646 10.2798 49.9645 11.2031C49.5644 12.1203 49.3643 13.2344 49.3643 14.5455C49.3643 15.8935 49.5644 17.026 49.9645 17.9432C50.3707 18.8603 50.937 19.5528 51.6634 20.0206C52.3897 20.4884 53.2299 20.7223 54.1839 20.7223C54.7195 20.7223 55.215 20.6515 55.6705 20.5099C56.1321 20.3684 56.5414 20.1622 56.8984 19.8913C57.2554 19.6143 57.5509 19.2789 57.7848 18.8849C58.0249 18.491 58.1911 18.0417 58.2834 17.5369L62.3274 17.5554C62.2228 18.4233 61.9612 19.2604 61.5426 20.0668C61.1302 20.867 60.5732 21.584 59.8714 22.218C59.1759 22.8459 58.3449 23.3445 57.3786 23.7138C56.4183 24.0769 55.3319 24.2585 54.1193 24.2585C52.4328 24.2585 50.9247 23.8769 49.5952 23.1136C48.2718 22.3504 47.2254 21.2455 46.456 19.799C45.6927 18.3525 45.3111 16.6013 45.3111 14.5455C45.3111 12.4834 45.6989 10.7292 46.4744 9.28267C47.25 7.83617 48.3026 6.73437 49.6321 5.97727C50.9616 5.21401 52.4574 4.83239 54.1193 4.83239C55.215 4.83239 56.2306 4.98627 57.1662 5.29403C58.108 5.6018 58.942 6.05114 59.6683 6.64204C60.3946 7.2268 60.9856 7.94389 61.4411 8.79332C61.9027 9.64276 62.1982 10.6153 62.3274 11.7109ZM68.098 24H63.8139L70.3416 5.09091H75.4936L82.0121 24H77.728L72.9915 9.41193H72.8438L68.098 24ZM67.8303 16.5675H77.9496V19.6882H67.8303V16.5675ZM84.288 24V5.09091H91.7482C93.1763 5.09091 94.395 5.34635 95.4045 5.85724C96.4201 6.36198 97.1926 7.07907 97.7219 8.00852C98.2575 8.93182 98.5252 10.0182 98.5252 11.2678C98.5252 12.5234 98.2544 13.6037 97.7127 14.5085C97.171 15.4072 96.3862 16.0966 95.3583 16.5767C94.3365 17.0568 93.0993 17.2969 91.6467 17.2969H86.6516V14.0838H91.0004C91.7636 14.0838 92.3976 13.9792 92.9023 13.7699C93.4071 13.5606 93.7826 13.2467 94.0288 12.8281C94.2811 12.4096 94.4073 11.8894 94.4073 11.2678C94.4073 10.6399 94.2811 10.1106 94.0288 9.67969C93.7826 9.24882 93.404 8.92258 92.8931 8.70099C92.3884 8.47325 91.7513 8.35938 90.9819 8.35938H88.2859V24H84.288ZM94.4996 15.3949L99.1992 24H94.7859L90.1879 15.3949H94.4996ZM107.368 24V5.09091H114.828C116.256 5.09091 117.475 5.34635 118.485 5.85724C119.5 6.36198 120.273 7.07907 120.802 8.00852C121.338 8.93182 121.605 10.0182 121.605 11.2678C121.605 12.5234 121.334 13.6037 120.793 14.5085C120.251 15.4072 119.466 16.0966 118.438 16.5767C117.417 17.0568 116.179 17.2969 114.727 17.2969H109.732V14.0838H114.08C114.844 14.0838 115.478 13.9792 115.982 13.7699C116.487 13.5606 116.863 13.2467 117.109 12.8281C117.361 12.4096 117.487 11.8894 117.487 11.2678C117.487 10.6399 117.361 10.1106 117.109 9.67969C116.863 9.24882 116.484 8.92258 115.973 8.70099C115.468 8.47325 114.831 8.35938 114.062 8.35938H111.366V24H107.368ZM117.58 15.3949L122.279 24H117.866L113.268 15.3949H117.58ZM124.431 24V5.09091H137.172V8.38707H128.428V12.8928H136.517V16.1889H128.428V20.7038H137.209V24H124.431ZM156.167 5.09091V24H152.713L144.487 12.0987H144.348V24H140.35V5.09091H143.859L152.021 16.983H152.187V5.09091H156.167ZM158.749 8.38707V5.09091H174.279V8.38707H168.49V24H164.539V8.38707H158.749Z" fill="white" />
            <defs>
                <clipPath id="clip0_18_860">
                    <rect width="40" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default Logo;