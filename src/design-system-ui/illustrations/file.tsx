import { IconProps } from 'public/images/design-system-ui/icons/base'
import { styled } from 'public/images/design-system-ui/styled-system/jsx'

export const File = styled((props: IconProps) => {
  return (
    <svg
      width={props.width || '220'}
      height={props.height || '195'}
      viewBox="0 0 220 195"
       fill={props.fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M177.551 157.783C177.551 157.783 197.469 165.145 201.306 172.915C206.776 184.039 179.673 191.81 168.327 194.019C155.347 196.554 157.633 192.792 157.633 192.792C157.633 192.792 173.714 193.446 174.694 184.694C176.163 173.161 178.531 160.728 177.551 157.783Z"
        fill="transparent"
      />
      <path
        d="M89.3061 108.87C89.3061 108.788 89.0612 108.706 88.5714 108.542C88.0817 108.379 87.1837 108.215 86.5306 108.052C86.5306 107.888 86.449 107.724 86.449 107.479C86.449 107.234 86.3674 106.988 86.3674 106.825C86.2857 106.252 86.2041 105.68 86.0408 105.025C85.7959 103.716 85.551 102.326 85.2245 100.69C85.0612 99.8721 84.898 99.0541 84.7347 98.1544C84.5715 97.1729 84.2449 96.1913 83.7551 95.2098C82.7755 93.3285 80.9796 91.529 78.6123 90.5474C78.0408 90.302 77.3878 90.1385 76.8163 89.9749C76.2449 89.8113 75.5919 89.7295 75.0204 89.5659C73.7959 89.3205 72.5715 88.9933 71.2653 88.7479C68.6531 88.1754 65.8776 87.6846 63.0204 87.1938C57.2245 86.1305 50.8572 85.0672 43.9184 84.0856C42.2041 83.8402 40.4082 83.5948 38.6123 83.3494C36.8163 83.1041 34.8572 82.9405 32.7347 83.3494C31.6735 83.5948 30.5306 84.0038 29.6327 84.8218C28.7347 85.6397 28.0817 86.7849 27.8368 87.8482C27.6735 88.4208 27.5919 88.9115 27.5102 89.4841C27.5102 89.9749 27.4286 90.5474 27.4286 91.12C27.4286 91.6108 27.4286 92.1833 27.4286 92.6741C27.5102 93.1649 27.5102 93.7374 27.5919 94.2282C27.8368 96.2731 28.2449 98.318 28.6531 100.281C29.0612 102.244 29.4694 104.289 29.8776 106.334C30.7755 110.424 31.6735 114.677 32.7347 118.93C34.8572 127.437 37.3878 136.353 40.5714 145.35C42.2041 149.849 44 154.348 46.1225 158.847C48.2449 163.345 50.6939 167.762 53.7959 171.934C55.2653 173.815 56.8163 175.615 58.6123 177.25C60.4082 178.886 62.449 180.277 64.7347 181.258C65.8776 181.749 67.1021 182.076 68.3265 182.322C69.4694 182.485 70.6123 182.649 71.6735 182.894C73.9592 183.222 76.1633 183.549 78.449 183.958C101.143 187.229 122.531 189.929 141.878 192.301C144.327 192.628 146.694 192.873 149.061 193.201C150.204 193.364 151.429 193.446 152.571 193.61C153.143 193.691 153.714 193.773 154.286 193.855L155.02 193.937L155.918 194.1C158.286 194.509 160.571 194.755 162.939 194.673C165.306 194.591 167.673 194.346 169.878 193.282C171.02 192.71 172.082 191.892 172.816 190.747C173.551 189.602 173.878 188.293 173.878 187.066C173.878 185.839 173.714 184.694 173.388 183.63C173.061 182.567 172.816 181.667 172.49 180.768C171.429 177.005 170.449 173.242 169.551 169.725C166.041 155.656 163.51 144.205 161.714 136.353C159.837 128.5 158.776 124.247 158.531 124.329C158.449 124.329 158.531 125.474 158.857 127.519C159.184 129.646 159.673 132.672 160.408 136.598C161.878 144.532 164.082 155.984 167.347 170.216C168.163 173.733 169.061 177.496 170.122 181.34C170.367 182.322 170.694 183.303 170.939 184.203C171.184 185.103 171.347 186.003 171.347 186.902C171.347 188.62 170.449 190.011 168.816 190.828C167.184 191.646 165.061 191.892 162.939 191.892C160.816 191.892 158.612 191.646 156.408 191.319L155.592 191.156C155.265 191.074 155.184 191.074 155.02 191.074L154.612 190.992C154.041 190.91 153.469 190.828 152.898 190.747C151.755 190.583 150.612 190.42 149.388 190.256C147.02 189.929 144.653 189.683 142.204 189.356C122.857 186.821 101.469 184.039 78.8572 180.768C76.5714 180.44 74.2857 180.113 72.0817 179.704C70.9388 179.541 69.8776 179.377 68.7347 179.132C67.7551 178.968 66.7755 178.641 65.7959 178.314C63.9184 177.496 62.2041 176.269 60.5714 174.878C58.9388 173.406 57.551 171.77 56.1633 169.971C53.2245 166.126 50.8572 161.791 48.8163 157.456C46.7755 153.121 44.9796 148.704 43.347 144.287C40.1633 135.453 37.6327 126.701 35.4286 118.194C34.3674 113.941 33.3878 109.769 32.4898 105.761C32.0817 103.716 31.5919 101.672 31.1837 99.7085C30.7755 97.6636 30.3674 95.7823 30.1225 93.901C30.0408 93.4103 30.0408 93.0013 29.9592 92.5105C29.9592 92.0197 29.9592 91.6108 29.9592 91.12C29.9592 90.711 30.0408 90.2203 30.0408 89.8113C30.1225 89.4023 30.1225 88.9933 30.2857 88.5844C30.6939 87.0302 31.6735 86.1305 33.2245 85.8033C34.7755 85.4761 36.4898 85.6397 38.2857 85.8033C40.0817 85.9669 41.7959 86.2123 43.5102 86.4577C50.3674 87.3574 56.8163 88.339 62.5306 89.2387C65.3878 89.7295 68.1633 90.1385 70.7755 90.6292C72.0817 90.8746 73.3061 91.12 74.5306 91.3654C75.1021 91.4472 75.7551 91.6108 76.3266 91.6926C76.898 91.7744 77.3878 91.938 77.8776 92.1015C79.8368 92.8377 81.3878 94.31 82.2857 95.9459C82.7755 96.7639 83.1021 97.5818 83.2653 98.3998C83.5102 99.2995 83.6735 100.117 83.8368 100.935C84.2449 102.571 84.5714 103.962 84.898 105.271C85.2245 106.579 85.551 107.806 85.7959 108.706C87.1837 108.87 87.8368 108.951 88.4082 108.951C88.9796 108.951 89.3061 108.951 89.3061 108.87Z"
        fill="currentColor"
      />
      <path
        d="M91.5919 109.442C91.4286 110.506 104.408 113.45 121.551 116.722C122.449 116.886 123.265 117.049 124.082 117.213C124.898 117.376 125.796 117.54 126.612 117.704C143.673 120.894 156.898 122.938 157.143 121.875C157.306 120.894 144.245 117.949 127.184 114.595C126.286 114.432 125.469 114.268 124.653 114.105C123.837 113.941 122.939 113.777 122.122 113.614C104.98 110.424 91.7551 108.461 91.5919 109.442Z"
        fill="currentColor"
      />
      <path
        d="M173.796 187.966C173.796 187.966 179.51 146.986 179.673 132.345C179.837 119.994 181.551 106.497 176.653 94.8007C174.122 88.7478 169.796 83.9219 163.51 82.0406C153.551 79.0142 143.102 78.1962 132.816 76.9693C121.959 75.6605 111.184 74.4336 100.327 73.1249C86.7755 71.489 73.3877 67.9718 59.6735 67.7264C47.0204 67.481 50.0408 73.6157 50.0408 73.6157C50.0408 73.6157 117.061 91.6924 125.224 90.5473C133.388 89.4022 148.816 92.4286 148.816 92.4286L162.122 102.817L166.694 123.756L169.224 144.041L171.347 163.918L173.796 187.966Z"
        fill="transparent"
      />
      <path
        d="M173.878 187.311C174.122 187.311 174.204 184.53 173.796 179.541C173.633 177.005 173.306 173.979 172.98 170.461C172.816 168.662 172.653 166.781 172.49 164.736C172.327 162.691 172.163 160.564 172 158.274C171.592 153.775 171.102 148.786 170.449 143.469C170.122 140.77 169.796 138.07 169.469 135.208C169.306 133.817 169.143 132.345 168.898 130.873C168.735 129.4 168.571 127.928 168.408 126.456C168.082 123.429 167.837 120.321 167.51 117.131C167.102 113.941 166.612 110.669 165.551 107.315C164.571 103.962 162.857 100.69 160.49 97.8272C158.041 95.0462 154.775 92.8377 151.184 91.6108C149.714 91.12 148.245 90.7928 146.775 90.5474C145.306 90.302 143.918 90.1384 142.449 89.9748C139.592 89.7295 136.735 89.6477 133.878 89.5659C132.082 89.4841 130.367 89.4841 128.653 89.4023C126.939 89.3205 125.306 89.0751 123.51 88.9115C120.082 88.5025 116.735 88.0936 113.469 87.6028C106.939 86.6212 100.735 85.3125 94.8571 84.0038C83.102 81.3045 72.5714 78.6871 63.6735 77.0512C59.1837 76.2332 55.1837 75.5789 51.5918 75.1699C48 74.7609 44.653 74.9245 42.2041 76.2332C40.9796 76.8876 40.0816 77.8691 39.6734 78.8507C39.1837 79.7504 39.1837 80.6502 39.1837 81.3863C39.2653 82.7769 39.6735 83.4312 39.8367 83.3494C40 83.3494 39.8367 82.6133 39.9183 81.3863C40 80.8138 40.1632 79.9958 40.5714 79.2597C40.9796 78.5235 41.7143 77.8691 42.7755 77.3784C44.8979 76.4786 47.9184 76.4786 51.3469 76.9694C54.8571 77.542 58.8571 78.2781 63.1837 79.2597C72 81.141 82.3673 84.0038 94.2041 86.7848C100.082 88.1754 106.367 89.5659 112.98 90.6292C116.327 91.12 119.673 91.529 123.102 91.9379C124.816 92.1833 126.612 92.3469 128.408 92.4287C130.204 92.5105 132 92.5923 133.796 92.6741C136.653 92.7559 139.429 92.8377 142.204 93.0831C143.592 93.1649 144.898 93.4103 146.286 93.6556C147.673 93.901 148.98 94.2282 150.204 94.6372C153.306 95.7005 156.082 97.5 158.204 99.8721C160.327 102.326 161.796 105.189 162.694 108.215C163.673 111.242 164.163 114.432 164.571 117.54C164.98 120.648 165.224 123.756 165.633 126.783C165.796 128.337 165.959 129.809 166.204 131.281C166.449 132.754 166.612 134.144 166.775 135.617C167.184 138.479 167.51 141.179 167.918 143.878C168.653 149.195 169.224 154.102 169.796 158.601C170.041 160.81 170.286 163.018 170.531 164.981C170.775 167.026 171.02 168.907 171.265 170.707C171.755 174.224 172.245 177.25 172.571 179.786C173.224 184.612 173.633 187.311 173.878 187.311Z"
        fill="currentColor"
      />
      <path
        d="M173.796 187.966C174.041 187.966 174.694 185.185 175.592 179.95C176.49 174.715 177.633 167.108 178.776 157.619C179.347 152.875 180 147.64 180.49 141.997C180.571 140.606 180.735 139.134 180.816 137.661C180.898 136.925 180.898 136.189 180.98 135.453C180.98 134.717 181.061 133.899 181.061 133.163C181.143 130.136 181.306 127.028 181.388 123.838C181.633 117.458 181.878 110.505 180.653 103.389C180 99.7902 179.02 96.1912 177.388 92.7558C176.571 91.0381 175.51 89.3204 174.286 87.7663C173.061 86.2122 171.592 84.8217 169.959 83.5947C168.653 82.6132 167.184 81.877 165.633 81.2227C164.082 80.6501 162.612 80.2411 161.143 79.8322C158.204 79.096 155.265 78.4416 152.163 77.9509C144.653 76.7239 137.306 76.1514 130.367 75.2516C123.347 74.4337 116.653 73.6975 110.286 72.9614C107.102 72.6342 104 72.2252 100.98 71.898C97.9592 71.5708 95.1021 71.1619 92.3265 70.7529C86.7755 69.9349 81.551 68.9534 76.8163 68.299C72.0816 67.6447 67.7551 67.1539 63.9184 66.9903C60.1633 66.8267 56.8163 66.8267 54.1225 67.4811C52.8163 67.8082 51.5918 68.299 50.6939 69.0352C49.7959 69.7713 49.3878 70.7529 49.3061 71.489C49.2245 72.2252 49.3878 72.7978 49.551 73.1249C49.7143 73.4521 49.8776 73.6157 49.8776 73.6157C49.9592 73.6157 49.8776 73.3703 49.8776 73.0432C49.8776 72.716 49.7959 72.2252 49.9592 71.5708C50.1225 70.9983 50.5306 70.3439 51.2653 69.7713C52 69.2806 53.0612 68.9534 54.2857 68.708C56.8163 68.299 60 68.4626 63.6735 68.708C67.4286 69.0352 71.6735 69.6077 76.3265 70.4257C80.9796 71.2437 86.1225 72.2252 91.7551 73.2067C94.5306 73.6975 97.4694 74.1065 100.49 74.5155C103.51 74.9244 106.612 75.2516 109.796 75.6606C116.163 76.4786 122.857 77.2965 129.796 78.1145C136.816 79.0142 144.082 79.6686 151.429 80.8955C154.367 81.3863 157.225 81.9588 160.082 82.695C161.469 83.104 162.939 83.4312 164.163 83.9219C165.469 84.4127 166.694 85.0671 167.755 85.885C169.143 86.8666 170.449 88.0935 171.51 89.4022C172.571 90.7927 173.469 92.265 174.286 93.7374C175.755 96.8456 176.735 100.199 177.388 103.553C178.612 110.26 178.449 117.049 178.204 123.429C178.122 126.619 178.041 129.809 177.959 132.836C177.959 133.572 177.959 134.308 177.878 135.044C177.878 135.78 177.796 136.516 177.796 137.252C177.714 138.725 177.633 140.115 177.551 141.506C177.143 147.15 176.653 152.385 176.163 157.129C175.184 166.617 174.449 174.306 173.878 179.541C173.714 185.103 173.551 187.966 173.796 187.966Z"
        fill="currentColor"
      />
      <path
        d="M89.4694 14.8049C89.3061 14.6413 88.0816 15.7865 86.1224 18.1585C85.1428 19.3854 84.0816 20.8578 82.9388 22.7391C81.7959 24.6203 80.6531 26.9106 79.9184 29.6917C79.102 32.4727 78.9388 35.8263 80 39.1799C81.1428 42.5335 83.4286 45.6417 86.6939 47.932C88.3265 48.9953 90.2041 49.8951 92.3265 50.3859C94.3673 50.8766 96.6531 50.9584 98.8571 50.3859C101.061 49.8133 103.265 48.5046 104.735 46.6233C106.286 44.742 107.184 42.3699 107.347 39.9161C107.429 37.953 107.102 35.9081 106.122 34.1086C105.633 33.2089 104.98 32.3091 104 31.6547C103.02 31.0004 101.878 30.5914 100.735 30.5914C98.1224 30.5096 95.6735 31.4912 93.7959 33.0453C91.9184 34.5176 90.6122 36.4807 89.7959 38.5255C89.3877 39.5889 89.0612 40.6522 88.898 41.7156C88.7347 42.7789 88.6531 43.8422 88.6531 44.9056C88.6531 46.9505 89.0612 48.9953 89.551 50.7948C90.5306 54.4756 92.0816 57.6656 93.4694 60.6103C94.9388 63.5549 96.4898 66.1724 97.9592 68.4626C100.98 73.0432 103.918 76.3968 106.041 78.6052C108.163 80.7319 109.551 81.7953 109.714 81.5499C109.878 81.3863 108.898 80.0776 107.02 77.7055C105.224 75.3334 102.612 71.898 99.8367 67.2357C98.449 64.9454 97.0612 62.328 95.7551 59.4651C94.449 56.6023 93.0612 53.4123 92.2449 50.0587C91.8367 48.341 91.5918 46.6233 91.5918 44.8238C91.5918 43.0243 91.8367 41.3066 92.5714 39.6707C93.2245 38.0348 94.3673 36.4807 95.7551 35.4173C97.1429 34.2722 98.8571 33.6996 100.49 33.6996C101.143 33.6996 101.633 33.8632 102.041 34.1904C102.449 34.5176 102.857 35.0083 103.184 35.5809C103.837 36.8078 104.082 38.1984 104 39.6707C103.918 41.4702 103.184 43.2697 102.122 44.5784C101.061 45.9689 99.5102 46.8687 97.8775 47.3594C96.2449 47.7684 94.449 47.7684 92.7347 47.4412C91.0204 47.1141 89.4694 46.3779 88.0816 45.4781C85.3061 43.6786 83.2653 40.9794 82.2857 38.2802C81.3061 35.4991 81.3061 32.6363 81.9592 30.1824C82.5306 27.6468 83.5102 25.4383 84.4082 23.557C85.3877 21.6757 86.2857 20.1216 87.102 18.8129C88.8163 16.359 89.7143 14.9685 89.4694 14.8049Z"
        fill="currentColor"
      />
      <path
        d="M98.2857 165.472C98.3673 164.981 91.8367 163.591 83.1837 162.527C82.7755 162.445 82.2857 162.445 81.8776 162.364C81.4694 162.282 81.0612 162.282 80.5714 162.2C71.9184 161.3 65.2245 161.3 65.2245 161.791C65.2245 162.282 71.8367 162.773 80.4082 163.754C80.8163 163.836 81.2245 163.836 81.7143 163.918C82.1224 164 82.5306 164 83.0204 164.081C91.5918 164.981 98.2041 165.963 98.2857 165.472Z"
        fill="currentColor"
      />
      <path
        d="M93.3061 170.87C93.3878 170.38 88.3265 168.989 81.6326 168.417C81.3061 168.417 80.9796 168.335 80.6531 168.335C80.3265 168.335 80 168.253 79.6735 168.253C72.8979 167.844 67.6735 168.335 67.7551 168.826C67.7551 169.316 72.898 169.316 79.5918 169.807C79.9184 169.807 80.2449 169.889 80.5714 169.889C80.8979 169.889 81.2245 169.971 81.551 169.971C88.1633 170.543 93.2245 171.361 93.3061 170.87Z"
        fill="currentColor"
      />
      <path
        d="M39.5918 156.556C39.102 155.575 31.0204 159.092 20.7347 164.081C20.2449 164.327 19.6734 164.572 19.1836 164.817C18.6939 165.063 18.2041 165.308 17.6326 165.554C7.34691 170.789 -0.40819 175.042 0.081606 176.023C0.489769 176.923 8.65304 173.488 18.9388 168.498C19.4285 168.253 20 168.007 20.4898 167.762C20.9796 167.517 21.4694 167.271 22.0408 167.026C32.3265 161.791 40 157.456 39.5918 156.556Z"
        fill="currentColor"
      />
      <path
        d="M218.122 76.8059C217.633 75.8243 210.122 79.1779 200.653 83.8403C200.163 84.0857 199.673 84.331 199.265 84.5764C198.776 84.8218 198.286 85.0672 197.878 85.3126C188.408 90.1385 181.306 94.2283 181.796 95.2098C182.204 96.1096 189.796 92.8378 199.265 88.1754C199.755 87.93 200.245 87.6846 200.653 87.4393C201.143 87.1939 201.633 86.9485 202.041 86.7031C211.429 81.7954 218.531 77.6238 218.122 76.8059Z"
        fill="currentColor"
      />
      <path
        d="M155.347 46.378C155.592 46.5416 155.837 46.5416 156.163 46.4598C156.49 46.378 156.898 46.2962 157.306 46.378C157.633 46.4598 157.878 46.6234 157.959 46.8688C157.959 46.9506 157.959 47.0324 157.959 47.2778C157.878 47.5232 157.796 47.8503 157.633 48.1775C157.551 48.3411 157.469 48.4229 157.388 48.5865C157.306 48.7501 157.224 48.8319 157.143 48.9955L157.061 49.1591L156.98 49.2409L156.898 49.1591C156.816 48.9955 156.653 48.9137 156.571 48.7501C156.408 48.5047 156.245 48.3411 156.163 48.1775C155.918 47.8503 155.837 47.5232 155.837 47.196C155.592 46.8688 155.592 46.5416 155.347 46.378C155.184 46.2144 154.857 46.2144 154.449 46.5416C154.041 46.8688 153.633 47.6867 153.796 48.5865C153.796 49.0773 153.959 49.568 154.204 50.0588C154.367 50.3042 154.449 50.4678 154.531 50.7132L154.612 50.8768L154.775 51.1221C154.857 51.2857 155.02 51.4493 155.184 51.6129C155.755 52.2673 156.571 52.6763 157.469 52.5127C157.878 52.4309 158.286 52.2673 158.694 51.9401C158.857 51.7765 159.102 51.6129 159.265 51.4493L159.51 51.2039L159.673 51.0404C159.837 50.8768 160 50.6314 160.163 50.386C160.327 50.1406 160.408 49.8952 160.571 49.6498C160.898 48.9955 161.061 48.3411 161.143 47.6049C161.224 46.8688 160.98 45.969 160.571 45.3147C159.673 44.006 158.041 43.7606 157.143 44.0877C156.163 44.4149 155.755 44.9875 155.51 45.3965C155.102 45.969 155.184 46.2962 155.347 46.378Z"
        fill="#231B1B"
      />
      <path
        d="M36.4082 28.5465C36.6531 28.7101 36.898 28.7101 37.2245 28.6283C37.551 28.6283 38.0408 28.5465 38.3674 28.6283C38.6939 28.7101 38.9388 28.8737 39.0204 29.119C39.0204 29.2008 39.0204 29.2826 39.0204 29.528C38.9388 29.7734 38.8572 30.1006 38.6939 30.4278C38.6123 30.5914 38.5306 30.6732 38.449 30.8367C38.3674 31.0003 38.2857 31.0821 38.2041 31.2457L38.1225 31.4093L38.0408 31.4911L37.9592 31.4093C37.8776 31.2457 37.7143 31.1639 37.6327 31.0003C37.4694 30.755 37.3062 30.5914 37.2245 30.4278C36.9796 30.1006 36.898 29.7734 36.898 29.4462C36.6531 29.0372 36.6531 28.7101 36.4082 28.5465C36.2449 28.3829 35.9184 28.3829 35.5102 28.7101C35.1021 29.0372 34.6939 29.8552 34.8572 30.7549C34.8572 31.2457 35.0204 31.7365 35.2653 32.2273C35.4286 32.4727 35.5102 32.6362 35.5919 32.8816L35.6735 33.0452L35.8368 33.2906C35.9184 33.4542 36.0817 33.6178 36.2449 33.7814C36.8164 34.4357 37.6327 34.8447 38.5306 34.6811C38.9388 34.5993 39.347 34.4357 39.7551 34.1086C39.9184 33.945 40.1633 33.7814 40.3266 33.6178L40.5715 33.3724L40.7347 33.2088C40.898 33.0452 41.0613 32.7998 41.2245 32.5544C41.3878 32.3091 41.4694 32.0637 41.6327 31.8183C41.9592 31.1639 42.1225 30.5096 42.2041 29.7734C42.2857 29.0372 42.0408 28.1375 41.6327 27.4831C40.7347 26.1744 39.1021 25.929 38.2041 26.2562C37.2245 26.5834 36.8164 27.156 36.5715 27.5649C36.1633 28.1375 36.2449 28.4647 36.4082 28.5465Z"
        fill="currentColor"
      />
      <path
        d="M124.898 42.4518C125.143 42.6153 125.388 42.6153 125.714 42.5335C126.041 42.4517 126.449 42.37 126.857 42.4518C127.184 42.5335 127.429 42.6971 127.51 42.9425C127.51 43.0243 127.51 43.1061 127.51 43.3515C127.429 43.5969 127.347 43.9241 127.184 44.2512C127.102 44.4148 127.02 44.4966 126.939 44.6602C126.857 44.8238 126.775 44.9056 126.694 45.0692L126.612 45.2328L126.531 45.3146L126.449 45.2328C126.367 45.0692 126.204 44.9874 126.122 44.8238C125.959 44.5784 125.796 44.4148 125.714 44.2512C125.469 43.9241 125.388 43.5969 125.388 43.2697C125.143 42.9425 125.143 42.6153 124.898 42.4518C124.735 42.2882 124.408 42.2882 124 42.6153C123.592 42.9425 123.184 43.7605 123.347 44.6602C123.347 45.151 123.51 45.6418 123.755 46.1325C123.918 46.3779 124 46.5415 124.082 46.7869L124.163 46.9505L124.327 47.1959C124.408 47.3595 124.571 47.5231 124.735 47.6866C125.306 48.341 126.122 48.75 127.02 48.5864C127.429 48.5046 127.837 48.341 128.245 48.0138C128.408 47.8502 128.653 47.6866 128.816 47.5231L129.061 47.2777L129.224 47.1141C129.388 46.9505 129.551 46.7051 129.714 46.4597C129.878 46.2143 129.959 45.9689 130.122 45.7236C130.449 45.0692 130.612 44.4148 130.694 43.6787C130.775 42.9425 130.531 42.0428 130.122 41.3884C129.224 40.0797 127.592 39.8343 126.694 40.1615C125.714 40.4887 125.306 41.0612 125.061 41.4702C124.653 41.961 124.735 42.2882 124.898 42.4518Z"
        fill="currentColor"
      />
      <path
        d="M7.10205 141.833C6.36735 141.097 4.7347 142.078 2.93878 143.796C2.85715 143.878 2.77551 143.96 2.69388 144.041C2.61225 144.123 2.53062 144.205 2.44898 144.287C0.816331 146.086 -0.244893 147.64 0.4898 148.458C1.14286 149.113 2.85715 148.213 4.65307 146.495C4.7347 146.414 4.81633 146.332 4.89796 146.25C4.9796 146.168 5.06123 146.086 5.14286 146.005C6.77551 144.205 7.75511 142.487 7.10205 141.833Z"
        fill="currentColor"
      />
      <path
        d="M218.939 133.654C217.959 133.245 217.388 133.49 216.98 134.144V134.226C216.98 134.226 216.98 134.308 216.898 134.308C216.653 134.962 216.898 135.617 217.878 136.026C218.775 136.435 219.429 136.107 219.837 135.535V135.453C219.837 135.453 219.837 135.371 219.918 135.371C220.082 134.717 219.837 134.063 218.939 133.654Z"
        fill="currentColor"
      />
      <path
        d="M12 81.6317C11.2653 82.3678 11.2653 83.0222 11.6735 83.513L11.7551 83.5948L11.8367 83.6766C12.3265 84.0856 12.9796 84.0855 13.7143 83.3494C14.3673 82.695 14.449 81.9589 14.0408 81.4681L13.9592 81.3863L13.8775 81.3045C13.4694 80.9773 12.7347 80.9773 12 81.6317Z"
        fill="currentColor"
      />
      <path
        d="M59.347 2.04492C58.8572 2.04492 58.449 2.4539 58.2857 3.10826C58.1225 3.76262 58.2041 4.66237 58.5306 5.64392L58.6123 5.8893L58.7755 6.29828C59.1837 7.19803 59.8368 7.93418 60.4082 8.34316C60.9796 8.75214 61.4694 8.75214 61.8776 8.42496C62.6123 7.77059 62.2041 6.54366 61.6327 5.07135L61.551 4.82596L61.4694 4.58058C60.898 3.19006 60.3265 2.04492 59.347 2.04492Z"
        fill="currentColor"
      />
      <path
        d="M115.592 16.9316C114.857 16.1954 113.878 16.5226 113.061 17.2587C113.061 17.2587 112.98 17.3405 112.98 17.4223C112.898 17.4223 112.898 17.5041 112.816 17.5041C112.082 18.3221 111.755 19.3036 112.49 20.0398C113.143 20.6941 114.122 20.4488 115.02 19.7126C115.102 19.7126 115.102 19.6308 115.102 19.549C115.184 19.549 115.184 19.4672 115.265 19.4672C116 18.5675 116.245 17.5859 115.592 16.9316Z"
        fill="currentColor"
      />
      <path
        d="M212.898 87.0303C212.163 86.2941 211.265 86.5395 210.531 87.1939L210.449 87.2757L210.367 87.3575C209.714 88.0936 209.469 88.9934 210.204 89.7295C210.857 90.3839 211.837 90.2203 212.571 89.566L212.653 89.4842L212.735 89.4024C213.388 88.5844 213.633 87.6847 212.898 87.0303Z"
        fill="currentColor"
      />
      <path
        d="M148.163 16.6043C147.429 15.8682 147.02 15.6228 146.857 15.6228C146.776 15.7864 147.02 16.1136 147.837 16.9315C148.49 17.5859 148.98 17.9131 149.143 17.9131C149.143 17.6677 148.816 17.2587 148.163 16.6043Z"
        fill="currentColor"
      />
      <path
        d="M196.653 106.661C195.918 105.925 194.449 106.743 192.98 108.133C192.898 108.215 192.816 108.297 192.735 108.379C192.653 108.461 192.571 108.542 192.49 108.624C191.102 110.096 190.286 111.487 191.02 112.305C191.673 112.959 193.143 112.223 194.694 110.833C194.775 110.751 194.857 110.669 194.939 110.587C195.02 110.505 195.102 110.424 195.184 110.342C196.571 108.788 197.388 107.315 196.653 106.661Z"
        fill="currentColor"
      />
    </svg>
  )
})
