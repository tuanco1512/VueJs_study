<template>
  <div class="desktop-header-block">
    <div class="header-desktop">
      <div class="header-desktop-left-column">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <g clip-path="url(#clip0_4218_7445)">
              <path
                d="M12.1618 13.5908L25.4063 0.888916H6.68655C5.98811 0.88981 5.29405 0.999125 4.62915 1.21296L9.73921 13.0996C9.8353 13.3227 9.98398 13.5192 10.1725 13.6723C10.3611 13.8254 10.5839 13.9306 10.822 13.9789C11.0601 14.0272 11.3063 14.0171 11.5396 13.9495C11.7729 13.8819 11.9864 13.7588 12.1618 13.5908Z"
                fill="#EC1F25"
              />
              <path
                d="M19.8641 13.5187L34.2222 18.4282V7.57544C34.2222 6.15299 33.7686 4.7676 32.9274 3.6206C32.0861 2.47361 30.9009 1.62479 29.5442 1.19751L19.3112 11.0113C19.1253 11.1899 18.9885 11.4132 18.9137 11.6599C18.839 11.9066 18.8289 12.1684 18.8844 12.4201C18.9399 12.6718 19.0592 12.905 19.2307 13.0974C19.4023 13.2898 19.6204 13.4349 19.8641 13.5187Z"
                fill="#EC1F25"
              />
              <path
                d="M1.96996 2.84094C1.3454 3.46107 0.849784 4.19871 0.511679 5.0113C0.173574 5.8239 -0.000327833 6.69539 4.63959e-07 7.57553L4.6396e-07 28.4067C4.6396e-07 30.18 0.704473 31.8808 1.95844 33.1348C3.21241 34.3887 4.91316 35.0932 6.68654 35.0932H15.8445L1.96996 2.84094Z"
                fill="#EC1F25"
              />
              <path
                d="M14.178 15.9337L12.8587 17.199C12.5765 17.4698 12.3838 17.8203 12.3061 18.2035C12.2284 18.5868 12.2696 18.9846 12.424 19.3439L19.2032 35.1113H27.5305C29.3039 35.1113 31.0046 34.4068 32.2586 33.1528C33.5125 31.8988 34.217 30.1981 34.217 28.4247V21.6893L16.1274 15.5017C15.794 15.3884 15.4359 15.3688 15.0922 15.445C14.7485 15.5212 14.4323 15.6902 14.178 15.9337Z"
                fill="#EC1F25"
              />
            </g>
            <defs>
              <clipPath id="clip0_4218_7445">
                <rect
                  width="34.2222"
                  height="34.2222"
                  fill="white"
                  transform="translate(0 0.888916)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Karo</span>
        </div>
        <div class="header-line"></div>
        <div>Trang chủ</div>
        <div class="menu-item" @click.prevent="ShowDropdown(1)">
          Mua nhà
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1.6665 1.66663L6.33317 6.33329L10.9998 1.66663"
                stroke="#000929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div v-if="isShow(1)" class="dropdown-menu">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="menu-item" @click.prevent="ShowDropdown(2)">
          Thuê nhà
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1.6665 1.66663L6.33317 6.33329L10.9998 1.66663"
                stroke="#000929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div v-if="isShow(2)" class="dropdown-menu">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeDropdown: null,
    };
  },

  methods: {
    ShowDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },

    isShow(index) {
      return this.activeDropdown === index;
    },
  },
};
</script>
