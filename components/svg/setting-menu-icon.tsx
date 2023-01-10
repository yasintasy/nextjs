import React from 'react';

interface Props {
    className?: string;
}

const SettingMenuIcon = (props: Props) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.4001 14.3466C13.696 14.3466 14.7466 13.296 14.7466 12C14.7466 10.704 13.696 9.65341 12.4001 9.65341C11.1041 9.65341 10.0535 10.704 10.0535 12C10.0535 13.296 11.1041 14.3466 12.4001 14.3466Z" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4547 14.4545C18.3458 14.7013 18.3133 14.9751 18.3614 15.2405C18.4095 15.5059 18.5361 15.7508 18.7247 15.9436L18.7738 15.9927C18.9259 16.1447 19.0466 16.3252 19.129 16.5238C19.2113 16.7225 19.2537 16.9354 19.2537 17.1505C19.2537 17.3655 19.2113 17.5784 19.129 17.7771C19.0466 17.9757 18.9259 18.1562 18.7738 18.3082C18.6218 18.4603 18.4413 18.581 18.2427 18.6634C18.044 18.7457 17.8311 18.7881 17.6161 18.7881C17.401 18.7881 17.1881 18.7457 16.9894 18.6634C16.7908 18.581 16.6103 18.4603 16.4583 18.3082L16.4092 18.2591C16.2164 18.0705 15.9715 17.9439 15.7061 17.8958C15.4407 17.8477 15.1669 17.8802 14.9201 17.9891C14.6782 18.0928 14.4718 18.265 14.3264 18.4845C14.181 18.704 14.103 18.9613 14.102 19.2245V19.3636C14.102 19.7976 13.9296 20.2138 13.6227 20.5207C13.3158 20.8276 12.8996 21 12.4656 21C12.0316 21 11.6154 20.8276 11.3085 20.5207C11.0016 20.2138 10.8292 19.7976 10.8292 19.3636V19.29C10.8229 19.0192 10.7352 18.7565 10.5777 18.5362C10.4201 18.3159 10.1998 18.1481 9.9456 18.0545C9.69882 17.9456 9.42508 17.9131 9.15966 17.9613C8.89425 18.0094 8.64934 18.1359 8.45651 18.3245L8.40742 18.3736C8.25544 18.5258 8.07497 18.6465 7.87632 18.7288C7.67767 18.8112 7.46474 18.8536 7.24969 18.8536C7.03465 18.8536 6.82171 18.8112 6.62306 18.7288C6.42441 18.6465 6.24394 18.5258 6.09196 18.3736C5.93982 18.2217 5.81912 18.0412 5.73678 17.8425C5.65443 17.6439 5.61204 17.431 5.61204 17.2159C5.61204 17.0009 5.65443 16.7879 5.73678 16.5893C5.81912 16.3906 5.93982 16.2102 6.09196 16.0582L6.14106 16.0091C6.32968 15.8163 6.45621 15.5714 6.50433 15.3059C6.55246 15.0405 6.51997 14.7668 6.41106 14.52C6.30734 14.278 6.13513 14.0716 5.91562 13.9263C5.69611 13.7809 5.43888 13.7029 5.1756 13.7018H5.03651C4.60252 13.7018 4.1863 13.5294 3.87943 13.2225C3.57255 12.9157 3.40015 12.4994 3.40015 12.0655C3.40015 11.6315 3.57255 11.2152 3.87943 10.9084C4.1863 10.6015 4.60252 10.4291 5.03651 10.4291H5.11015C5.38096 10.4228 5.6436 10.3351 5.86394 10.1775C6.08427 10.0199 6.2521 9.79969 6.3456 9.54545C6.45451 9.29868 6.487 9.02493 6.43888 8.75952C6.39075 8.4941 6.26422 8.24919 6.0756 8.05636L6.02651 8.00727C5.87437 7.8553 5.75367 7.67483 5.67132 7.47617C5.58897 7.27752 5.54659 7.06459 5.54659 6.84955C5.54659 6.6345 5.58897 6.42157 5.67132 6.22292C5.75367 6.02426 5.87437 5.84379 6.02651 5.69182C6.17848 5.53967 6.35896 5.41898 6.55761 5.33663C6.75626 5.25428 6.96919 5.21189 7.18424 5.21189C7.39928 5.21189 7.61222 5.25428 7.81087 5.33663C8.00952 5.41898 8.18999 5.53967 8.34196 5.69182L8.39106 5.74091C8.58388 5.92953 8.8288 6.05606 9.09421 6.10419C9.35962 6.15231 9.63337 6.11982 9.88015 6.01091H9.9456C10.1876 5.90719 10.394 5.73498 10.5393 5.51547C10.6847 5.29596 10.7627 5.03873 10.7638 4.77545V4.63636C10.7638 4.20237 10.9362 3.78616 11.2431 3.47928C11.5499 3.1724 11.9662 3 12.4001 3C12.8341 3 13.2504 3.1724 13.5572 3.47928C13.8641 3.78616 14.0365 4.20237 14.0365 4.63636V4.71C14.0376 4.97328 14.1156 5.23051 14.2609 5.45002C14.4063 5.66953 14.6127 5.84174 14.8547 5.94545C15.1015 6.05437 15.3752 6.08686 15.6406 6.03873C15.906 5.99061 16.151 5.86408 16.3438 5.67545L16.3929 5.62636C16.5448 5.47422 16.7253 5.35352 16.924 5.27118C17.1226 5.18883 17.3356 5.14644 17.5506 5.14644C17.7656 5.14644 17.9786 5.18883 18.1772 5.27118C18.3759 5.35352 18.5564 5.47422 18.7083 5.62636C18.8605 5.77834 18.9812 5.95881 19.0635 6.15746C19.1459 6.35611 19.1883 6.56905 19.1883 6.78409C19.1883 6.99913 19.1459 7.21207 19.0635 7.41072C18.9812 7.60937 18.8605 7.78984 18.7083 7.94182L18.6592 7.99091C18.4706 8.18374 18.3441 8.42865 18.296 8.69406C18.2478 8.95948 18.2803 9.23322 18.3892 9.48V9.54545C18.493 9.78745 18.6652 9.99383 18.8847 10.1392C19.1042 10.2846 19.3614 10.3626 19.6247 10.3636H19.7638C20.1978 10.3636 20.614 10.536 20.9209 10.8429C21.2277 11.1498 21.4001 11.566 21.4001 12C21.4001 12.434 21.2277 12.8502 20.9209 13.1571C20.614 13.464 20.1978 13.6364 19.7638 13.6364H19.6901C19.4269 13.6374 19.1696 13.7154 18.9501 13.8608C18.7306 14.0062 18.5584 14.2126 18.4547 14.4545V14.4545Z" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default SettingMenuIcon;