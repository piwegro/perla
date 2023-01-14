import styles from '../../styles/common/Hero.module.scss'
import { container } from '../../styles/common/Grid.module.scss'
import SearchBox from '../search/SearchBox'

/** Hero component */
const Hero = ({ page, children, showSearch, center }) => {
    let showSearchBox = (showSearch ?? false) || page === 'main' // Show search box if showSearch is true or page is main
    return (
        <div className={styles.hero}>
            <div className={`${container} ${center ? styles.center : ''}`}>
                <div>{page === 'main' ? <MainPageHero /> : <>{children}</>}</div>
                {showSearchBox ? <SearchBox /> : null}
            </div>
        </div>
    )
}

/** Main page hero component */
const MainPageHero = () => {
    return (
        <>
            <h1>
                Wymieniaj się z innymi <b>studentami</b> za <b>walutę studencką</b>!
            </h1>
            <svg
                width='401'
                height='401'
                viewBox='0 0 401 401'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M360.587 82.9255C360.814 82.7681 361.006 82.5654 361.151 82.3303C361.188 82.2752 361.211 82.2117 361.218 82.1455C361.226 82.0793 361.216 82.0123 361.192 81.9505C361.167 81.8886 361.127 81.8338 361.076 81.7908C361.026 81.7478 360.965 81.7179 360.9 81.7037C360.618 81.5952 360.305 81.5952 360.023 81.7037L359.615 81.8604L358.55 82.4869C357.759 83.0099 356.995 83.5747 356.263 84.1787C353.123 86.8302 350.267 89.8015 347.742 93.0445C344.986 96.8458 341.916 100.409 338.563 103.696C337.038 105.188 335.269 106.407 333.331 107.299C332.618 107.557 331.884 107.756 331.138 107.894C330.184 108.048 329.211 108.048 328.256 107.894C327.267 107.57 326.344 107.071 325.53 106.422C324.553 105.574 323.8 104.499 323.335 103.292C322.871 102.085 322.71 100.782 322.868 99.4981C323.016 98.2601 323.332 97.048 323.807 95.8954C324.667 94.106 325.717 92.4149 326.94 90.8516C329.183 88.05 331.6 85.3923 334.177 82.8942C335.399 81.6411 336.527 80.6386 337.56 79.4795C338.594 78.3203 339.785 77.0045 340.693 75.7514C342.802 73.3578 344.719 70.8019 346.426 68.1073C347.187 66.9304 347.807 65.6687 348.275 64.348C348.407 63.9094 348.491 63.4577 348.525 63.0009C348.525 62.6562 348.525 62.7189 348.525 62.6562H349.81C349.81 62.6562 349.81 62.6562 349.81 62.9069C349.778 63.0725 349.778 63.2425 349.81 63.4081H349.59H349.152C348.312 63.7765 347.522 64.2502 346.802 64.8179C345.081 66.1504 343.468 67.617 341.978 69.2038C338.845 72.3366 335.712 75.9394 332.579 79.4481L327.535 85.2752C325.586 87.5474 323.493 89.6925 321.27 91.6974C320.009 92.9339 318.519 93.9128 316.884 94.5796C316.162 94.8516 315.399 94.9998 314.628 95.0182C313.813 94.9018 313.014 94.6916 312.247 94.3916C310.697 93.8212 309.406 92.7082 308.613 91.2588C307.92 89.7739 307.691 88.1143 307.955 86.497C308.333 84.2016 309.073 81.9808 310.148 79.918C311.057 78.0697 311.777 76.7852 312.686 75.2815C314.409 72.3993 316.257 69.6737 318.074 67.0109C319.891 64.348 321.708 61.6851 323.369 59.0848C324.152 57.7691 324.998 56.4846 325.687 55.2315C326.332 54.1552 326.828 52.9958 327.16 51.7854C327.567 50.8455 327.316 50.2816 327.849 49.843C328.381 49.4044 329.791 49.4358 330.982 51.6287C331.94 54.4109 332.005 57.4227 331.17 60.244C330.222 63.7063 328.709 66.9879 326.69 69.9557L321.27 78.1323L318.795 82.0797C317.855 83.7087 317.824 83.8027 317.824 83.7714C317.824 83.7401 317.824 83.7714 317.824 83.7714C317.824 83.7714 317.824 83.7714 318.262 83.3955C322.586 78.9155 326.846 73.7151 331.389 68.7339C333.707 66.1382 336.165 63.6701 338.751 61.3405C340.159 60.0627 341.668 58.8998 343.262 57.863C344.245 57.2179 345.296 56.6821 346.395 56.2653C347.945 55.6415 349.642 55.4783 351.282 55.7954C351.913 55.9945 352.531 56.2352 353.131 56.5159L353.726 56.8292L354.196 57.3931C355.448 58.9387 356.094 60.8879 356.013 62.8755C355.957 64.3009 355.671 65.7079 355.167 67.0422C354.345 69.1754 353.295 71.2132 352.034 73.1198C349.73 76.6345 347.197 79.9938 344.453 83.1762C343.2 84.6799 341.539 86.497 340.192 87.8441C338.845 89.1912 337.404 90.6636 336.119 92.1047C334.859 93.4585 333.687 94.8921 332.611 96.3966C331.791 97.4725 331.185 98.6954 330.825 99.9994C330.825 100.156 330.825 100.156 330.825 100.219C330.825 100.281 331.295 99.7487 330.825 100.219C330.825 100.219 330.449 100.751 330.48 100.689C330.48 100.689 330.48 101.002 330.48 100.689C330.513 100.429 330.513 100.165 330.48 99.9054C331.984 99.1903 333.336 98.1902 334.459 96.9605C337.439 93.7643 340.242 90.4071 342.855 86.9042C345.829 83.1694 349.26 79.8225 353.068 76.9419C354.067 76.186 355.113 75.4954 356.201 74.8742C357.667 74.0214 359.25 73.3881 360.9 72.9945C362.426 72.5845 364.02 72.4926 365.582 72.7243C367.145 72.956 368.644 73.5065 369.985 74.3416C370.742 74.8642 371.362 75.5611 371.792 76.3735C372.223 77.1859 372.452 78.09 372.46 79.0095C372.432 80.8986 371.879 82.7427 370.862 84.3353C370.328 85.2148 369.742 86.0621 369.108 86.8729L368.137 88.126L367.291 89.0345C366.226 90.2563 365.286 91.1962 364.158 92.1673C360.054 96.1147 355.762 99.6861 351.627 103.289C348.518 105.698 345.672 108.428 343.137 111.434C342.641 112.134 342.211 112.879 341.852 113.658C341.723 113.93 341.618 114.214 341.539 114.504C341.351 114.692 341.946 114.504 340.944 114.504C340.662 114.504 340.599 114.504 340.38 114.504C340.161 114.504 340.035 114.692 340.098 114.504C340.237 114.379 340.335 114.216 340.38 114.034C340.38 114.034 340.38 113.752 340.568 113.314C340.756 112.875 340.568 113.314 340.568 113.157C340.839 113.179 341.111 113.179 341.382 113.157C341.795 113.063 342.203 112.948 342.604 112.813L343.701 112.437C344.417 112 345.098 111.507 345.737 110.964L348.087 108.991L352.817 104.887C355.95 102.13 359.083 99.4041 362.654 96.8352C364.015 95.7991 365.438 94.847 366.915 93.9844C368.534 92.9289 370.326 92.1655 372.209 91.7287C373.689 91.3972 375.24 91.6556 376.533 92.4493C377.797 93.3394 378.662 94.6887 378.945 96.2087C379.095 96.7392 379.18 97.2864 379.196 97.8377C379.229 98.1292 379.229 98.4235 379.196 98.7149C379.228 99.132 379.228 99.551 379.196 99.968C378.872 101.072 378.397 102.126 377.786 103.101C375.915 105.888 373.819 108.518 371.52 110.964C369.296 113.345 367.04 115.632 364.816 117.919L359.083 123.934C356.686 126.559 354.156 129.058 351.501 131.421C350.284 132.569 348.83 133.435 347.241 133.959C346.648 134.248 346.09 134.605 345.58 135.024C345.173 135.275 344.86 135.244 344.547 134.68C344.168 133.802 344.059 132.831 344.233 131.891C344.878 128.626 346.357 125.582 348.525 123.057C352.253 118.358 356.326 114.16 360.336 109.93L366.288 103.665C367.27 102.641 368.178 101.597 369.014 100.532C369.736 99.6976 370.376 98.7953 370.925 97.8377V97.6811L371.395 97.9004C371.959 98.1823 372.93 98.3077 373.275 98.4643L373.964 98.6209H370.831C370.815 98.4856 370.815 98.349 370.831 98.2137C371.299 98.0977 371.76 97.9512 372.209 97.7751C373.65 97.5244 374.34 96.3653 373.995 96.9605C373.912 97.1412 373.849 97.3303 373.807 97.5244C373.807 97.7437 373.807 97.963 373.807 98.4643C373.744 98.8796 373.744 99.3021 373.807 99.7174C373.807 99.7174 373.807 100.469 373.807 100.375C372.984 100.661 372.196 101.04 371.457 101.503C370.455 102.098 369.327 102.913 368.325 103.696C363.907 106.829 359.521 110.964 354.948 115.006L352.347 117.261L350.906 118.452L350.092 119.078L349.653 119.423L348.964 119.861C348.109 120.396 347.194 120.827 346.238 121.146C345.5 121.409 344.747 121.629 343.983 121.804C342.957 122.055 341.906 122.192 340.85 122.211C339.994 122.185 339.144 122.069 338.312 121.866C337.677 121.667 337.067 121.393 336.495 121.052C335.834 120.7 335.248 120.221 334.772 119.642C333.803 118.547 333.162 117.2 332.924 115.757C332.88 115.289 332.88 114.817 332.924 114.348C332.885 113.941 332.885 113.532 332.924 113.126C333.068 112.046 333.363 110.991 333.801 109.993C334.409 108.571 335.165 107.216 336.057 105.952C336.881 104.75 337.803 103.618 338.814 102.568C339.753 101.597 340.631 100.783 341.508 99.968C345.048 96.8352 348.463 93.9844 351.783 91.0709C353.444 89.6298 354.916 88.1573 356.608 86.6849L358.864 84.4919L359.929 83.3641L360.743 82.4556L360.587 82.9255Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M171.302 179.166C175.156 171.083 179.573 163.126 184.115 155.325C185.306 153.32 186.246 151.565 187.718 149.372C189.196 147.282 190.945 145.396 192.919 143.765C196.526 140.772 200.395 138.109 204.479 135.807C210.243 132.455 216.039 129.385 221.96 126.628C232.423 121.741 242.981 117.23 253.445 112.781C258.645 110.494 263.814 108.145 268.858 105.638C273.886 103.215 278.697 100.364 283.238 97.1172C290.821 90.6858 297.738 83.5067 303.883 75.6887C307.955 70.7076 311.84 65.5698 315.819 60.432C317.855 57.8944 319.797 55.2941 322.084 52.8819C324.371 50.4696 326.502 48.0887 328.851 45.8017C331.765 42.9509 331.984 43.8594 330.48 47.1175C329.76 48.7152 328.695 50.9709 327.348 53.6337C326.658 54.9495 325.969 56.3906 325.092 57.8317C324.215 59.2728 323.181 60.7452 321.959 62.249C314.292 73.2127 305.832 83.5996 296.646 93.3265C294.265 95.7388 291.79 98.057 289.221 100.313C286.543 102.669 283.648 104.767 280.575 106.578C274.706 109.998 268.639 113.063 262.404 115.757C247.774 122.336 232.611 129.009 218.169 136.183C210.298 139.793 202.927 144.405 196.239 149.905C194.759 151.225 193.482 152.755 192.449 154.448L189.222 160.055C186.998 163.877 184.899 167.793 182.956 171.741C177.912 181.484 173.37 191.509 168.859 201.534C165.383 209.005 162.522 216.748 160.306 224.685C159.335 228.633 158.113 232.893 160.055 234.93C161.998 236.966 165.82 237.123 169.235 235.4C174.609 232.413 179.38 228.45 183.301 223.714C187.411 219.089 191.013 214.038 194.046 208.645C195.394 206.296 196.553 203.883 197.712 201.409C199.842 196.835 200.845 193.702 201.91 191.571C202.601 189.988 203.59 188.553 204.823 187.342C205.229 186.9 205.669 186.492 206.139 186.12C206.828 185.713 207.173 186.622 207.267 188.658C207.243 191.716 206.736 194.75 205.763 197.649C201.95 209.276 195.702 219.956 187.436 228.977C183.141 233.907 178.021 238.052 172.305 241.227C170.598 242.085 168.787 242.717 166.916 243.106C165.887 243.325 164.835 243.42 163.783 243.388H162.06C161.467 243.254 160.881 243.087 160.306 242.887C159.166 242.537 158.103 241.974 157.173 241.227C156.113 240.533 155.197 239.639 154.479 238.595C153.09 236.538 152.398 234.089 152.505 231.609C152.548 228.938 152.885 226.28 153.508 223.683C154.072 221.396 154.698 219.14 155.419 216.916C156.829 212.499 158.552 208.175 160.243 203.946C163.815 195.519 167.48 187.436 171.302 179.166Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M311.276 176.691C316.508 169.015 321.99 161.559 327.567 154.228C329.603 151.534 331.483 148.746 333.551 146.114C337.185 141.478 340.85 136.716 344.735 132.236C348.619 127.756 352.567 123.308 356.608 118.953C360.179 115.1 363.782 111.184 367.416 107.393C371.895 102.153 377.314 97.7965 383.394 94.5483C385.43 93.6084 385.587 94.8302 384.709 96.7726C383.427 99.4805 381.677 101.941 379.54 104.041C369.985 113.063 361.088 123.276 351.909 133.364C346.364 139.316 341.571 146.334 336.464 153.038C330.888 160.369 325.374 167.762 320.142 175.312C317.009 179.949 313.876 184.711 310.744 189.472C306.264 196.772 301.69 204.103 297.742 211.653C294.61 217.511 292.291 223.526 289.879 229.541C289.378 230.857 288.908 232.173 288.407 233.52C286.496 238.47 285.462 239.785 283.614 240.475C283.239 240.652 282.852 240.798 282.454 240.913C281.452 241.164 280.825 238.595 281.765 234.648C283.249 228.67 285.273 222.84 287.811 217.229C290.38 211.559 293.325 205.982 296.427 200.531C301.063 192.449 305.825 184.491 311.088 176.628L311.276 176.691Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M105.858 205.92C98.4016 207.549 90.9351 209.105 83.4581 210.588C80.7012 211.12 78.007 211.809 75.2814 212.311C65.6324 214.034 55.952 215.444 46.2716 217.104C41.9796 217.762 37.6877 218.545 33.4271 219.266C30.7015 219.767 27.9446 220.174 25.1878 220.55C22.3913 220.706 19.5883 220.706 16.7918 220.55C15.0688 220.55 15.2567 219.986 16.6352 219.203C17.2931 218.764 18.3269 218.451 19.486 217.668L21.3657 216.509C21.679 216.289 22.0549 216.164 22.3996 215.882L23.5274 215.631C34.5235 213.626 45.6137 211.997 56.8292 210.368C63.5647 209.46 70.4256 207.737 77.1924 206.296C84.6485 204.688 92.0838 202.996 99.4981 201.221L113.188 197.806C120.081 196.02 127.036 194.328 133.896 192.449C139.222 191.008 144.36 189.316 149.748 187.906C150.939 187.593 152.098 187.248 153.351 187.029C157.925 186.183 160.118 187.029 160.807 189.034C160.998 189.392 161.105 189.788 161.12 190.193C161.12 190.694 160.557 190.914 159.93 191.477C159.023 192.185 157.94 192.629 156.797 192.762C152.443 193.764 147.681 195.268 142.888 196.584L128.257 200.5C120.895 202.442 113.376 204.134 105.889 205.951L105.858 205.92Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M290.819 270.832C290.819 270.487 291.038 270.08 291.164 269.704C291.289 269.328 291.164 268.764 291.164 268.733C291.164 268.701 291.164 268.733 290.944 267.981C290.608 267.291 290.232 266.621 289.816 265.976C288.939 264.597 287.905 263.156 286.684 261.778C284.522 258.927 282.172 256.17 279.76 253.445C277.348 250.719 275.499 248.996 273.494 246.709C266.289 238.658 258.676 230.857 250.625 223.276C247.085 219.829 243.576 216.446 239.942 213.376C235.314 209.59 230.402 206.165 225.249 203.132C223.683 202.066 223.965 201.534 225.938 201.001C227.461 200.572 229.055 200.459 230.623 200.669C232.191 200.879 233.699 201.408 235.055 202.223C240.746 205.631 246.005 209.712 250.719 214.378L257.611 220.863C259.992 223.056 262.216 225.375 264.409 227.755C269.672 233.426 275.625 238.783 281.045 244.547C284.177 247.68 286.934 250.813 289.754 254.29C291.164 255.982 292.542 257.705 293.858 259.491C295.314 261.362 296.573 263.377 297.617 265.506C298.061 266.491 298.295 267.558 298.306 268.639C298.178 271.346 297.448 273.991 296.169 276.381C294.891 278.771 293.095 280.846 290.913 282.454C289.202 283.835 287.329 285.002 285.337 285.932C283.291 286.979 281.073 287.647 278.789 287.905C277.582 288.046 276.362 288.046 275.155 287.905C274.092 287.646 273.045 287.322 272.022 286.934C269.999 286.088 268.068 285.039 266.258 283.801C263.544 282.087 260.948 280.193 258.488 278.131C256.051 276.167 253.719 274.075 251.502 271.865C250.562 270.863 249.622 269.892 248.745 268.733C245.331 264.942 245.362 262.812 245.612 261.214C245.637 260.843 245.7 260.475 245.8 260.117C245.8 259.647 246.521 259.679 247.492 260.117C248.922 260.6 250.265 261.308 251.471 262.216L257.736 267.386C259.804 269.171 261.84 270.988 264.002 272.649C266.164 274.309 268.2 275.938 270.268 277.285C272.087 278.586 274.124 279.551 276.283 280.136C276.627 280.293 276.878 280.136 277.191 280.136C277.504 280.136 277.786 280.136 278.006 280.136C278.245 280.104 278.487 280.104 278.726 280.136C279.098 280.057 279.465 279.952 279.823 279.823C281.459 279.29 283.026 278.565 284.491 277.661C287.317 276.177 289.534 273.749 290.756 270.8L290.819 270.832Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M243.733 293.012C246.618 295.242 249.777 297.095 253.131 298.526C254.284 298.917 255.469 299.211 256.671 299.403C258.452 299.904 260.353 299.749 262.028 298.964C264.211 297.804 266.305 296.485 268.294 295.017C270.01 293.741 271.53 292.221 272.805 290.506C274.264 288.314 275.602 286.044 276.815 283.707C277.223 282.987 278.256 283.269 279.165 284.334C279.724 285.002 280.11 285.797 280.29 286.649C280.471 287.501 280.439 288.384 280.199 289.221C278.965 292.404 277.039 295.272 274.56 297.617C272.282 299.871 269.673 301.762 266.822 303.225C264.897 304.45 262.778 305.339 260.556 305.856C258.385 306.298 256.148 306.298 253.977 305.856C249.807 304.811 245.838 303.085 242.229 300.75C240.036 299.403 237.968 297.93 235.963 296.427C232.831 294.14 230.011 291.602 227.098 289.19C224.842 287.31 222.398 285.65 220.143 283.676C219.612 283.283 219.11 282.854 218.639 282.392C216.916 280.606 216.853 279.572 218.232 277.912C218.545 277.536 218.858 277.129 219.203 276.784C219.744 276.246 220.462 275.924 221.223 275.878C221.985 275.831 222.737 276.065 223.338 276.533C227.438 279.403 231.341 282.543 235.024 285.932C237.833 288.456 240.783 290.82 243.858 293.012H243.733Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M217.793 311.464C220.832 313.814 224.108 315.84 227.567 317.511C228.761 317.997 229.986 318.405 231.233 318.732C232.167 319.025 233.136 319.194 234.115 319.234C234.49 319.269 234.868 319.269 235.243 319.234C235.713 319.234 236.371 318.795 236.903 318.607C239.213 317.745 241.411 316.609 243.451 315.224C245.191 313.985 246.698 312.447 247.899 310.681C249.262 308.434 250.386 306.051 251.252 303.57C251.502 302.912 252.755 302.818 253.977 303.789C254.716 304.39 255.265 305.192 255.56 306.097C255.854 307.003 255.881 307.975 255.637 308.895C254.547 312.355 252.519 315.446 249.779 317.824C247.285 320.125 244.385 321.941 241.227 323.181L238.47 324.309L237.749 324.622L236.778 324.967C236.12 325.186 235.493 325.217 234.836 325.374C232.563 325.555 230.277 325.3 228.1 324.622C223.954 323.179 220.039 321.143 216.477 318.576C214.316 317.135 212.217 315.443 210.212 313.97C207.079 311.558 204.228 308.895 201.283 306.358C199.028 304.353 196.553 302.661 194.391 300.468C193.89 299.998 193.388 299.528 192.95 299.027C191.321 297.053 191.227 295.894 192.292 294.672C192.518 294.35 192.769 294.046 193.044 293.764C194.015 292.949 195.362 293.169 196.678 294.171C200.719 297.085 204.604 300.625 208.677 304.039C211.809 306.577 214.754 309.115 218.075 311.339L217.793 311.464Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M166.446 304.227C170.394 307.83 174.404 311.433 178.633 314.691C180.137 315.944 181.766 316.884 183.395 318.074C186.106 320.087 188.919 321.959 191.822 323.682C194.669 325.301 197.741 326.483 200.939 327.191C203.757 327.883 206.683 328.022 209.554 327.598C212.917 326.986 215.926 325.129 217.981 322.398C218.702 321.552 219.61 322.022 220.049 323.526C220.321 324.659 220.272 325.846 219.906 326.953C219.541 328.059 218.874 329.042 217.981 329.791C216.007 331.398 213.657 332.476 211.152 332.924C208.843 333.388 206.479 333.515 204.134 333.3C201.943 333.133 199.773 332.766 197.649 332.203C196.578 331.945 195.53 331.6 194.516 331.17C193.426 330.784 192.376 330.291 191.383 329.697C186.836 327.258 182.432 324.559 178.194 321.615C173.652 318.482 169.36 314.816 165.193 311.182C162.593 308.958 160.118 306.608 157.612 304.321C153.852 300.781 150.218 297.085 146.647 293.419C143.827 290.568 140.945 287.905 138.22 284.929C137.624 284.24 137.029 283.614 136.465 282.893C134.398 280.23 134.304 278.852 135.369 277.536C135.586 277.197 135.838 276.882 136.121 276.596C137.092 275.75 138.69 276.345 140.068 277.974C144.673 282.736 149.686 287.843 154.824 292.887C158.646 296.646 162.562 300.374 166.572 303.977L166.446 304.227Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M84.8365 288.532L99.0908 283.582C100.845 282.987 102.506 282.204 104.291 281.64C110.557 279.604 116.823 277.912 123.088 276.408C125.939 275.781 128.79 274.998 131.672 274.434C133.566 273.998 135.495 273.736 137.436 273.651C139.507 273.67 141.549 274.141 143.42 275.03C144.611 275.656 143.953 276.502 142.762 277.411C141.417 278.528 139.892 279.407 138.251 280.011C131.829 280.825 124.686 282.642 117.449 284.209C113.098 285.4 108.819 286.843 104.636 288.532L90.3816 293.576L81.5784 296.709L68.2326 301.533C64.7865 302.818 61.497 304.447 57.8943 305.575C57.0938 305.835 56.2777 306.044 55.4507 306.201C52.3179 306.765 50.9395 306.201 50.3755 304.572C50.2086 304.225 50.0926 303.856 50.0309 303.476C50.0074 303.172 50.0545 302.866 50.1686 302.584C50.2828 302.301 50.4608 302.049 50.6888 301.846C51.2919 301.332 51.9814 300.929 52.7252 300.656C58.0823 298.212 64.3479 296.051 70.6135 293.607L84.8365 288.532Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M78.6578 262.126C76.539 257.824 74.7478 253.375 73.2988 248.814C72.7313 247.177 72.1009 245.54 71.6911 243.841C70.2027 237.778 69.6921 231.525 70.1779 225.308C70.3671 222.59 70.7138 219.841 71.1552 217.154C71.4486 215.407 71.87 213.683 72.4161 211.995C73.0322 210.312 73.9385 208.745 75.0956 207.362C75.7891 206.467 76.8609 207.362 77.7436 208.629C78.7514 210.114 79.2281 211.884 79.0991 213.663C77.3379 219.626 76.4464 225.803 76.4511 232.011C76.5741 235.998 77.3073 239.944 78.6263 243.717C79.8368 248.009 81.3861 252.202 83.2602 256.258C84.4266 258.79 85.7191 261.261 87.1061 263.671C89.1927 267.353 91.6084 270.847 94.325 274.111C96.4528 276.518 98.8298 278.702 101.418 280.628L103.057 281.771C105.012 283.254 105.106 283.902 104.948 285.508C104.948 285.879 104.948 286.281 104.948 286.62C105.138 287.825 102.994 288.504 100.724 287.547C97.6986 286.101 94.9479 284.157 92.5912 281.802C90.2671 279.543 88.1569 277.083 86.2865 274.451C83.4214 270.526 80.8608 266.396 78.6263 262.095L78.6578 262.126Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M330.382 117.221C329.628 115.469 328.743 113.778 327.735 112.163L326.227 109.696L324.411 107.417C323.469 106.295 322.44 105.251 321.334 104.295L318.718 101.547L315.825 99.0491C313.9 97.3142 311.842 95.7376 309.67 94.3344C307.708 93.1206 305.649 92.0761 303.515 91.2121C300.714 90.2308 298.005 88.9978 295.42 87.5278C294.62 87.0282 295.02 86.0291 296.128 85.1861C296.818 84.6799 297.603 84.3242 298.435 84.1415C299.266 83.9588 300.126 83.953 300.96 84.1245C302.548 84.4034 304.105 84.8427 305.607 85.4358C307.085 86.0603 308.685 86.716 310.039 87.4029C311.523 88.0742 312.944 88.8788 314.286 89.8071C315.68 90.6747 317.017 91.6343 318.287 92.6796C319.795 93.991 321.365 95.2087 322.996 96.3951C324.627 97.5816 326.073 99.0803 327.52 100.454C328.966 101.828 330.597 103.826 331.859 105.575C333.121 107.323 334.444 109.228 335.46 111.226C336.075 112.444 336.753 113.661 337.337 114.879L338.907 118.688C340.34 122.598 341.372 126.647 341.984 130.772C342.603 133.941 342.942 137.159 343 140.388C343 141.138 343 141.856 343 142.574C342.907 143.152 342.753 143.717 342.538 144.26C342.309 144.649 342.018 144.997 341.677 145.29C341.102 145.759 340.382 146.002 339.645 145.977C339.297 146.008 338.947 146.008 338.599 145.977C337.522 145.977 336.722 144.541 336.168 142.855C335.552 137.891 334.906 133.082 333.983 128.118C333.236 124.415 332.048 120.819 330.443 117.408L330.382 117.221Z'
                    fill='#FEFEFE'
                />
                <path
                    d='M328.413 300.405C327.974 300.405 327.974 299.841 328.413 298.745C328.622 298.271 328.896 297.828 329.227 297.429C329.521 297.273 329.824 297.137 330.136 297.022C330.292 297.022 332.141 297.367 332.799 297.398C333.393 297.469 333.974 297.627 334.522 297.868C335.649 298.306 336.809 298.651 337.968 299.027C338.233 299.112 338.479 299.251 338.688 299.434C339.441 300.027 340.339 300.406 341.289 300.531C341.366 300.569 341.452 300.589 341.539 300.589C341.626 300.589 341.712 300.569 341.79 300.531C342.878 300.503 343.956 300.751 344.923 301.251C345.598 301.838 346.309 302.383 347.053 302.88C347.053 302.88 347.304 302.88 347.335 303.194C347.366 303.507 347.711 303.757 347.961 303.883C348.303 304.059 348.619 304.28 348.901 304.541C349.04 304.78 349.155 305.032 349.246 305.293C349.267 305.649 349.167 306.002 348.964 306.295C348.745 306.483 348.776 306.859 348.713 307.172V307.486C347.857 307.933 346.938 308.25 345.988 308.425L344.359 308.206L342.448 308.018C342.26 308.018 342.103 308.018 341.946 307.736L339.284 307.235C338.814 306.984 338.25 306.984 337.905 306.358C337.905 306.358 337.748 306.358 337.623 306.358C336.764 306.046 335.944 305.636 335.18 305.136C334.772 304.917 334.334 304.76 333.895 304.572C333.457 304.384 333.895 304.572 333.707 304.384C333.519 304.196 333.707 304.196 333.457 304.165C332.423 303.757 331.546 303.068 330.324 302.724C330.073 302.724 329.227 301.596 328.945 301.502C328.663 301.408 328.601 300.374 328.413 300.405Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M289.002 336.871C288.626 336.558 289.315 336.276 290.6 335.994C291.223 335.9 291.856 335.9 292.479 335.994C292.804 336.151 293.118 336.329 293.419 336.527C293.827 337.382 294.183 338.26 294.484 339.158C294.7 339.75 294.795 340.378 294.766 341.007C294.766 342.26 294.766 343.513 294.766 344.735C294.753 345.019 294.678 345.297 294.547 345.549C294.125 346.404 293.941 347.356 294.014 348.306C293.976 348.378 293.956 348.459 293.956 348.541C293.956 348.623 293.976 348.704 294.014 348.776C294.291 349.802 294.291 350.883 294.014 351.909C293.554 352.647 293.136 353.411 292.761 354.196C292.761 354.196 292.761 354.415 292.511 354.478C292.26 354.54 291.978 354.916 291.915 355.167C291.824 355.518 291.665 355.849 291.446 356.138C291.446 356.138 291.007 356.42 290.725 356.577C290.333 356.664 289.926 356.664 289.535 356.577C289.253 356.389 288.845 356.577 288.501 356.577H288.219C287.589 355.872 287.081 355.067 286.715 354.196V352.661C286.715 351.909 286.715 351.094 286.715 350.938C286.715 350.781 286.715 350.593 286.934 350.436C287.154 350.28 286.715 348.055 286.746 347.993C286.778 347.93 286.746 347.053 287.248 346.646C287.267 346.601 287.278 346.553 287.278 346.505C287.278 346.456 287.267 346.408 287.248 346.364C287.284 345.564 287.432 344.773 287.686 344.014C287.717 343.607 287.717 343.199 287.686 342.792V342.604C287.71 342.512 287.71 342.415 287.686 342.322C287.796 341.375 287.796 340.419 287.686 339.472C287.686 339.252 288.25 338.218 288.187 337.968C288.125 337.717 289.159 336.997 289.002 336.871Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M99.3728 110.118C98.9342 110.118 98.9969 109.586 99.3728 108.615C99.5412 108.171 99.7969 107.767 100.125 107.424C100.391 107.275 100.675 107.159 100.971 107.08C100.971 107.08 102.85 107.518 103.477 107.643C104.045 107.747 104.587 107.96 105.075 108.27L108.207 109.93C108.434 110.061 108.636 110.23 108.803 110.432C109.387 111.119 110.129 111.656 110.964 111.998C110.964 111.998 111.215 111.998 111.403 111.998C112.367 112.277 113.256 112.769 114.003 113.439C114.473 114.128 115.006 114.724 115.538 115.381C115.538 115.381 115.726 115.381 115.726 115.695C115.726 116.008 115.914 116.29 116.102 116.478C116.363 116.698 116.594 116.951 116.791 117.23C116.83 117.489 116.83 117.753 116.791 118.013C116.723 118.352 116.548 118.66 116.29 118.89C116.039 118.89 115.977 119.36 115.82 119.642V119.924C114.97 120.066 114.102 120.066 113.251 119.924L111.904 119.329L110.306 118.702C110.15 118.702 110.056 118.452 109.962 118.326C109.868 118.201 107.8 117.449 107.737 117.355C107.675 117.261 106.892 116.979 106.735 116.353C106.735 116.353 106.735 116.353 106.547 116.133C105.868 115.713 105.238 115.219 104.667 114.661C104.343 114.403 103.997 114.172 103.633 113.972C103.633 113.972 103.633 113.972 103.633 113.784C103.589 113.688 103.525 113.603 103.445 113.533C102.678 112.957 101.872 112.434 101.033 111.967C100.845 111.967 100.187 110.902 99.9367 110.808C99.6861 110.714 99.5294 110.087 99.3728 110.118Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M156.421 62.6562C156.139 62.0923 156.954 61.8104 158.395 61.6851C159.074 61.6822 159.746 61.8209 160.369 62.0923C160.688 62.4156 160.972 62.7728 161.215 63.1575C161.215 63.3455 161.465 66.2903 161.559 67.3241C161.632 68.28 161.558 69.2414 161.34 70.175L160.431 75.8141C160.372 76.233 160.234 76.637 160.024 77.0045C159.405 78.3091 159.064 79.7279 159.022 81.1712C158.97 81.2897 158.943 81.4177 158.943 81.5471C158.943 81.6765 158.97 81.8045 159.022 81.923C159.113 83.4941 158.954 85.0696 158.552 86.5909C157.969 87.7388 157.456 88.921 157.017 90.131C157.017 90.319 157.017 90.5069 156.766 90.6323C156.515 90.7576 156.202 91.3528 156.108 91.7287C156.01 92.2631 155.863 92.7874 155.669 93.2951C155.47 93.6006 155.215 93.8661 154.918 94.0784C154.536 94.235 154.108 94.235 153.727 94.0784C153.445 93.8277 153.038 94.0784 152.693 94.0784C152.558 94.0939 152.421 94.0939 152.286 94.0784C151.571 92.9293 151.023 91.6847 150.657 90.3816L150.375 84.9305C150.393 84.6383 150.49 84.3566 150.657 84.116C150.657 83.9594 150.657 80.1687 150.657 80.012C150.845 79.2601 150.657 78.4456 151.44 77.7877C151.501 77.637 151.501 77.4685 151.44 77.3178C151.667 76.0079 152.003 74.719 152.443 73.4644C152.611 72.8138 152.747 72.1551 152.85 71.4908C152.893 71.376 152.957 71.2699 153.038 71.1775C153.123 71.0379 153.197 70.8911 153.257 70.7389C153.653 69.2131 153.957 67.6648 154.166 66.1023C154.166 65.7264 155.168 64.16 155.168 63.7527C155.168 63.3455 156.641 62.9382 156.421 62.6562Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M199.685 215.725C198.182 217.981 196.49 219.798 194.798 221.897C194.203 222.68 193.576 223.432 192.918 224.184C190.579 226.743 188.078 229.15 185.431 231.39L181.922 234.522C180.413 235.757 178.798 236.857 177.098 237.812C176.565 238.094 176.471 237.812 176.722 237.311C177.112 236.504 177.654 235.78 178.32 235.18C179.729 233.77 181.202 232.517 182.674 231.264C184.147 230.011 185.619 228.695 187.06 227.348C188.785 225.69 190.377 223.899 191.822 221.991C193.493 219.983 195.061 217.891 196.521 215.725C197.43 214.378 198.307 212.969 199.121 211.559C200.363 209.421 201.482 207.214 202.474 204.949C203.194 203.163 203.758 201.377 204.353 199.591L204.729 198.401C205.293 196.96 205.669 196.584 206.327 196.427H206.766C207.204 196.427 207.361 197.148 207.204 198.338C206.906 200.101 206.477 201.84 205.92 203.539C205.304 205.253 204.582 206.927 203.758 208.551C202.542 211.02 201.182 213.416 199.685 215.725Z'
                    fill='#FEFEFE'
                />
            </svg>
        </>
    )
}

export default Hero
