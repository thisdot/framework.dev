import classNames from 'classnames';
import React from 'react';
import { iconStyle } from './icon.css';
import { type FrameworkIconProps } from './shared-icon-types';

export const ReactFrameworkIcon = React.forwardRef<
	SVGSVGElement,
	FrameworkIconProps
>(function ReactFrameworkIcon({ className, size, stretched, ...props }, ref) {
	return stretched ? (
		<svg
			className={classNames(className, iconStyle({ size }))}
			width="258"
			height="34"
			viewBox="0 0 258 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				d="M43.3281 25V13H46.5547V15.0937H46.6797C46.8984 14.349 47.2656 13.7865 47.7813 13.4063C48.2969 13.0208 48.8906 12.8281 49.5625 12.8281C49.7292 12.8281 49.9089 12.8385 50.1016 12.8594C50.2943 12.8802 50.4635 12.9089 50.6094 12.9453V15.8984C50.4531 15.8516 50.237 15.8099 49.9609 15.7734C49.6849 15.737 49.4323 15.7188 49.2031 15.7188C48.7135 15.7188 48.276 15.8255 47.8906 16.0391C47.5104 16.2474 47.2083 16.5391 46.9844 16.9141C46.7656 17.2891 46.6563 17.7214 46.6563 18.2109V25H43.3281ZM56.5802 25.2344C55.3459 25.2344 54.2834 24.9844 53.3927 24.4844C52.5073 23.9792 51.825 23.2656 51.3459 22.3437C50.8667 21.4167 50.6271 20.3203 50.6271 19.0547C50.6271 17.8203 50.8667 16.737 51.3459 15.8047C51.825 14.8724 52.4995 14.1458 53.3693 13.625C54.2443 13.1042 55.2703 12.8438 56.4474 12.8438C57.2391 12.8438 57.9761 12.9714 58.6584 13.2266C59.3459 13.4766 59.9448 13.8542 60.4552 14.3594C60.9709 14.8646 61.3719 15.5 61.6584 16.2656C61.9448 17.026 62.088 17.9167 62.088 18.9375V19.8516H51.9552V17.7891H58.9552C58.9552 17.3099 58.8511 16.8854 58.6427 16.5156C58.4344 16.1458 58.1453 15.8568 57.7755 15.6484C57.411 15.4349 56.9865 15.3281 56.5021 15.3281C55.9969 15.3281 55.549 15.4453 55.1584 15.6797C54.7729 15.9089 54.4709 16.2187 54.2521 16.6094C54.0334 16.9948 53.9214 17.4245 53.9162 17.8984V19.8594C53.9162 20.4531 54.0255 20.9661 54.2443 21.3984C54.4683 21.8307 54.7834 22.1641 55.1896 22.3984C55.5959 22.6328 56.0776 22.75 56.6349 22.75C57.0047 22.75 57.3433 22.6979 57.6505 22.5938C57.9578 22.4896 58.2209 22.3333 58.4396 22.125C58.6584 21.9167 58.825 21.6615 58.9396 21.3594L62.0177 21.5625C61.8615 22.3021 61.5412 22.9479 61.0568 23.5C60.5776 24.0469 59.9578 24.474 59.1974 24.7813C58.4422 25.0833 57.5698 25.2344 56.5802 25.2344ZM67.0218 25.2266C66.2562 25.2266 65.5739 25.0938 64.9749 24.8281C64.376 24.5573 63.902 24.1589 63.553 23.6328C63.2093 23.1016 63.0374 22.4401 63.0374 21.6484C63.0374 20.9818 63.1598 20.4219 63.4046 19.9687C63.6494 19.5156 63.9827 19.151 64.4046 18.875C64.8265 18.599 65.3057 18.3906 65.8421 18.25C66.3838 18.1094 66.9515 18.0104 67.5452 17.9531C68.2432 17.8802 68.8057 17.8125 69.2327 17.75C69.6598 17.6823 69.9697 17.5833 70.1624 17.4531C70.3551 17.3229 70.4515 17.1302 70.4515 16.875V16.8281C70.4515 16.3333 70.2952 15.9505 69.9827 15.6797C69.6754 15.4089 69.2379 15.2734 68.6702 15.2734C68.0713 15.2734 67.5947 15.4062 67.2405 15.6719C66.8864 15.9323 66.652 16.2604 66.5374 16.6562L63.4593 16.4062C63.6155 15.6771 63.9228 15.0469 64.3812 14.5156C64.8395 13.9792 65.4307 13.5677 66.1546 13.2812C66.8838 12.9896 67.7275 12.8438 68.6859 12.8438C69.3525 12.8438 69.9905 12.9219 70.5999 13.0781C71.2145 13.2344 71.7588 13.4766 72.2327 13.8047C72.7119 14.1328 73.0895 14.5547 73.3655 15.0703C73.6416 15.5807 73.7796 16.1927 73.7796 16.9062V25H70.6234V23.3359H70.5296C70.3369 23.7109 70.0791 24.0417 69.7562 24.3281C69.4333 24.6094 69.0452 24.8307 68.5921 24.9922C68.139 25.1484 67.6155 25.2266 67.0218 25.2266ZM67.9749 22.9297C68.4645 22.9297 68.8968 22.8333 69.2718 22.6406C69.6468 22.4427 69.9411 22.1771 70.1546 21.8438C70.3682 21.5104 70.4749 21.1328 70.4749 20.7109V19.4375C70.3708 19.5052 70.2275 19.5677 70.0452 19.625C69.8682 19.6771 69.6676 19.7266 69.4437 19.7734C69.2197 19.8151 68.9958 19.8542 68.7718 19.8906C68.5478 19.9219 68.3447 19.9505 68.1624 19.9766C67.7718 20.0339 67.4307 20.125 67.139 20.25C66.8473 20.375 66.6208 20.5443 66.4593 20.7578C66.2978 20.9661 66.2171 21.2266 66.2171 21.5391C66.2171 21.9922 66.3812 22.3385 66.7093 22.5781C67.0426 22.8125 67.4645 22.9297 67.9749 22.9297ZM81.1235 25.2344C79.8943 25.2344 78.8371 24.974 77.9516 24.4531C77.0714 23.9271 76.3943 23.1979 75.9204 22.2656C75.4516 21.3333 75.2173 20.2604 75.2173 19.0469C75.2173 17.8177 75.4542 16.7396 75.9282 15.8125C76.4074 14.8802 77.0871 14.1536 77.9673 13.6328C78.8475 13.1068 79.8943 12.8438 81.1079 12.8438C82.1548 12.8438 83.0714 13.0339 83.8579 13.4141C84.6443 13.7943 85.2667 14.3281 85.7251 15.0156C86.1834 15.7031 86.436 16.5104 86.4829 17.4375H83.3423C83.2537 16.8385 83.0193 16.3568 82.6391 15.9922C82.2641 15.6224 81.772 15.4375 81.1626 15.4375C80.647 15.4375 80.1964 15.5781 79.811 15.8594C79.4308 16.1354 79.1339 16.5391 78.9204 17.0703C78.7068 17.6016 78.6001 18.2448 78.6001 19C78.6001 19.7656 78.7042 20.4167 78.9126 20.9531C79.1261 21.4896 79.4256 21.8984 79.811 22.1797C80.1964 22.4609 80.647 22.6016 81.1626 22.6016C81.5428 22.6016 81.8839 22.5234 82.186 22.3672C82.4933 22.2109 82.7459 21.9844 82.9438 21.6875C83.147 21.3854 83.2798 21.0234 83.3423 20.6016H86.4829C86.4308 21.5182 86.1808 22.3255 85.7329 23.0234C85.2902 23.7161 84.6782 24.2578 83.897 24.6484C83.1157 25.0391 82.1912 25.2344 81.1235 25.2344ZM94.3366 13V15.5H87.11V13H94.3366ZM88.7506 10.125H92.0788V21.3125C92.0788 21.6198 92.1256 21.8594 92.2194 22.0312C92.3131 22.1979 92.4433 22.3151 92.61 22.3828C92.7819 22.4505 92.9798 22.4844 93.2038 22.4844C93.36 22.4844 93.5163 22.4714 93.6725 22.4453C93.8288 22.4141 93.9485 22.3906 94.0319 22.375L94.5553 24.8516C94.3886 24.9036 94.1543 24.9635 93.8522 25.0313C93.5501 25.1042 93.1829 25.1484 92.7506 25.1641C91.9485 25.1953 91.2454 25.0885 90.6413 24.8437C90.0423 24.599 89.5761 24.2187 89.2428 23.7031C88.9095 23.1875 88.7454 22.5365 88.7506 21.75V10.125ZM97.7898 25.2031C97.2742 25.2031 96.8315 25.0208 96.4617 24.6562C96.0971 24.2865 95.9148 23.8437 95.9148 23.3281C95.9148 22.8177 96.0971 22.3802 96.4617 22.0156C96.8315 21.651 97.2742 21.4687 97.7898 21.4687C98.2898 21.4687 98.7273 21.651 99.1023 22.0156C99.4773 22.3802 99.6648 22.8177 99.6648 23.3281C99.6648 23.6719 99.5763 23.987 99.3992 24.2734C99.2273 24.5547 99.0008 24.7812 98.7195 24.9531C98.4383 25.1198 98.1284 25.2031 97.7898 25.2031Z"
				fill="#02D4F5"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_2082_104651)"
				fillOpacity="0.2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 33.1053C25.8947 33.1053 33.1053 25.8947 33.1053 17C33.1053 8.10531 25.8947 0.894737 17 0.894737C8.10531 0.894737 0.894737 8.10531 0.894737 17C0.894737 25.8947 8.10531 33.1053 17 33.1053ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
				fill="#747778"
			/>
			<path
				d="M19 25V22.9834C17.578 22.9834 17.29 22.4081 17.29 21.1881V19.3422C17.29 18.3686 16.894 17.4962 15.154 17.1233V16.8704C16.894 16.4974 17.29 15.625 17.29 14.6578V12.8119C17.29 11.5855 17.578 11.0103 19 11.0103V9C16.576 9 14.842 9.42355 14.842 12.5401V13.9372C14.842 15.2331 14.38 15.7831 13 15.7831V18.2106C14.38 18.2106 14.842 18.7606 14.842 20.0565V21.4599C14.842 24.5765 16.576 25 19 25Z"
				fill="white"
			/>
			<path
				d="M109.781 13V15.5H102.375V13H109.781ZM104.07 25V12.1328C104.07 11.263 104.24 10.5417 104.578 9.96875C104.922 9.39583 105.391 8.96614 105.984 8.67969C106.578 8.39323 107.253 8.25 108.008 8.25C108.518 8.25 108.984 8.28906 109.406 8.36719C109.833 8.44531 110.151 8.51562 110.359 8.57812L109.766 11.0781C109.635 11.0365 109.474 10.9974 109.281 10.9609C109.094 10.9245 108.901 10.9062 108.703 10.9062C108.214 10.9062 107.872 11.0208 107.68 11.25C107.487 11.474 107.391 11.7891 107.391 12.1953V25H104.07ZM111.154 25V13H114.381V15.0937H114.506C114.725 14.349 115.092 13.7865 115.608 13.4063C116.123 13.0208 116.717 12.8281 117.389 12.8281C117.555 12.8281 117.735 12.8385 117.928 12.8594C118.121 12.8802 118.29 12.9089 118.436 12.9453V15.8984C118.279 15.8516 118.063 15.8099 117.787 15.7734C117.511 15.737 117.259 15.7188 117.029 15.7188C116.54 15.7188 116.102 15.8255 115.717 16.0391C115.337 16.2474 115.035 16.5391 114.811 16.9141C114.592 17.2891 114.483 17.7214 114.483 18.2109V25H111.154ZM122.575 25.2266C121.809 25.2266 121.127 25.0938 120.528 24.8281C119.929 24.5573 119.455 24.1589 119.106 23.6328C118.762 23.1016 118.59 22.4401 118.59 21.6484C118.59 20.9818 118.713 20.4219 118.957 19.9687C119.202 19.5156 119.535 19.151 119.957 18.875C120.379 18.599 120.858 18.3906 121.395 18.25C121.937 18.1094 122.504 18.0104 123.098 17.9531C123.796 17.8802 124.358 17.8125 124.785 17.75C125.213 17.6823 125.522 17.5833 125.715 17.4531C125.908 17.3229 126.004 17.1302 126.004 16.875V16.8281C126.004 16.3333 125.848 15.9505 125.535 15.6797C125.228 15.4089 124.791 15.2734 124.223 15.2734C123.624 15.2734 123.147 15.4062 122.793 15.6719C122.439 15.9323 122.205 16.2604 122.09 16.6562L119.012 16.4062C119.168 15.6771 119.476 15.0469 119.934 14.5156C120.392 13.9792 120.983 13.5677 121.707 13.2812C122.437 12.9896 123.28 12.8438 124.239 12.8438C124.905 12.8438 125.543 12.9219 126.153 13.0781C126.767 13.2344 127.312 13.4766 127.785 13.8047C128.265 14.1328 128.642 14.5547 128.918 15.0703C129.194 15.5807 129.332 16.1927 129.332 16.9062V25H126.176V23.3359H126.082C125.89 23.7109 125.632 24.0417 125.309 24.3281C124.986 24.6094 124.598 24.8307 124.145 24.9922C123.692 25.1484 123.168 25.2266 122.575 25.2266ZM123.528 22.9297C124.017 22.9297 124.45 22.8333 124.825 22.6406C125.2 22.4427 125.494 22.1771 125.707 21.8438C125.921 21.5104 126.028 21.1328 126.028 20.7109V19.4375C125.923 19.5052 125.78 19.5677 125.598 19.625C125.421 19.6771 125.22 19.7266 124.996 19.7734C124.772 19.8151 124.548 19.8542 124.325 19.8906C124.101 19.9219 123.897 19.9505 123.715 19.9766C123.325 20.0339 122.983 20.125 122.692 20.25C122.4 20.375 122.173 20.5443 122.012 20.7578C121.851 20.9661 121.77 21.2266 121.77 21.5391C121.77 21.9922 121.934 22.3385 122.262 22.5781C122.595 22.8125 123.017 22.9297 123.528 22.9297ZM131.254 25V13H134.426V15.1172H134.567C134.817 14.4141 135.234 13.8594 135.817 13.4531C136.4 13.0469 137.098 12.8438 137.911 12.8438C138.734 12.8438 139.434 13.0495 140.012 13.4609C140.59 13.8672 140.976 14.4193 141.168 15.1172H141.293C141.538 14.4297 141.981 13.8802 142.622 13.4687C143.267 13.0521 144.03 12.8438 144.911 12.8438C146.03 12.8438 146.939 13.2005 147.637 13.9141C148.34 14.6224 148.692 15.6276 148.692 16.9297V25H145.372V17.5859C145.372 16.9193 145.194 16.4193 144.84 16.0859C144.486 15.7526 144.043 15.5859 143.512 15.5859C142.908 15.5859 142.437 15.7786 142.098 16.1641C141.76 16.5443 141.59 17.0469 141.59 17.6719V25H138.364V17.5156C138.364 16.9271 138.194 16.4583 137.856 16.1094C137.523 15.7604 137.083 15.5859 136.536 15.5859C136.166 15.5859 135.833 15.6797 135.536 15.8672C135.244 16.0495 135.012 16.3073 134.84 16.6406C134.668 16.9687 134.583 17.3542 134.583 17.7969V25H131.254ZM156.13 25.2344C154.895 25.2344 153.833 24.9844 152.942 24.4844C152.057 23.9792 151.374 23.2656 150.895 22.3437C150.416 21.4167 150.176 20.3203 150.176 19.0547C150.176 17.8203 150.416 16.737 150.895 15.8047C151.374 14.8724 152.049 14.1458 152.919 13.625C153.794 13.1042 154.82 12.8438 155.997 12.8438C156.788 12.8438 157.525 12.9714 158.208 13.2266C158.895 13.4766 159.494 13.8542 160.005 14.3594C160.52 14.8646 160.921 15.5 161.208 16.2656C161.494 17.026 161.637 17.9167 161.637 18.9375V19.8516H151.505V17.7891H158.505C158.505 17.3099 158.4 16.8854 158.192 16.5156C157.984 16.1458 157.695 15.8568 157.325 15.6484C156.96 15.4349 156.536 15.3281 156.051 15.3281C155.546 15.3281 155.098 15.4453 154.708 15.6797C154.322 15.9089 154.02 16.2187 153.801 16.6094C153.583 16.9948 153.471 17.4245 153.465 17.8984V19.8594C153.465 20.4531 153.575 20.9661 153.794 21.3984C154.018 21.8307 154.333 22.1641 154.739 22.3984C155.145 22.6328 155.627 22.75 156.184 22.75C156.554 22.75 156.893 22.6979 157.2 22.5938C157.507 22.4896 157.77 22.3333 157.989 22.125C158.208 21.9167 158.374 21.6615 158.489 21.3594L161.567 21.5625C161.411 22.3021 161.09 22.9479 160.606 23.5C160.127 24.0469 159.507 24.474 158.747 24.7813C157.992 25.0833 157.119 25.2344 156.13 25.2344ZM165.43 25L162.165 13H165.532L167.391 21.0625H167.501L169.438 13H172.743L174.712 21.0156H174.813L176.641 13H180.001L176.743 25H173.22L171.157 17.4531H171.009L168.946 25H165.43ZM186.237 25.2344C185.024 25.2344 183.974 24.9766 183.089 24.4609C182.209 23.9401 181.529 23.2161 181.05 22.2891C180.571 21.3568 180.331 20.276 180.331 19.0469C180.331 17.8073 180.571 16.724 181.05 15.7969C181.529 14.8646 182.209 14.1406 183.089 13.625C183.974 13.1042 185.024 12.8438 186.237 12.8438C187.451 12.8438 188.498 13.1042 189.378 13.625C190.263 14.1406 190.946 14.8646 191.425 15.7969C191.904 16.724 192.144 17.8073 192.144 19.0469C192.144 20.276 191.904 21.3568 191.425 22.2891C190.946 23.2161 190.263 23.9401 189.378 24.4609C188.498 24.9766 187.451 25.2344 186.237 25.2344ZM186.253 22.6562C186.805 22.6562 187.266 22.5 187.636 22.1875C188.005 21.8698 188.284 21.4375 188.472 20.8906C188.664 20.3437 188.761 19.7214 188.761 19.0234C188.761 18.3255 188.664 17.7031 188.472 17.1562C188.284 16.6094 188.005 16.1771 187.636 15.8594C187.266 15.5417 186.805 15.3828 186.253 15.3828C185.696 15.3828 185.227 15.5417 184.847 15.8594C184.472 16.1771 184.188 16.6094 183.995 17.1562C183.808 17.7031 183.714 18.3255 183.714 19.0234C183.714 19.7214 183.808 20.3437 183.995 20.8906C184.188 21.4375 184.472 21.8698 184.847 22.1875C185.227 22.5 185.696 22.6562 186.253 22.6562ZM193.648 25V13H196.874V15.0937H196.999C197.218 14.349 197.585 13.7865 198.101 13.4063C198.616 13.0208 199.21 12.8281 199.882 12.8281C200.049 12.8281 200.228 12.8385 200.421 12.8594C200.614 12.8802 200.783 12.9089 200.929 12.9453V15.8984C200.773 15.8516 200.556 15.8099 200.28 15.7734C200.004 15.737 199.752 15.7188 199.523 15.7188C199.033 15.7188 198.595 15.8255 198.21 16.0391C197.83 16.2474 197.528 16.5391 197.304 16.9141C197.085 17.2891 196.976 17.7214 196.976 18.2109V25H193.648ZM205.005 21.5469L205.013 17.5547H205.497L209.341 13H213.161L207.997 19.0313H207.208L205.005 21.5469ZM201.99 25V9H205.318V25H201.99ZM209.49 25L205.958 19.7734L208.177 17.4219L213.388 25H209.49ZM216.08 25.2031C215.564 25.2031 215.121 25.0208 214.751 24.6562C214.387 24.2865 214.205 23.8437 214.205 23.3281C214.205 22.8177 214.387 22.3802 214.751 22.0156C215.121 21.651 215.564 21.4687 216.08 21.4687C216.58 21.4687 217.017 21.651 217.392 22.0156C217.767 22.3802 217.955 22.8177 217.955 23.3281C217.955 23.6719 217.866 23.987 217.689 24.2734C217.517 24.5547 217.29 24.7812 217.009 24.9531C216.728 25.1198 216.418 25.2031 216.08 25.2031ZM224.449 25.1953C223.537 25.1953 222.712 24.9609 221.972 24.4922C221.238 24.0182 220.655 23.3229 220.222 22.4062C219.795 21.4844 219.582 20.3542 219.582 19.0156C219.582 17.6406 219.803 16.4974 220.246 15.5859C220.688 14.6693 221.277 13.9844 222.011 13.5313C222.751 13.0729 223.561 12.8438 224.441 12.8438C225.113 12.8438 225.673 12.9583 226.121 13.1875C226.574 13.4115 226.938 13.6927 227.214 14.0312C227.496 14.3646 227.709 14.6927 227.855 15.0156H227.957V9H231.277V25H227.996V23.0781H227.855C227.699 23.4115 227.477 23.7422 227.191 24.0703C226.91 24.3932 226.543 24.6615 226.089 24.875C225.642 25.0885 225.095 25.1953 224.449 25.1953ZM225.504 22.5469C226.04 22.5469 226.493 22.401 226.863 22.1094C227.238 21.8125 227.524 21.3984 227.722 20.8672C227.925 20.3359 228.027 19.7135 228.027 19C228.027 18.2865 227.928 17.6667 227.73 17.1406C227.532 16.6146 227.246 16.2083 226.871 15.9219C226.496 15.6354 226.04 15.4922 225.504 15.4922C224.957 15.4922 224.496 15.6406 224.121 15.9375C223.746 16.2344 223.462 16.6458 223.269 17.1719C223.076 17.6979 222.98 18.3073 222.98 19C222.98 19.6979 223.076 20.3151 223.269 20.8516C223.467 21.3828 223.751 21.7995 224.121 22.1016C224.496 22.3984 224.957 22.5469 225.504 22.5469ZM238.822 25.2344C237.588 25.2344 236.525 24.9844 235.635 24.4844C234.749 23.9792 234.067 23.2656 233.588 22.3437C233.108 21.4167 232.869 20.3203 232.869 19.0547C232.869 17.8203 233.108 16.737 233.588 15.8047C234.067 14.8724 234.741 14.1458 235.611 13.625C236.486 13.1042 237.512 12.8438 238.689 12.8438C239.481 12.8438 240.218 12.9714 240.9 13.2266C241.588 13.4766 242.187 13.8542 242.697 14.3594C243.213 14.8646 243.614 15.5 243.9 16.2656C244.187 17.026 244.33 17.9167 244.33 18.9375V19.8516H234.197V17.7891H241.197C241.197 17.3099 241.093 16.8854 240.885 16.5156C240.676 16.1458 240.387 15.8568 240.017 15.6484C239.653 15.4349 239.228 15.3281 238.744 15.3281C238.239 15.3281 237.791 15.4453 237.4 15.6797C237.015 15.9089 236.713 16.2187 236.494 16.6094C236.275 16.9948 236.163 17.4245 236.158 17.8984V19.8594C236.158 20.4531 236.267 20.9661 236.486 21.3984C236.71 21.8307 237.025 22.1641 237.431 22.3984C237.838 22.6328 238.319 22.75 238.877 22.75C239.247 22.75 239.585 22.6979 239.892 22.5938C240.2 22.4896 240.463 22.3333 240.681 22.125C240.9 21.9167 241.067 21.6615 241.181 21.3594L244.26 21.5625C244.103 22.3021 243.783 22.9479 243.299 23.5C242.819 24.0469 242.2 24.474 241.439 24.7813C240.684 25.0833 239.812 25.2344 238.822 25.2344ZM256.707 13L252.512 25H248.762L244.566 13H248.082L250.574 21.5859H250.699L253.184 13H256.707Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2082_104651"
					x1="0"
					y1="0"
					x2="34"
					y2="34"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	) : (
		<svg
			width="155"
			height="34"
			viewBox="0 0 155 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			className={classNames(className, iconStyle({ size }))}
			{...props}
		>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_1527_99649)"
				fillOpacity="0.2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 33.1053C25.8947 33.1053 33.1053 25.8947 33.1053 17C33.1053 8.10531 25.8947 0.894737 17 0.894737C8.10531 0.894737 0.894737 8.10531 0.894737 17C0.894737 25.8947 8.10531 33.1053 17 33.1053ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
				fill="#747778"
			/>
			<path
				d="M19 25V22.9834C17.578 22.9834 17.29 22.4081 17.29 21.1881V19.3422C17.29 18.3686 16.894 17.4962 15.154 17.1233V16.8704C16.894 16.4974 17.29 15.625 17.29 14.6578V12.8119C17.29 11.5855 17.578 11.0103 19 11.0103V9C16.576 9 14.842 9.42355 14.842 12.5401V13.9372C14.842 15.2331 14.38 15.7831 13 15.7831V18.2106C14.38 18.2106 14.842 18.7606 14.842 20.0565V21.4599C14.842 24.5765 16.576 25 19 25Z"
				fill="white"
			/>
			<path
				d="M42.9658 13V4.27273H45.3124V5.79546H45.4033C45.5624 5.25379 45.8295 4.8447 46.2045 4.56819C46.5795 4.28788 47.0113 4.14773 47.4999 4.14773C47.6211 4.14773 47.7518 4.15531 47.892 4.17046C48.0321 4.18561 48.1552 4.20644 48.2613 4.23296V6.38069C48.1476 6.3466 47.9904 6.31629 47.7897 6.28978C47.5889 6.26326 47.4052 6.25001 47.2385 6.25001C46.8825 6.25001 46.5643 6.32766 46.284 6.48296C46.0075 6.63448 45.7878 6.8466 45.6249 7.11932C45.4658 7.39205 45.3863 7.70645 45.3863 8.06251V13H42.9658Z"
				fill="#02D4F5"
			/>
			<path
				d="M52.6037 13.1705C51.706 13.1705 50.9333 12.9886 50.2855 12.625C49.6416 12.2576 49.1454 11.7386 48.7969 11.0682C48.4484 10.3939 48.2742 9.5966 48.2742 8.67614C48.2742 7.77841 48.4484 6.99054 48.7969 6.31251C49.1454 5.63448 49.6359 5.10607 50.2685 4.72728C50.9049 4.34849 51.6511 4.1591 52.5071 4.1591C53.0829 4.1591 53.6189 4.2519 54.1151 4.43751C54.6151 4.61932 55.0507 4.89394 55.4219 5.26137C55.7969 5.62879 56.0886 6.09091 56.2969 6.64773C56.5052 7.20076 56.6094 7.84849 56.6094 8.59091V9.25569H49.2401V7.75569H54.331C54.331 7.4072 54.2552 7.09849 54.1037 6.82955C53.9522 6.56061 53.742 6.35038 53.473 6.19887C53.2079 6.04357 52.8992 5.96591 52.5469 5.96591C52.1795 5.96591 51.8537 6.05114 51.5696 6.2216C51.2893 6.38826 51.0696 6.61364 50.9105 6.89773C50.7514 7.17804 50.67 7.49054 50.6662 7.83523V9.26137C50.6662 9.69319 50.7458 10.0663 50.9049 10.3807C51.0677 10.6951 51.2969 10.9375 51.5924 11.108C51.8878 11.2784 52.2382 11.3636 52.6435 11.3636C52.9124 11.3636 53.1586 11.3258 53.3821 11.25C53.6056 11.1742 53.7969 11.0606 53.956 10.9091C54.1151 10.7576 54.2363 10.572 54.3196 10.3523L56.5583 10.5C56.4446 11.0379 56.2117 11.5076 55.8594 11.9091C55.5109 12.3068 55.0602 12.6174 54.5071 12.8409C53.9579 13.0606 53.3234 13.1705 52.6037 13.1705Z"
				fill="#02D4F5"
			/>
			<path
				d="M60.1976 13.1648C59.6408 13.1648 59.1446 13.0682 58.7089 12.875C58.2733 12.678 57.9286 12.3883 57.6749 12.0057C57.4249 11.6193 57.2999 11.1383 57.2999 10.5625C57.2999 10.0777 57.3889 9.67046 57.5669 9.34091C57.7449 9.01137 57.9874 8.74622 58.2942 8.54546C58.601 8.3447 58.9495 8.19319 59.3396 8.09091C59.7336 7.98864 60.1464 7.91667 60.5783 7.87501C61.0858 7.82198 61.4949 7.77273 61.8055 7.72728C62.1161 7.67804 62.3415 7.60607 62.4817 7.51137C62.6218 7.41667 62.6919 7.27652 62.6919 7.09091V7.05682C62.6919 6.69698 62.5783 6.41857 62.351 6.2216C62.1275 6.02463 61.8093 5.92614 61.3964 5.92614C60.9608 5.92614 60.6142 6.02273 60.3567 6.21591C60.0991 6.40531 59.9286 6.64395 59.8453 6.93182L57.6067 6.75001C57.7203 6.2197 57.9438 5.76137 58.2771 5.37501C58.6105 4.98485 59.0404 4.68561 59.5669 4.47728C60.0972 4.26516 60.7108 4.1591 61.4078 4.1591C61.8927 4.1591 62.3567 4.21591 62.7999 4.32955C63.2468 4.44319 63.6427 4.61932 63.9874 4.85796C64.3358 5.0966 64.6105 5.40341 64.8112 5.77841C65.012 6.14963 65.1124 6.5947 65.1124 7.11364V13H62.8169V11.7898H62.7487C62.6086 12.0625 62.4211 12.303 62.1862 12.5114C61.9514 12.7159 61.6692 12.8769 61.3396 12.9943C61.0101 13.108 60.6294 13.1648 60.1976 13.1648ZM60.8908 11.4943C61.2468 11.4943 61.5612 11.4242 61.8339 11.2841C62.1067 11.1402 62.3207 10.947 62.476 10.7046C62.6313 10.4621 62.7089 10.1875 62.7089 9.88069V8.95455C62.6332 9.00379 62.529 9.04925 62.3964 9.09091C62.2677 9.12879 62.1218 9.16478 61.9589 9.19887C61.7961 9.22917 61.6332 9.25758 61.4703 9.2841C61.3074 9.30682 61.1597 9.32766 61.0271 9.3466C60.743 9.38826 60.4949 9.45455 60.2828 9.54546C60.0707 9.63637 59.9059 9.75948 59.7885 9.91478C59.6711 10.0663 59.6124 10.2557 59.6124 10.483C59.6124 10.8125 59.7317 11.0644 59.9703 11.2386C60.2127 11.4091 60.5196 11.4943 60.8908 11.4943Z"
				fill="#02D4F5"
			/>
			<path
				d="M70.4534 13.1705C69.5594 13.1705 68.7905 12.9811 68.1466 12.6023C67.5064 12.2197 67.014 11.6894 66.6693 11.0114C66.3284 10.3333 66.1579 9.55304 66.1579 8.67046C66.1579 7.77652 66.3303 6.99243 66.675 6.31819C67.0235 5.64016 67.5178 5.11175 68.1579 4.73296C68.7981 4.35038 69.5594 4.1591 70.442 4.1591C71.2034 4.1591 71.87 4.29735 72.442 4.57387C73.014 4.85038 73.4666 5.23864 73.8 5.73864C74.1333 6.23864 74.317 6.82576 74.3511 7.50001H72.067C72.0026 7.0644 71.8322 6.71402 71.5556 6.44887C71.2829 6.17993 70.925 6.04546 70.4818 6.04546C70.1068 6.04546 69.7791 6.14773 69.4988 6.35228C69.2223 6.55304 69.0064 6.8466 68.8511 7.23296C68.6958 7.61932 68.6181 8.08713 68.6181 8.63637C68.6181 9.19319 68.6939 9.66667 68.8454 10.0568C69.0007 10.447 69.2185 10.7443 69.4988 10.9489C69.7791 11.1534 70.1068 11.2557 70.4818 11.2557C70.7583 11.2557 71.0064 11.1989 71.2261 11.0852C71.4496 10.9716 71.6333 10.8068 71.7772 10.5909C71.925 10.3712 72.0216 10.108 72.067 9.80114H74.3511C74.3132 10.4678 74.1314 11.0549 73.8056 11.5625C73.4837 12.0663 73.0386 12.4602 72.4704 12.7443C71.9022 13.0284 71.2299 13.1705 70.4534 13.1705Z"
				fill="#02D4F5"
			/>
			<path
				d="M80.0629 4.27273V6.09091H74.8072V4.27273H80.0629ZM76.0004 2.18182H78.4208V10.3182C78.4208 10.5417 78.4549 10.7159 78.5231 10.8409C78.5913 10.9621 78.686 11.0474 78.8072 11.0966C78.9322 11.1458 79.0761 11.1705 79.239 11.1705C79.3526 11.1705 79.4663 11.161 79.5799 11.1421C79.6936 11.1193 79.7807 11.1023 79.8413 11.0909L80.222 12.8921C80.1007 12.9299 79.9303 12.9735 79.7106 13.0227C79.4909 13.0758 79.2239 13.108 78.9095 13.1193C78.3261 13.1421 77.8148 13.0644 77.3754 12.8864C76.9398 12.7083 76.6007 12.4318 76.3583 12.0568C76.1159 11.6818 75.9966 11.2083 76.0004 10.6364V2.18182Z"
				fill="#02D4F5"
			/>
			<path
				d="M82.5743 13.1477C82.1993 13.1477 81.8774 13.0152 81.6084 12.75C81.3433 12.4811 81.2107 12.1591 81.2107 11.7841C81.2107 11.4129 81.3433 11.0947 81.6084 10.8296C81.8774 10.5644 82.1993 10.4318 82.5743 10.4318C82.938 10.4318 83.2562 10.5644 83.5289 10.8296C83.8016 11.0947 83.938 11.4129 83.938 11.7841C83.938 12.0341 83.8736 12.2633 83.7448 12.4716C83.6198 12.6761 83.455 12.8409 83.2505 12.9659C83.0459 13.0871 82.8206 13.1477 82.5743 13.1477Z"
				fill="#02D4F5"
			/>
			<path
				d="M47.6588 22.2727V24.0909H42.2725V22.2727H47.6588ZM43.5054 31V21.642C43.5054 21.0095 43.6285 20.4848 43.8747 20.0682C44.1247 19.6515 44.4656 19.339 44.8975 19.1307C45.3293 18.9223 45.8198 18.8182 46.3691 18.8182C46.7403 18.8182 47.0793 18.8466 47.3861 18.9034C47.6967 18.9602 47.9278 19.0114 48.0793 19.0568L47.6475 20.875C47.5528 20.8447 47.4353 20.8163 47.2952 20.7898C47.1588 20.7633 47.0187 20.75 46.8747 20.75C46.5187 20.75 46.2706 20.8333 46.1304 21C45.9903 21.1629 45.9202 21.392 45.9202 21.6875V31H43.5054Z"
				fill="#191C1D"
			/>
			<path
				d="M48.6575 31V22.2727H51.0041V23.7954H51.095C51.2541 23.2538 51.5212 22.8447 51.8962 22.5682C52.2712 22.2879 52.703 22.1477 53.1916 22.1477C53.3128 22.1477 53.4435 22.1553 53.5837 22.1704C53.7238 22.1856 53.8469 22.2064 53.953 22.2329V24.3807C53.8393 24.3466 53.6821 24.3163 53.4814 24.2898C53.2806 24.2633 53.0969 24.25 52.9302 24.25C52.5742 24.25 52.256 24.3276 51.9757 24.4829C51.6992 24.6345 51.4795 24.8466 51.3166 25.1193C51.1575 25.392 51.078 25.7064 51.078 26.0625V31H48.6575Z"
				fill="#191C1D"
			/>
			<path
				d="M56.963 31.1648C56.4062 31.1648 55.91 31.0682 55.4744 30.875C55.0388 30.678 54.6941 30.3883 54.4403 30.0057C54.1903 29.6193 54.0653 29.1383 54.0653 28.5625C54.0653 28.0776 54.1543 27.6705 54.3323 27.3409C54.5104 27.0114 54.7528 26.7462 55.0596 26.5454C55.3664 26.3447 55.7149 26.1932 56.1051 26.0909C56.499 25.9886 56.9119 25.9167 57.3437 25.875C57.8513 25.822 58.2604 25.7727 58.571 25.7273C58.8816 25.678 59.107 25.6061 59.2471 25.5114C59.3873 25.4167 59.4573 25.2765 59.4573 25.0909V25.0568C59.4573 24.697 59.3437 24.4186 59.1164 24.2216C58.893 24.0246 58.5748 23.9261 58.1619 23.9261C57.7263 23.9261 57.3797 24.0227 57.1221 24.2159C56.8645 24.4053 56.6941 24.6439 56.6108 24.9318L54.3721 24.75C54.4858 24.2197 54.7092 23.7614 55.0426 23.375C55.3759 22.9848 55.8058 22.6856 56.3323 22.4773C56.8627 22.2651 57.4763 22.1591 58.1733 22.1591C58.6581 22.1591 59.1221 22.2159 59.5653 22.3295C60.0123 22.4432 60.4081 22.6193 60.7528 22.8579C61.1013 23.0966 61.3759 23.4034 61.5767 23.7784C61.7774 24.1496 61.8778 24.5947 61.8778 25.1136V31H59.5823V29.7898H59.5142C59.374 30.0625 59.1865 30.303 58.9517 30.5114C58.7168 30.7159 58.4346 30.8769 58.1051 30.9943C57.7755 31.1079 57.3948 31.1648 56.963 31.1648ZM57.6562 29.4943C58.0123 29.4943 58.3267 29.4242 58.5994 29.2841C58.8721 29.1401 59.0861 28.947 59.2414 28.7045C59.3967 28.4621 59.4744 28.1875 59.4744 27.8807V26.9545C59.3986 27.0038 59.2945 27.0492 59.1619 27.0909C59.0331 27.1288 58.8873 27.1648 58.7244 27.1989C58.5615 27.2292 58.3986 27.2576 58.2358 27.2841C58.0729 27.3068 57.9252 27.3276 57.7926 27.3466C57.5085 27.3883 57.2604 27.4545 57.0483 27.5454C56.8361 27.6364 56.6714 27.7595 56.5539 27.9148C56.4365 28.0663 56.3778 28.2557 56.3778 28.4829C56.3778 28.8125 56.4971 29.0644 56.7358 29.2386C56.9782 29.4091 57.285 29.4943 57.6562 29.4943Z"
				fill="#191C1D"
			/>
			<path
				d="M63.2756 31V22.2727H65.5825V23.8125H65.6847C65.8666 23.3011 66.1696 22.8977 66.5938 22.6023C67.0181 22.3068 67.5256 22.1591 68.1166 22.1591C68.715 22.1591 69.2245 22.3087 69.645 22.6079C70.0654 22.9034 70.3457 23.3049 70.4859 23.8125H70.5768C70.7548 23.3125 71.0768 22.9129 71.5427 22.6136C72.0124 22.3106 72.5673 22.1591 73.2075 22.1591C74.0219 22.1591 74.6828 22.4186 75.1904 22.9375C75.7018 23.4526 75.9575 24.1837 75.9575 25.1307V31H73.5427V25.6079C73.5427 25.1231 73.4139 24.7595 73.1563 24.517C72.8987 24.2746 72.5768 24.1534 72.1904 24.1534C71.751 24.1534 71.4082 24.2936 71.162 24.5739C70.9158 24.8504 70.7927 25.2159 70.7927 25.6704V31H68.4461V25.5568C68.4461 25.1288 68.323 24.7879 68.0768 24.5341C67.8344 24.2803 67.5143 24.1534 67.1166 24.1534C66.8476 24.1534 66.6052 24.2216 66.3893 24.3579C66.1772 24.4905 66.0086 24.678 65.8836 24.9204C65.7586 25.1591 65.6961 25.4394 65.6961 25.7614V31H63.2756Z"
				fill="#191C1D"
			/>
			<path
				d="M81.3667 31.1705C80.4689 31.1705 79.6962 30.9886 79.0485 30.625C78.4045 30.2576 77.9083 29.7386 77.5598 29.0682C77.2114 28.3939 77.0371 27.5966 77.0371 26.6761C77.0371 25.7784 77.2114 24.9905 77.5598 24.3125C77.9083 23.6345 78.3989 23.1061 79.0314 22.7273C79.6678 22.3485 80.414 22.1591 81.2701 22.1591C81.8458 22.1591 82.3818 22.2519 82.878 22.4375C83.378 22.6193 83.8136 22.8939 84.1848 23.2614C84.5598 23.6288 84.8515 24.0909 85.0598 24.6477C85.2682 25.2008 85.3723 25.8485 85.3723 26.5909V27.2557H78.003V25.7557H83.0939C83.0939 25.4072 83.0182 25.0985 82.8667 24.8295C82.7152 24.5606 82.5049 24.3504 82.236 24.1989C81.9708 24.0436 81.6621 23.9659 81.3098 23.9659C80.9424 23.9659 80.6167 24.0511 80.3326 24.2216C80.0523 24.3883 79.8326 24.6136 79.6735 24.8977C79.5144 25.178 79.433 25.4905 79.4292 25.8352V27.2614C79.4292 27.6932 79.5087 28.0663 79.6678 28.3807C79.8307 28.6951 80.0598 28.9375 80.3553 29.1079C80.6508 29.2784 81.0011 29.3636 81.4064 29.3636C81.6754 29.3636 81.9216 29.3258 82.1451 29.25C82.3686 29.1742 82.5598 29.0606 82.7189 28.9091C82.878 28.7576 82.9992 28.572 83.0826 28.3523L85.3212 28.5C85.2076 29.0379 84.9746 29.5076 84.6223 29.9091C84.2739 30.3068 83.8231 30.6174 83.2701 30.8409C82.7208 31.0606 82.0864 31.1705 81.3667 31.1705Z"
				fill="#191C1D"
			/>
			<path
				d="M88.131 31L85.756 22.2727H88.2048L89.5571 28.1364H89.6367L91.0458 22.2727H93.4492L94.881 28.1023H94.9548L96.2844 22.2727H98.7276L96.3583 31H93.7958L92.2958 25.5114H92.1878L90.6878 31H88.131Z"
				fill="#191C1D"
			/>
			<path
				d="M103.263 31.1705C102.381 31.1705 101.617 30.983 100.973 30.608C100.333 30.2292 99.839 29.7026 99.4905 29.0284C99.142 28.3504 98.9677 27.5644 98.9677 26.6704C98.9677 25.7689 99.142 24.9811 99.4905 24.3068C99.839 23.6288 100.333 23.1023 100.973 22.7273C101.617 22.3485 102.381 22.1591 103.263 22.1591C104.146 22.1591 104.907 22.3485 105.547 22.7273C106.191 23.1023 106.687 23.6288 107.036 24.3068C107.384 24.9811 107.559 25.7689 107.559 26.6704C107.559 27.5644 107.384 28.3504 107.036 29.0284C106.687 29.7026 106.191 30.2292 105.547 30.608C104.907 30.983 104.146 31.1705 103.263 31.1705ZM103.275 29.2954C103.676 29.2954 104.011 29.1818 104.28 28.9545C104.549 28.7235 104.752 28.4091 104.888 28.0114C105.028 27.6136 105.098 27.161 105.098 26.6534C105.098 26.1458 105.028 25.6932 104.888 25.2954C104.752 24.8977 104.549 24.5833 104.28 24.3523C104.011 24.1212 103.676 24.0057 103.275 24.0057C102.869 24.0057 102.528 24.1212 102.252 24.3523C101.979 24.5833 101.773 24.8977 101.633 25.2954C101.496 25.6932 101.428 26.1458 101.428 26.6534C101.428 27.161 101.496 27.6136 101.633 28.0114C101.773 28.4091 101.979 28.7235 102.252 28.9545C102.528 29.1818 102.869 29.2954 103.275 29.2954Z"
				fill="#191C1D"
			/>
			<path
				d="M108.653 31V22.2727H110.999V23.7954H111.09C111.249 23.2538 111.516 22.8447 111.891 22.5682C112.266 22.2879 112.698 22.1477 113.187 22.1477C113.308 22.1477 113.438 22.1553 113.579 22.1704C113.719 22.1856 113.842 22.2064 113.948 22.2329V24.3807C113.834 24.3466 113.677 24.3163 113.476 24.2898C113.276 24.2633 113.092 24.25 112.925 24.25C112.569 24.25 112.251 24.3276 111.971 24.4829C111.694 24.6345 111.474 24.8466 111.312 25.1193C111.153 25.392 111.073 25.7064 111.073 26.0625V31H108.653Z"
				fill="#191C1D"
			/>
			<path
				d="M116.913 28.4886L116.918 25.5852H117.271L120.066 22.2727H122.844L119.089 26.6591H118.515L116.913 28.4886ZM114.719 31V19.3636H117.14V31H114.719ZM120.174 31L117.606 27.1989L119.219 25.4886L123.009 31H120.174Z"
				fill="#191C1D"
			/>
			<path
				d="M124.967 31.1477C124.592 31.1477 124.27 31.0151 124.001 30.75C123.736 30.4811 123.603 30.1591 123.603 29.7841C123.603 29.4129 123.736 29.0947 124.001 28.8295C124.27 28.5644 124.592 28.4318 124.967 28.4318C125.33 28.4318 125.648 28.5644 125.921 28.8295C126.194 29.0947 126.33 29.4129 126.33 29.7841C126.33 30.0341 126.266 30.2633 126.137 30.4716C126.012 30.6761 125.847 30.8409 125.643 30.9659C125.438 31.0871 125.213 31.1477 124.967 31.1477Z"
				fill="#191C1D"
			/>
			<path
				d="M131.053 31.142C130.391 31.142 129.79 30.9716 129.252 30.6307C128.718 30.286 128.294 29.7803 127.98 29.1136C127.669 28.4432 127.514 27.6212 127.514 26.6477C127.514 25.6477 127.675 24.8163 127.997 24.1534C128.319 23.4867 128.747 22.9886 129.281 22.6591C129.819 22.3258 130.408 22.1591 131.048 22.1591C131.536 22.1591 131.944 22.2424 132.269 22.4091C132.599 22.572 132.864 22.7765 133.065 23.0227C133.269 23.2651 133.425 23.5038 133.531 23.7386H133.605V19.3636H136.019V31H133.633V29.6023H133.531C133.417 29.8447 133.256 30.0852 133.048 30.3239C132.843 30.5587 132.576 30.7538 132.247 30.9091C131.921 31.0644 131.523 31.142 131.053 31.142ZM131.82 29.2159C132.211 29.2159 132.54 29.1098 132.809 28.8977C133.082 28.6818 133.29 28.3807 133.434 27.9943C133.582 27.6079 133.656 27.1553 133.656 26.6364C133.656 26.1174 133.584 25.6667 133.44 25.2841C133.296 24.9015 133.088 24.6061 132.815 24.3977C132.542 24.1894 132.211 24.0852 131.82 24.0852C131.423 24.0852 131.088 24.1932 130.815 24.4091C130.542 24.625 130.336 24.9242 130.195 25.3068C130.055 25.6894 129.985 26.1326 129.985 26.6364C129.985 27.1439 130.055 27.5928 130.195 27.9829C130.339 28.3693 130.546 28.6723 130.815 28.892C131.088 29.108 131.423 29.2159 131.82 29.2159Z"
				fill="#191C1D"
			/>
			<path
				d="M141.507 31.1705C140.609 31.1705 139.836 30.9886 139.188 30.625C138.545 30.2576 138.048 29.7386 137.7 29.0682C137.351 28.3939 137.177 27.5966 137.177 26.6761C137.177 25.7784 137.351 24.9905 137.7 24.3125C138.048 23.6345 138.539 23.1061 139.171 22.7273C139.808 22.3485 140.554 22.1591 141.41 22.1591C141.986 22.1591 142.522 22.2519 143.018 22.4375C143.518 22.6193 143.954 22.8939 144.325 23.2614C144.7 23.6288 144.992 24.0909 145.2 24.6477C145.408 25.2008 145.512 25.8485 145.512 26.5909V27.2557H138.143V25.7557H143.234C143.234 25.4072 143.158 25.0985 143.007 24.8295C142.855 24.5606 142.645 24.3504 142.376 24.1989C142.111 24.0436 141.802 23.9659 141.45 23.9659C141.082 23.9659 140.757 24.0511 140.473 24.2216C140.192 24.3883 139.973 24.6136 139.813 24.8977C139.654 25.178 139.573 25.4905 139.569 25.8352V27.2614C139.569 27.6932 139.649 28.0663 139.808 28.3807C139.971 28.6951 140.2 28.9375 140.495 29.1079C140.791 29.2784 141.141 29.3636 141.546 29.3636C141.815 29.3636 142.062 29.3258 142.285 29.25C142.509 29.1742 142.7 29.0606 142.859 28.9091C143.018 28.7576 143.139 28.572 143.223 28.3523L145.461 28.5C145.348 29.0379 145.115 29.5076 144.762 29.9091C144.414 30.3068 143.963 30.6174 143.41 30.8409C142.861 31.0606 142.226 31.1705 141.507 31.1705Z"
				fill="#191C1D"
			/>
			<path
				d="M154.514 22.2727L151.463 31H148.735L145.684 22.2727H148.241L150.054 28.517H150.145L151.951 22.2727H154.514Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1527_99649"
					x1="0"
					y1="0"
					x2="34"
					y2="34"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
});
